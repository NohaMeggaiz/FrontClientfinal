import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PayementService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-paiement-form',
  templateUrl: './effectuerpaiement.component.html',
  styleUrls: ['./effectuerpaiement.component.css']
})
export class EffectuerpaiementComponent implements OnInit {
  company: any;
  paymentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private payementService: PayementService
  ) {
    this.paymentForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    const companies = {
      "iam-recharges": {
        imgSrc: "https://www.iam.ma/ImagesMarocTelecom/Phototh%C3%A8que/Images-grandes/maroc-telecom-blanc-ar-grande.jpg",
        name: "IAM RECHARGES",
        fields: ["Téléphone du donateur", "Montant du don (DH)"],
        creancierCode: 555
      },
      "iam-factures": {
        imgSrc: "https://www.iam.ma/ImagesMarocTelecom/Phototh%C3%A8que/Images-grandes/maroc-telecom-blanc-ar-grande.jpg",
        name: "IAM FACTURES",
        fields: ["Téléphone du donateur", "Montant du don (DH)"],
        creancierCode: 12
      },
      "redal": {
        imgSrc: "https://media.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_1536_768/0/1584028354410?e=2147483647&v=beta&t=gvvf396mzkaHgH7xzYheZrBPrkBNxGfgLSjZQ1w0UkQ",
        name: "REDAL",
        fields: ["Téléphone du donateur", "Montant du don (DH)"],
        creancierCode: 13
      },
      "amendis-tanger": {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm3XBL01OW3dxqviMt3clLQdZq_p4-YqoG6YPP38HGA&s",
        name: "AMENDIS TANGER",
        fields: ["Téléphone du donateur", "Montant du don (DH)"],
        creancierCode: 14
      },
      "amendis-tetouan": {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm3XBL01OW3dxqviMt3clLQdZq_p4-YqoG6YPP38HGA&s",
        name: "AMENDIS TETOUAN",
        fields: ["Téléphone du donateur", "Montant du don (DH)"],
        creancierCode: 15
      }
    };

    this.activatedRoute.paramMap.subscribe(params => {
      const companyId = params.get('id');
      this.company = companies[companyId as keyof typeof companies];
      this.buildForm();
    });
  }

  get creancierCode(): number | undefined {
    return this.company?.creancierCode;
  }

  buildForm() {
    const formGroup: any = {};
    if (this.company) {
      this.company.fields.forEach((field: string) => {
        formGroup[field] = ['', Validators.required];
      });
    }
    this.paymentForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const formData = this.paymentForm.value;
      
      // Logging the numTel and montant to the console
      console.log('NumTel:', formData["Téléphone du donateur"]);
      console.log('Montant:', formData["Montant du don (DH)"]);

      const transactionRequest = {
        numTel: formData["Téléphone du donateur"],
        creancierCode: this.creancierCode?.toString() || '',
        montant: formData["Montant du don (DH)"]
      };

      this.payementService.makeTransaction(transactionRequest).subscribe(response => {
        // Handle the response here
        this.router.navigate(['/facture-form'], {
          state: {
            data: formData,
            creancierName: this.company.name,
            creancierLogo: this.company.imgSrc,
            transactionType: 'facture', // Adjust based on the company type if needed
            creanceAmount: formData["Montant du don (DH)"] // Adjust based on the input field name
          }
        });
      }, error => {
        // Handle error here
        console.error('Transaction failed', error);
      });
    }
  }
}

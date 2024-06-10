import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-payment',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.css']
})
export class FactureFormComponent implements OnInit {
  formData: any;
  creancierName: string;
  creancierLogo: string;
  creanceName: string;
  creanceAmount: number;
  transactionType: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = 'Some Creance'; // Adjust as needed
    this.creanceAmount = navigation?.extras?.state?.['creanceAmount'] || 0;
    this.transactionType = navigation?.extras?.state?.['transactionType'] || 'facture';
  }

  ngOnInit(): void {
    console.log(this.formData);
    console.log(this.creancierName);
    console.log(this.creancierLogo);
    console.log(this.creanceName);
    console.log(this.creanceAmount);
    console.log("type of transaction: " + this.transactionType);
  }

  navigateToRecap() {
    this.router.navigate(['/recapitulatif'], {
      state: {
        data: this.formData,
        creancierName: this.creancierName,
        creancierLogo: this.creancierLogo,
        creanceName: this.creanceName,
        creanceAmount: this.creanceAmount,
        transactionType: this.transactionType
      }
    });
  }

  getTransactionDetails(): { label: string, value: any }[] {
    return [
      { label: 'Nom et prénom du donateur', value: this.formData['Nom et Prénom du donateur'] },
      { label: 'Montant du don', value: this.creanceAmount }
    ];
  }

  calculateTotalAmount(): number {
    return this.creanceAmount;
  }

}

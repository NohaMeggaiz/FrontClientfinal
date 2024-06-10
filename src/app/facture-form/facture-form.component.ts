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
  transactionType : string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = navigation?.extras?.state?.['creanceName'] || '';
    this.creanceAmount = navigation?.extras?.state?.['creanceAmount'] || 0;
    this.transactionType = navigation?.extras?.state?.['transactionType'];
  }

  ngOnInit(): void {
    console.log(this.formData);
    console.log(this.creancierName);
    console.log(this.creancierLogo);
    console.log(this.creanceName);
    console.log(this.creanceAmount);
    console.log("type of transaction"+ this.transactionType);
  }

  getTransactionDetails(): { label: string, value: any }[] {
    switch (this.transactionType.toLowerCase()) {
      case 'facture':
        return [
          { label: 'Reference ID', value: this.formData['ReferenceID'] },
          { label: 'Months Unpaid', value: this.formData['unpaidMonths'] }
        ];
      case 'donnation':
        return [
          { label: 'Nom et prénom du donnateur', value: this.formData['donorName'] },
          { label: 'Montant du don', value: this.formData['donationAmount'] }
        ];
      case 'recharge':
        return [
          { label: 'Numero de telephone', value: this.formData['phoneNumber'] },
          { label: 'Type de recharge', value: this.formData['rechargeType'] },
          { label: 'Montant de recharge', value: this.formData['rechargeAmount'] }
        ];
      default:
        return [];
    }
  }
  calculateTotalAmount(): number {
    // Logic to calculate the total amount based on transaction details
    let totalAmount = 0;

    // Adjust the calculation based on your specific requirements
    totalAmount = this.formData['amount'] || this.creanceAmount;

    return totalAmount;
  }

}

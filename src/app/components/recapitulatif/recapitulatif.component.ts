import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
  formData: any;
  creancierName: string;
  creancierLogo: string;
  creanceName: string;
  creanceAmount: number;
  transactionType: string;

  constructor(private router: Router, private transactionService: TransactionService) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = navigation?.extras?.state?.['creanceName'] || 'Some Creance'; // Adjust as needed
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

  calculateTotalAmount(): number {
    return this.creanceAmount;
  }

  confirmTransaction() {
    const transactionRequest = {
      numTel: this.formData['numTel'] || '',
      creancierCode: this.formData['creancierCode'] || '',
      montant: this.creanceAmount
    };

    this.transactionService.makeTransaction(transactionRequest).subscribe(
      response => {
        console.log('Transaction successful', response);
        this.router.navigate(['/initial-interface'], {
          state: { success: true, message: 'Transaction successful!' }
        });
      },
      error => {
        console.error('Transaction failed', error);
        // Handle error appropriately
      }
    );
  }
}

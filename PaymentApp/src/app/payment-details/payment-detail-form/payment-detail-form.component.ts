import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css'],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(public paymentDetailService: PaymentDetailService) {}

  ngOnInit(): void {
    console.log(this.paymentDetailService);
  }

  onSubmit(form: NgForm) {
    this.paymentDetailService.postPaymentDetail().subscribe(
      (res) => {
        this.paymentDetailService.formData = new PaymentDetail();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

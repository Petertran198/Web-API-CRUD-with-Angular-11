import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable()
export class PaymentDetailService {
  constructor() {}

  formData: PaymentDetail = new PaymentDetail();
}

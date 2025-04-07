export class CreatePaymentDto {
  amount: number;
  currency: string;
  paymentMethod: string;
  description?: string;
  customerId: string;
}

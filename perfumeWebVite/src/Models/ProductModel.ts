export default class productModel {
  constructor(
    public productId: number,
    public productName: string,
    public productDescription: string,
    public productPrice: string,
    public productStockAmount: string,
    public imageUrl: string,
    public productIsBestSeller: boolean
  ) {}
}

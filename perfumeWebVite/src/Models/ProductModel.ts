export default class ProductModel {
  constructor(
    public productId: number,
    public productName: string,
    public productDescription: string,
    public productPrice: string,
    public productStockAmount: string,
    public imageUrl: string,
    public productIsBestSeller: boolean,
    public productBrandName: string
  ) {}
}

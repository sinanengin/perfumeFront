import ProductModel from "../../../../Models/ProductModel";

const GetProducts: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={props.product.imageUrl} width="250" height="233" />

        <h5 className="card-title">{props.product.productName}</h5>
        <h6 className="mt-2">{props.product.productName}</h6>
        <p className="card-text">{props.product.productPrice}₺</p>
      </div>
    </div>
  );
};

export default GetProducts;

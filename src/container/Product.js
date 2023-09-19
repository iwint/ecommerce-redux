import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";

export default function Product() {
  const params = useParams();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  return (
    <div className="card mt-2 ">
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="card-body mt-3">
        <div className="card-title">{props.title}</div>
        <h6 className="mt-2">Price: {`$${props.price}`}</h6>
        <h6 className="mt-2">Discount: {`$${props.discountPercentage}`}%</h6>
        <h6 className="mt-2">Rating: {`$${props.rating}`}/5</h6>
        <div className="mt-3">
          {props.stock > 0 ? (
            <>
                <button className="btn btn-success">Buy Now</button>
                <button className="ms-3 btn btn-success">Add to cart</button>
            </>
            
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}

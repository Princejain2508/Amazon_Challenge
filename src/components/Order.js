import React from "react";
import "./css/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ id, data }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <p>Order Id: {id}</p>
      </p>
      {data.basket?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          title={item.title}
          rating={item.rating}
          price={item.price}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={data.amount}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;

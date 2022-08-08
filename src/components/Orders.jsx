import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import React from "react";

export default function Orders() {
  const orders = useOrders();
  console.log(orders);
  const prototypes = usePrototypes();

  const { remove, removeAll } = useActions();

  const totalPrice = React.useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders </div>
          <div className="subtitle">Click this to add an order</div>
        </div>
      </aside>
    );
  } else {
    return (
      <aside>
        <div className="order">
          <div className="body">
            {orders.map((element) => {
              const { id } = element;
              // 구조분해할당
              const prototype = prototypes.find((element) => element.id === id);

              return (
                <div className="item" key={id}>
                  <div className="img">
                    <video src={prototype.thumbnail} />
                  </div>
                  <div className="content">
                    <p className="title">
                      {prototype.title} x {element.quantity}
                    </p>
                    <p className="price">
                      ${prototype.price * element.quantity}
                    </p>
                    <button className="btn  btn--cross">
                      <i
                        className="icon icon--delete"
                        onClick={() => {
                          remove(id);
                        }}
                      />
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <br />
          <hr />
          <div style={{ margin: "auto" }}>
            Total Price : ${totalPrice}
            <button className="btn btn--link">
              <i className="icon icon--delete" onClick={removeAll} />
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            check Out
          </button>
        </div>
      </aside>
    );
  }
}

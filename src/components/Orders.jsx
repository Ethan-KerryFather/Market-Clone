import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Orders() {
  const orders = useOrders();
  console.log(orders);
  const prototypes = usePrototypes();
  const { remove } = useActions();
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
              const click = () => {
                remove(id);
              };
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
                    <button className="btn btn--link" onClick={remove(id)}>
                      <i className="icon icon--cross" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    );
  }
}

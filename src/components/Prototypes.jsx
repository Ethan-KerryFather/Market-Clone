import React from "react";
import usePrototypes from "../hooks/usePrototypes";
import useActions from "../hooks/useActions";
export default function Prototypes() {
  const prototypes = usePrototypes();

  const { addToOrder, remove, removeAll } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((element) => {
          const { id, thumbnail, title, price, desc, pieUrl } = element;

          return (
            <div key={id} className="prototype">
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                >
                  <video
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    autoPlay
                    muted
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i
                      className="icon icon--plus"
                      onClick={() => {
                        addToOrder(id);
                      }}
                    />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">{price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

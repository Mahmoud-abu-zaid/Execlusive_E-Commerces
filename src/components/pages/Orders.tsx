import { useShop } from "../Context/context";

export default function Orders() {
  const { orders } = useShop();
  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((prodect) => (
          <div key={prodect.id}>
            <p>{prodect.title}</p>
            <p>{prodect.priceAfter}</p>
          </div>
        ))
      )}
    </div>
  );
}

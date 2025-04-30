import { useShop } from "../Context/context";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useShop();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No products in wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((prodect) => (
            <div key={prodect.id} className="border p-2 rounded">
              <img src={prodect.imgProdect} alt={prodect.title} className="w-full h-32 object-contain" />
              <h3 className="text-sm mt-2">{prodect.title}</h3>
              <p className="text-red-500">{prodect.priceAfter}</p>
              <button onClick={() => removeFromWishlist(prodect.id)} className="text-sm mt-2 text-white bg-red-500 px-2 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

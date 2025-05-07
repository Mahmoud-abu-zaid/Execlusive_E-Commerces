import { createContext, useEffect, useState, ReactNode, useContext } from "react";

export interface Product {
  id: number;
  title: string;
  imgProdect: string;
  priceAfter: string;
  priceBefore: string;
  PriceReduction: string;
  rating: number;
  Quantity: number;
  orderedQuantity?: number;
  orderedSubtotal?: number;
}

interface ShopContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: number) => boolean;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeCart: (productId: number) => void;
  isCart: (productId: number) => boolean;
  quantities: { [key: number]: number };
  updateQuantity: (id: number, qty: number) => void;
  subtotal: number;
  orders: Product[];
  addOrder: (products: Product[]) => void;
}

export const ShopContext = createContext<ShopContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},
  isInWishlist: () => false,
  cart: [],
  addToCart: () => {},
  removeCart: () => {},
  isCart: () => false,
  quantities: {},
  updateQuantity: () => {},
  subtotal: 0,
  orders: [],
  addOrder: () => {},
});
export const useShop = () => useContext(ShopContext);

interface ProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const [cart, setCart] = useState<Product[]>([]);

  const [orders, setOrders] = useState<Product[]>([]);
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed: (Product | null)[] = JSON.parse(storedCart);
      const filtered = parsed.filter((prodect): prodect is Product => prodect !== null);
      setCart(filtered);
    }

    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const addToWishlist = (product: Product) => {
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const removeFromWishlist = (productId: number) => {
    const updated = wishlist.filter((item) => item.id !== productId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };
  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  const addToCart = (product: Product) => {
    if (!product) return;
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeCart = (productId: number) => {
    const updated = cart.filter((item) => item.id !== productId);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const isCart = (productId: number) => {
    return cart.some((item) => item && item.id === productId);
  };

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const updateQuantity = (id: number, qty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  const subtotal = cart.reduce((sum, item) => {
    if (!item) return sum;

    const quantity = quantities[item.id] || 1;
    const price = parseFloat(item.priceAfter.replace("$", "")) || 0;
    return sum + quantity * price;
  }, 0);

  const addOrder = (products: Product[]) => {
    const updatedProducts = products.map((product) => {
      const quantity = quantities[product.id] || 1;
      const price = parseFloat(product.priceAfter.replace("$", "")) || 0;
      const subtotal = quantity * price;

      return {
        ...product,
        orderedQuantity: quantity,
        orderedSubtotal: subtotal,
      };
    });

    const updated = [...orders, ...updatedProducts];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));

    setCart([]);
    localStorage.removeItem("cart");
    setQuantities({});
    console.log(JSON.parse(localStorage.getItem("orders")!));
  };

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        cart,
        addToCart,
        removeCart,
        isCart,
        quantities,
        updateQuantity,
        subtotal,
        orders,
        addOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

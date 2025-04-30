import { createContext, useEffect, useState, ReactNode, useContext } from "react";

// نوع المنتج
export interface Product {
  id: number;
  title: string;
  imgProdect: string;
  priceAfter: string;
  priceBefore: string;
  PriceReduction: string;
  rating: number;
  Quantity: number;
}

interface ShopContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeCart: (productId: number) => void;
  isCart: (productId: number) => boolean;
}

export const ShopContext = createContext<ShopContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  cart: [],
  addToCart: () => {},
  removeCart: () => {},
  isCart: () => false,
});
export const useShop = () => useContext(ShopContext);

interface ProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // استرجاع wishlist من localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // wishlist functions
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

  // cart functions
  const addToCart = (product: Product) => {
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
    return cart.some((item) => item.id === productId); 
  };
  return (
    <ShopContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cart,
        addToCart,
        removeCart,
        isCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

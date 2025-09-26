// Type for product images
export type ProductImage = {
  full: string;
  thumb: string;
  alt?: string; 
};

// Type for each item in the cart
export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

// Type for all possible cart actions (for reducer)
export type CartAction =
  | { type: "add"; payload: CartItem }
  | { type: "remove"; id: string }
  | { type: "updateQty"; id: string; qty: number }
  | { type: "clear" };





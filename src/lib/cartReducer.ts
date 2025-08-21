import type { CartItem, CartAction } from "@/types";

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i
        );
      }
      return [...state, action.payload];
    }
    case "remove":
      return state.filter((i) => i.id !== action.id);
    case "updateQty":
      return state.map((i) =>
        i.id === action.id ? { ...i, qty: action.qty } : i
      );
    case "clear":
      return [];
    default:
      return state;
  }
}


import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import type { CartItem, CartAction } from "../types";
import { formatCurrency } from "@/lib/format";


export default function CartDrawer({ items, dispatch }: { items: CartItem[]; dispatch: React.Dispatch<CartAction> }) {
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 rounded-full bg-primary px-1.5 text-[10px] font-bold leading-5 text-primary-foreground">
              {count}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[380px] sm:w-[420px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <Separator className="my-3" />
        <div className="flex-1 space-y-3 overflow-auto pr-1">
          {items.length === 0 && <p className="text-muted-foreground">Your cart is empty.</p>}
          {items.map((i) => (
            <Card key={i.id} className="group">
              <CardContent className="flex items-center gap-3 p-3">
                <img src={i.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-medium line-clamp-1">{i.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {formatCurrency(i.price)} × {i.qty}{" "}
                    <span className="font-semibold text-foreground">= {formatCurrency(i.price * i.qty)}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  onClick={() => dispatch({ type: "remove", id: i.id })}
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-3" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-lg font-semibold">{formatCurrency(total)}</span>
        </div>
        <Button className="mt-3" disabled={items.length === 0}>
          Checkout
        </Button>
      </SheetContent>
    </Sheet>
  );
}

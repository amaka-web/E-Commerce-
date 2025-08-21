import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import QtyPicker from "./QtyPicker";

export default function ProductDetails({
  product,
  qty,
  setQty,
  addToCart,
}: {
  product: { brand: string; title: string; description: string; price: number; originalPrice: number; discountPercent: number };
  qty: number;
  setQty: (n: number) => void;
  addToCart: () => void;
}) {
  return (
    <section className="flex flex-col justify-center">
      <p className="text-xs font-semibold tracking-widest text-primary/80">{product.brand.toUpperCase()}</p>
      <h1 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">{product.title}</h1>
      <p className="mt-4 text-muted-foreground">{product.description}</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="text-3xl font-extrabold">{formatCurrency(product.price)}</div>
        <Badge variant="secondary" className="rounded-lg px-2 py-1">{product.discountPercent}%</Badge>
      </div>
      <div className="text-sm text-muted-foreground line-through">{formatCurrency(product.originalPrice)}</div>
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row">
        <QtyPicker value={qty} setValue={setQty} />
        <Button
          className="flex-1 gap-2 bg-amber-700 border-amber-900 focus:border-amber-700"
          onClick={addToCart}
        >
          <ShoppingCart className="h-5 w-5 " /> Add to cart
        </Button>
      </div>
    </section>
  );
}

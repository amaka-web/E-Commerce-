import { useReducer, useState } from "react";
import CartDrawer from "@/components/CartDrawer";
import Lightbox from "@/components/Lightbox";
import ProductDetails from "@/components/ProductDetails";
import { Separator } from "@/components/ui/separator";
import { cartReducer } from "@/lib/cartReducer";
import type { CartItem } from "./types";
import { Button } from "./components/ui/button";

const product = {
  id: "sneaker-001",
  brand: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
  originalPrice: 250,
  discountPercent: 50,
  images: [
    { full: "/images/image-product-1.jpg", thumb: "/images/image-product-1-thumbnail.jpg", alt: "Sneaker hero" },
    { full: "/images/image-product-2.jpg", thumb: "/images/image-product-2-thumbnail.jpg", alt: "Sneaker side on podium" },
    { full: "/images/image-product-3.jpg", thumb: "/images/image-product-3-thumbnail.jpg", alt: "Sneaker top view" },
    { full: "/images/image-product-4.jpg", thumb: "/images/image-product-4-thumbnail.jpg", alt: "Sneaker minimal" },
  ],
};

export default function App() {
  const [current, setCurrent] = useState(0);
  const [qty, setQty] = useState(1);
  const [cart, dispatch] = useReducer(cartReducer, [] as CartItem[]);

  const addToCart = () => {
    dispatch({
      type: "add",
      payload: { id: product.id, title: product.title, price: product.price, image: product.images[0].thumb, qty },
    });
    setQty(1);
  };

const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-extrabold tracking-tight">sneakers</a>
            <nav className="hidden gap-6 md:flex">
              {["Collections", "Men", "Women", "About", "Contact"].map((n) => (
                <a key={n} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <CartDrawer items={cart} dispatch={dispatch} />
            <img
              src="/images/image-avatar.png"
              alt="User avatar"
              className="h-9 w-9 rounded-full ring-2 ring-transparent transition hover:ring-primary"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <section>
          {/*<Lightbox images={product.images} index={current} onIndex={setCurrent} />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`overflow-hidden rounded-xl ring-offset-2 transition-all ${
                  i === current ? "ring-2 ring-primary" : "ring-1 ring-transparent hover:ring-muted"
                }`}
                aria-label={`Show image ${i + 1}`}
              >
                <img src={img.thumb} alt={img.alt} className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
          */}
          <Lightbox
  images={product.images}
  index={current}
  onIndex={setCurrent}
  open={lightboxOpen}
  onOpenChange={setLightboxOpen}
/>

<div className="mt-4 grid grid-cols-4 gap-3">
  {product.images.map((img, i) => (
    <Button
      key={i}
      onClick={() => {
        setCurrent(i);
        setLightboxOpen(true); // <-- open the modal when a thumbnail is clicked
      }}
      className={`overflow-hidden rounded-xl ring-offset-2 transition-all ${
        i === current ? "ring-2 ring-primary" : "ring-1 ring-transparent hover:ring-muted"
      }`}
    >
      <img src={img.thumb} alt={img.alt} className="aspect-square w-full object-cover" />
    </Button>
  ))}
</div>
        </section>

        <ProductDetails product={product} qty={qty} setQty={setQty} addToCart={addToCart} />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10">
        <Separator className="mb-4" />
        <div className="text-xs text-muted-foreground items-center text-center justify-center">
          Faith Chiamaka {new Date().getFullYear()}.
        </div>
      </footer>
    </div>
  );
}


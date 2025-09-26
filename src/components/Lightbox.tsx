// DialogClose
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
//import { Button } from "@/components/ui/button";
//import { X } from "lucide-react";

type ProductImage = { full: string; thumb: string; alt?: string };

// Lightbox component to display product images in a modal
// Accepts an array of images, the currently selected index, and handlers for changing the index
export default function Lightbox({
  images,
  index,
  onIndex,
  open,
  onOpenChange,
}: {
  images: ProductImage[];
  index: number;
  onIndex: (i: number) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <img
          src={images[index].full}
          alt={images[index].alt}
          className="aspect-square w-full rounded-2xl object-cover cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <img
          src={images[index].full}
          alt={images[index].alt}
          className="w-full max-h-[80vh] object-contain bg-black/5"
        />
        <div className="grid grid-cols-4 gap-3 p-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => onIndex(i)}
              className={`overflow-hidden rounded-xl ring-offset-2 transition-all ${
                i === index ? "ring-2 ring-primary" : "ring-1 ring-transparent hover:ring-muted"
              }`}
            >
              <img src={img.thumb} alt={img.alt} className="aspect-square w-full object-cover" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

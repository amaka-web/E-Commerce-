import { useState } from "react";
import Lightbox from "./Lightbox";

type Image = {
  src: string;
  alt: string;
};

  const images: Image[] = [
  { src: "/images/image-product-1.jpg", alt: "Product 1" },
  { src: "/images/image-product-2.jpg", alt: "Product 2" },
  { src: "/images/image-product-3.jpg", alt: "Product 3" },
  { src: "/images/image-product-4.jpg", alt: "Product 4" },
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
 const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      {/* Main Image */}
      <img
        src={images[selected].src}
        alt={images[selected].alt}
        className="rounded-lg cursor-pointer"
       onClick={() => setLightbox(true)}
      />

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelected(index)}
            className={`w-16 h-16 rounded cursor-pointer border-2 ${
              selected === index ? "border-orange-500" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox 
        images={images.map((img) => ({ full: img.src, thumb: img.src, alt: img.alt }))}
        index={selected}
        onIndex={setSelected}
        open={lightbox}
        onOpenChange={setLightbox}
      />
     
    </div>
  );
}


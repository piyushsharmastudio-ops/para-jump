import React from "react";
import Image from "next/image";

const images = [
  "/images/alex-azabache-RJ_zZKgKrog-unsplash.jpg",
  "/images/andrew-neel-z55CR_d0ayg-unsplash.jpg",
  "/images/didin-emelu-8--kuxbxuKU-unsplash.jpg",
  "/images/jonathan-forage-1azAjl8FTnU-unsplash.jpg",
  "/images/luca-bravo-O453M2Liufs-unsplash.jpg",
  "/images/raimond-klavins-xAqrT-279UA-unsplash.jpg",
];

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Photo & Video Gallery</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Action shots and aerial views capturing the thrill and beauty.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="group relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl glass-card card-glow">
              <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

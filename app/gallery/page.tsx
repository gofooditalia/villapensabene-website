import ImageGallery from "@/components/ImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleria",
  description: "Guarda le foto del nostro ristorante e dei nostri piatti",
};

// Placeholder images - sostituire con immagini reali
const galleryImages = [
  {
    src: "/placeholder-restaurant.jpg",
    alt: "Interno del ristorante Villa Pensabene",
  },
  {
    src: "/placeholder-dish-1.jpg",
    alt: "Piatto tradizionale siciliano",
  },
  {
    src: "/placeholder-dish-2.jpg",
    alt: "Specialità del ristorante",
  },
  // Aggiungere più immagini qui quando disponibili
];

export default function GalleryPage() {
  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Galleria
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Scopri l'atmosfera del nostro ristorante e i nostri piatti attraverso le immagini
          </p>
        </div>

        <ImageGallery images={galleryImages} />

        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Seguici sui social per vedere le ultime novità e i piatti del giorno
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";
import { restaurantData } from "@/lib/restaurant-data";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {restaurantData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-zinc-200">
            {restaurantData.tagline}
          </p>
          <p className="text-lg mb-8 text-zinc-300 max-w-2xl mx-auto">
            {restaurantData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
            >
              Vedi il Menu
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Prenota un Tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">
            Chi Siamo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                La Nostra Storia
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {restaurantData.about.history}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                La Nostra Filosofia
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {restaurantData.about.philosophy}
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="text-zinc-900 dark:text-zinc-100 font-semibold hover:underline"
            >
              Scopri di più →
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
            Il Nostro Menu
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Scopri i sapori autentici della tradizione siciliana attraverso i nostri piatti preparati con ingredienti freschi e locali.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Antipasti
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Inizia il tuo viaggio culinario con le nostre specialità siciliane
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Primi Piatti
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Pasta fresca e ricette tradizionali della nostra terra
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Secondi Piatti
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Pesce fresco e carni selezionate con contorni di stagione
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Visualizza Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Seguici sui Social
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Resta aggiornato sulle nostre novità, eventi speciali e piatti del giorno
          </p>
          <SocialLinks className="justify-center" />
        </div>
      </section>
    </div>
  );
}

import { restaurantData } from "@/lib/restaurant-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Scopri la storia e la filosofia di Villa Pensabene, ristorante di tradizione siciliana",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Chi Siamo
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            {restaurantData.tagline}
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            La Nostra Storia
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              {restaurantData.about.history}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Ogni piatto che serviamo racconta una storia, ogni ingrediente porta con sé il sapore della nostra terra. 
              La Sicilia è ricca di tradizioni culinarie che si tramandano di generazione in generazione, e noi siamo 
              orgogliosi di portare avanti questa eredità con passione e dedizione.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            La Nostra Filosofia
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              {restaurantData.about.philosophy}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Crediamo nell'importanza della qualità e della freschezza degli ingredienti. Per questo motivo, 
              ci impegniamo a selezionare i migliori prodotti locali, sostenendo i produttori del territorio 
              e garantendo ai nostri ospiti un'esperienza culinaria autentica e genuina.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            La Tradizione Siciliana
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            La cucina siciliana è un patrimonio culturale unico, frutto di secoli di storia e contaminazioni. 
            Dalle influenze arabe ai sapori mediterranei, ogni piatto è un viaggio attraverso i secoli.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Nel nostro ristorante, ogni ricetta viene preparata seguendo i metodi tradizionali, rispettando 
            i tempi e le tecniche che hanno reso la cucina siciliana famosa in tutto il mondo. Dalla pasta 
            alla norma ai cannoli, ogni piatto è preparato con cura e attenzione ai dettagli.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Vieni a Trovarci
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Ti aspettiamo per condividere con te l'autenticità dei sapori siciliani
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Contattaci
          </a>
        </section>
      </div>
    </div>
  );
}


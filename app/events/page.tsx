import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Eventi e Festività",
  description: "Scopri i nostri eventi speciali per Capodanno, Natale, Immacolata e altre festività",
};

export default function EventsPage() {
  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Eventi e Festività
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Scopri i nostri eventi speciali e le celebrazioni durante l'anno. Prenota il tuo tavolo per vivere momenti indimenticabili con noi.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-12 mb-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Event Info */}
              <div className="flex-1">
                <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                      {event.name}
                    </h2>
                    <span className="px-4 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-semibold">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-block px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>

              {/* Video or Placeholder */}
              <div className="flex-1 w-full">
                {event.videoUrl ? (
                  <div className="relative pb-[76.6%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={event.videoUrl}
                      width="560"
                      height="429"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                    <p className="absolute inset-0 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                      Immagine evento in arrivo
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Hai un evento speciale da celebrare?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Contattaci per organizzare il tuo evento personalizzato. Siamo disponibili per feste private, compleanni, anniversari e altre occasioni speciali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Contattaci
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-full font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors"
            >
              Vedi il Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


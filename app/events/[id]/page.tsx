import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById, events } from "@/lib/events-data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);
  
  if (!event) {
    return {
      title: "Evento non trovato",
    };
  }

  return {
    title: `${event.name} - Villa Pensabene`,
    description: event.description,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/events" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Eventi
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 dark:text-zinc-100">{event.name}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
              {event.name}
            </h1>
            <span className="px-4 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-semibold">
              {event.date}
            </span>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {event.description}
          </p>
        </div>

        {/* Family Friendly Info */}
        {event.familyFriendly && event.kidsMenuPrice && (
          <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-6 rounded-lg mb-8 border-l-4 border-zinc-900 dark:border-zinc-100">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                  Per Tutta la Famiglia
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  {event.kidsMenuDescription}
                </p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Menù bimbi: €{event.kidsMenuPrice}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video */}
        {event.videoUrl && (
          <div className="mb-12">
            <div className="relative pb-[76.6%] h-0 overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
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
          </div>
        )}

        {/* Description */}
        {event.fullDescription && (
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Dettagli Evento
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>
        )}

        {/* Menus */}
        {event.menus && event.menus.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">
              I Nostri Menu
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {event.menus.map((menu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-700"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                      {menu.name}
                    </h3>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                        €{menu.price}
                      </span>
                      {menu.earlyBirdPrice && menu.earlyBirdDate && (
                        <div className="flex flex-col">
                          <span className="text-sm text-zinc-500 dark:text-zinc-400 line-through">
                            €{menu.price}
                          </span>
                          <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                            €{menu.earlyBirdPrice}
                          </span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            con prenotazione entro il {menu.earlyBirdDate}
                          </span>
                        </div>
                      )}
                    </div>
                    {menu.earlyBirdPrice && (
                      <div className="mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full inline-block">
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                          💰 Risparmia fino a €{menu.price - menu.earlyBirdPrice}! Prenota entro il {menu.earlyBirdDate}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {menu.items.map((category, catIndex) => (
                      <div key={catIndex}>
                        <h4 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                          {category.category}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-zinc-700 dark:text-zinc-300 flex items-start gap-2"
                            >
                              <span className="text-zinc-400 dark:text-zinc-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {menu.drinks && (
                      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                          Bevande incluse:
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400">{menu.drinks}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info */}
        {event.contactInfo && (
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              📞 Informazioni e Prenotazioni
            </h2>
            {event.contactInfo.reservationRequired && (
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Prenotazione obbligatoria
              </p>
            )}
            <div className="space-y-3">
              {event.contactInfo.phone && (
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a
                    href={`tel:${event.contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-lg text-zinc-900 dark:text-zinc-100 hover:underline font-semibold"
                  >
                    {event.contactInfo.phone}
                  </a>
                </div>
              )}
              {event.contactInfo.address && (
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    {event.contactInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center"
          >
            Prenota Ora
          </Link>
          <Link
            href="/menu"
            className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-full font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors text-center"
          >
            Vedi il Menu
          </Link>
        </div>

        {/* Back to Events */}
        <div className="text-center">
          <Link
            href="/events"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
          >
            ← Torna agli Eventi
          </Link>
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Evento non trovato
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          L'evento che stai cercando non esiste o è stato rimosso.
        </p>
        <Link
          href="/events"
          className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Torna agli Eventi
        </Link>
      </div>
    </div>
  );
}


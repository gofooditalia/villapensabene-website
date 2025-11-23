import { menuData, menuCategories } from "@/lib/menu-data";
import MenuCard from "@/components/MenuCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Scopri il nostro menu completo con piatti della tradizione siciliana",
};

export default function MenuPage() {
  const categories = ["antipasti", "primi", "secondi", "dolci", "bevande"] as const;

  return (
    <div className="py-12 px-4 bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Il Nostro Menu
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Un viaggio attraverso i sapori autentici della Sicilia, con ingredienti freschi e ricette tradizionali
          </p>
        </div>

        {categories.map((category) => {
          const items = menuData.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
                {menuCategories[category]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-12 text-center bg-white dark:bg-zinc-800 p-8 rounded-lg">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Per informazioni su allergeni o modifiche ai piatti, contattaci direttamente
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Contattaci
          </a>
        </div>
      </div>
    </div>
  );
}


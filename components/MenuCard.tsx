import { MenuItem } from "@/lib/menu-data";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      {item.image && (
        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {item.name}
        </h3>
        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 ml-4">
          €{item.price.toFixed(2)}
        </span>
      </div>
      {item.description && (
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          {item.description}
        </p>
      )}
    </div>
  );
}


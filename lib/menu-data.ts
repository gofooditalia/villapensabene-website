export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: "antipasti" | "primi" | "secondi" | "dolci" | "bevande";
  image?: string;
}

export const menuData: MenuItem[] = [
  // Antipasti
  {
    id: "ant-1",
    name: "Antipasto della Casa",
    description: "Selezione di specialità siciliane",
    price: 15.00,
    category: "antipasti",
  },
  {
    id: "ant-2",
    name: "Caponata",
    description: "Melanzane, pomodori, capperi e olive",
    price: 8.00,
    category: "antipasti",
  },
  {
    id: "ant-3",
    name: "Arancini",
    description: "Riso, ragù e piselli",
    price: 6.00,
    category: "antipasti",
  },
  
  // Primi
  {
    id: "pri-1",
    name: "Pasta alla Norma",
    description: "Pasta con melanzane, pomodoro e ricotta salata",
    price: 12.00,
    category: "primi",
  },
  {
    id: "pri-2",
    name: "Pasta con le Sarde",
    description: "Pasta con sarde fresche, finocchietto e pinoli",
    price: 14.00,
    category: "primi",
  },
  {
    id: "pri-3",
    name: "Cannelloni al Forno",
    description: "Cannelloni ripieni di ricotta e spinaci",
    price: 13.00,
    category: "primi",
  },
  
  // Secondi
  {
    id: "sec-1",
    name: "Pesce Spada alla Griglia",
    description: "Pesce spada fresco con contorno di verdure",
    price: 18.00,
    category: "secondi",
  },
  {
    id: "sec-2",
    name: "Involtini di Melanzane",
    description: "Melanzane ripiene di carne e formaggio",
    price: 16.00,
    category: "secondi",
  },
  {
    id: "sec-3",
    name: "Bistecca alla Siciliana",
    description: "Bistecca con contorno di patate",
    price: 20.00,
    category: "secondi",
  },
  
  // Dolci
  {
    id: "dol-1",
    name: "Cannoli Siciliani",
    description: "Cannoli con ricotta fresca e cioccolato",
    price: 7.00,
    category: "dolci",
  },
  {
    id: "dol-2",
    name: "Cassata Siciliana",
    description: "Torta tradizionale con ricotta e canditi",
    price: 8.00,
    category: "dolci",
  },
  {
    id: "dol-3",
    name: "Granita",
    description: "Granita ai gusti disponibili",
    price: 5.00,
    category: "dolci",
  },
  
  // Bevande
  {
    id: "bev-1",
    name: "Vino della Casa",
    description: "Calice",
    price: 5.00,
    category: "bevande",
  },
  {
    id: "bev-2",
    name: "Acqua",
    price: 2.00,
    category: "bevande",
  },
  {
    id: "bev-3",
    name: "Caffè",
    price: 1.50,
    category: "bevande",
  },
];

export const menuCategories = {
  antipasti: "Antipasti",
  primi: "Primi Piatti",
  secondi: "Secondi Piatti",
  dolci: "Dolci",
  bevande: "Bevande",
};


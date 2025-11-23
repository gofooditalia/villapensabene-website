export interface MenuItem {
  category: string;
  items: string[];
}

export interface EventMenu {
  name: string;
  price: number;
  earlyBirdPrice?: number;
  earlyBirdDate?: string;
  items: MenuItem[];
  drinks?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  fullDescription?: string;
  videoUrl?: string;
  imageUrl?: string;
  menus?: EventMenu[];
  familyFriendly?: boolean;
  kidsMenuPrice?: number;
  kidsMenuDescription?: string;
  contactInfo?: {
    phone?: string;
    address?: string;
    reservationRequired?: boolean;
  };
}

export const events: Event[] = [
  {
    id: "capodanno",
    name: "Veglione di Capodanno 2025/26",
    date: "31 Dicembre 2025",
    description: "Salutate il 2025 e date il benvenuto al 2026 in grande stile a Villa Pensabene! Una serata magica all'insegna del gusto, del divertimento e della festa!",
    fullDescription: "Salutate il 2025 e date il benvenuto al 2026 in grande stile a Villa Pensabene! Una serata magica all'insegna del gusto, del divertimento e della festa! Un Capodanno indimenticabile per tutta la famiglia con area giochi dedicata e menù bimbi.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvillapensabeneristorante%2Fvideos%2F1494511238522640%2F%3Fidorvanity%3D1772080463424717&show_text=true&width=560&t=0",
    familyFriendly: true,
    kidsMenuPrice: 35,
    kidsMenuDescription: "Area giochi dedicata e menù bimbi per permettere ai più piccoli di divertirsi in sicurezza mentre voi festeggiate l'arrivo del nuovo anno in totale relax.",
    menus: [
      {
        name: "Menu di Pesce",
        price: 95,
        earlyBirdPrice: 90,
        earlyBirdDate: "1° Dicembre",
        drinks: "Acqua, Coca Cola e Vino delle Cantine Siciliane",
        items: [
          {
            category: "Aperitivo di Benvenuto",
            items: [
              "Supplì al Nero di Seppia e al Salmone",
              "Bollicine Millesimate",
            ],
          },
          {
            category: "Antipasti",
            items: [
              "Salmone Marinato con Pesto agli Agrumi di Sicilia",
              "Tartare di Gambero Viola",
              "Ostrica al Lime",
              "Bruschetta di Tumminia con Burro di Bufala e Alici del Cantabrico",
              "Gamberone in Crosta al Panko all'Arancia",
            ],
          },
          {
            category: "Primi Piatti",
            items: [
              "Risotto Carnaroli con Salmone Fresco e Asparagi",
              "Busiate Trapanesi con Ragù di Cerniotto",
            ],
          },
          {
            category: "Secondi",
            items: [
              "Involtino di Spigola con Cuore di Molluschi",
              "Gamberone in Tempura",
            ],
          },
          {
            category: "Dolci",
            items: [
              "Panettone e Pandoro",
              "Bon Bon di Cassatina Siciliana",
            ],
          },
        ],
      },
      {
        name: "Menu di Carne",
        price: 85,
        earlyBirdPrice: 80,
        earlyBirdDate: "1° Dicembre",
        drinks: "Acqua, Coca Cola e Vino delle Cantine Siciliane",
        items: [
          {
            category: "Aperitivo di Benvenuto",
            items: [
              "Supplì allo Zafferano e Parmigiano",
              "Chips Fresche",
              "Bollicine Millesimate",
            ],
          },
          {
            category: "Antipasti",
            items: [
              "Tartare di Angus al Timo",
              "Bruschetta di Tumminia con Crudo di Parma e Stracciatella",
              "Fagottino di Melanzane con Tuma Madonita, Noci e Speck",
              "Grissino di Sfoglia Bardato con Lardo di Colonnata",
              "Cornucopia di Bresaola con Gorgonzola Dolce e Pere",
            ],
          },
          {
            category: "Primi Piatti",
            items: [
              "Risotto con Crema di Carciofi, Guanciale Croccante e Spolverata di Parmigiano",
              "Paccheri con Ragù di Cinghiale in Bianco e Funghi Porcini",
            ],
          },
          {
            category: "Secondo",
            items: [
              "Carrè di Vitellina con la sua Demi-Glace e Patate Sabbiate",
            ],
          },
          {
            category: "Dolci",
            items: [
              "Panettone e Pandoro",
              "Bon Bon di Cassatina Siciliana",
            ],
          },
        ],
      },
    ],
    contactInfo: {
      phone: "+39 327 414 6546",
      address: "Via P40, 29 PA - trav Via Patti dietro il Velodromo",
      reservationRequired: true,
    },
  },
  {
    id: "natale",
    name: "Natale",
    date: "24-25 Dicembre",
    description: "Vivi la magia del Natale con i sapori tradizionali siciliani. Menu speciale per la Vigilia e il giorno di Natale.",
    fullDescription: "Vivi la magia del Natale con i sapori tradizionali siciliani. Offriamo menu speciali sia per la Vigilia che per il giorno di Natale, con piatti della tradizione preparati con ingredienti freschi e locali. Un'atmosfera calda e accogliente per celebrare le festività in famiglia.",
  },
  {
    id: "immacolata",
    name: "Immacolata Concezione",
    date: "8 Dicembre",
    description: "Celebrazione della festa dell'Immacolata con menu tradizionale e atmosfera festosa.",
    fullDescription: "Celebra la festa dell'Immacolata Concezione con noi. Menu tradizionale siciliano con piatti della tradizione, atmosfera festosa e accogliente per trascorrere una giornata speciale in compagnia.",
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}


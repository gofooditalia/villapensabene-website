import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Villa Pensabene per prenotazioni e informazioni",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


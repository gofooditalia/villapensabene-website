"use client";

import { useState } from "react";
import { restaurantData } from "@/lib/restaurant-data";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    guests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui si può aggiungere la logica per inviare il form
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        guests: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Contatti
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Siamo qui per rispondere alle tue domande e per aiutarti a prenotare il tuo tavolo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informazioni di Contatto */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              Informazioni
            </h2>
            
            <div className="space-y-6 mb-8">
              {restaurantData.contact.phone && (
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Telefono
                  </h3>
                  <a
                    href={`tel:${restaurantData.contact.phone}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {restaurantData.contact.phone}
                  </a>
                </div>
              )}

              {restaurantData.contact.email && (
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${restaurantData.contact.email}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {restaurantData.contact.email}
                  </a>
                </div>
              )}

              {restaurantData.address.street && (
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Indirizzo
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {restaurantData.address.street}
                    <br />
                    {restaurantData.address.postalCode} {restaurantData.address.city}
                    <br />
                    {restaurantData.address.country}
                  </p>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  Seguici
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Orari */}
            {(Object.values(restaurantData.hours).some((hour) => hour)) && (
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  Orari di Apertura
                </h3>
                <dl className="space-y-2">
                  {restaurantData.hours.monday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Lunedì</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.monday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.tuesday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Martedì</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.tuesday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.wednesday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Mercoledì</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.wednesday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.thursday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Giovedì</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.thursday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.friday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Venerdì</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.friday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.saturday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Sabato</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.saturday}</dd>
                    </div>
                  )}
                  {restaurantData.hours.sunday && (
                    <div className="flex justify-between">
                      <dt className="text-zinc-600 dark:text-zinc-400">Domenica</dt>
                      <dd className="text-zinc-900 dark:text-zinc-100">{restaurantData.hours.sunday}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>

          {/* Form di Contatto */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              Prenota un Tavolo
            </h2>
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg">
                Grazie per la tua richiesta! Ti contatteremo presto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                    >
                      Data
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                    >
                      Numero Ospiti
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Invia Richiesta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


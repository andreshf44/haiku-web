import React from "react";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-[#f5f5ef] w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-950 mb-6">Quiénes Somos</h2>
          <p className="text-lg md:text-xl text-green-950 leading-relaxed">
            En Haiku, creemos en el equilibrio entre la naturaleza y la comodidad. Nos dedicamos a ofrecer
            experiencias inmersivas en medio de paisajes únicos, donde cada detalle está pensado para tu descanso y
            conexión con lo esencial. Nuestro compromiso es brindarte un espacio de tranquilidad, armonía y respeto
            por el entorno, invitándote a descubrir el bosque, el agua y el cielo en su máxima expresión.
          </p>
        </div>
        <div>
          <img
            src="/quienes-somos.jpg"
            alt="Bosque Haiku"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="bg-[#f5f5e9] w-full py-36 px-4 md:px-0"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE SOLO MOBILE */}
        <h2 className="block md:hidden text-3xl font-bold mb-8 text-[#004421] text-center">
          Quiénes Somos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* IMAGE */}
          <div>
            <img
              src="/images/descripcionLogo.png"
              alt="Bosque Haiku"
              className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT */}
          <div>
            
            {/* TITLE SOLO DESKTOP */}
            <h4 className="title-introduction text-3x1 lg:text-4x1 hidden md:block">
              Quiénes Somos
            </h4>

            <h1 className="title text-4xl lg:text-5xl">Un refugio para reconectar contigo</h1>

            <p className="text-lg md:text-xl leading-relaxed text-[#004421] text-center md:text-right">
              En Haiku, creemos en el equilibrio entre la naturaleza y la
              comodidad. Nos dedicamos a ofrecer experiencias inmersivas en
              medio de paisajes únicos, donde cada detalle está pensado para tu
              descanso y conexión con lo esencial. Nuestro compromiso es
              brindarte un espacio de tranquilidad, armonía y respeto por el
              entorno, invitándote a descubrir el bosque, el agua y el cielo en
              su máxima expresión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
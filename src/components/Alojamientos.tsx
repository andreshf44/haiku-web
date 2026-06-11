import React from "react";

export default function Alojamientos() {
  return (
    <section id="alojamientos" className="bg-[#f5f5ef] w-full py-28 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1  items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-950 mb-16 text-center text-[#004421]">Alojamientos</h2>
          <div className="flex flex-col md:flex-row gap-8 md:justify-between">
  
            {/* Roble */}
            <div className="w-full md:flex-[0_0_30%]">
              <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                Casa Roble
              </h3>

              <div>
                <img
                  src="/images/mizu.jpg"
                  alt="casa roble"
                  className="w-full h-[35vh] object-cover rounded-xl"
                />

                <div className="flex justify-between items-end mt-3 gap-3">
                  <p className="text-base md:text-lg leading-relaxed text-[#004421]">
                    Cabaña para 2 personas que busca .... con tinaja y vista al lago
                  </p>

                  <a
                    href="/cabanas/roble"
                    className="text-[#006633] hover:text-[#004421] hover:font-semibold whitespace-nowrap"
                  >
                    más
                  </a>
                </div>
              </div>
            </div>
            
              {/* CANELO */}
              <div className="w-full md:flex-[0_0_30%]">
                <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                  Refugio Canelo
                </h3>

                <div>
                  <img
                    src="/images/kumo.jpg"
                    alt="refugio canelo"
                    className="w-full h-[35vh] object-cover rounded-xl"
                  />

                  <div className="flex justify-between items-end mt-3 gap-3">
                    <p className="text-base md:text-lg leading-relaxed text-[#004421]">
                      Cabaña para 2 personas que busca .... con tinaja y vista al lago
                    </p>

                    <a
                      href="/cabanas/canelo"
                      className="text-[#006633] hover:text-[#004421] hover:font-semibold whitespace-nowrap"
                    >
                      más
                    </a>
                  </div>
                </div>
              </div>

              {/* YUKI */}
              <div className="w-full md:flex-[0_0_30%]">
                <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                  Cabaña Yuki
                </h3>

                <div>
                  <img
                    src="/images/yuki.jpg"
                    alt="cabaña yuki"
                    className="w-full h-[35vh] object-cover rounded-xl"
                  />

                  <div className="flex justify-between items-end mt-3 gap-3">
                    <p className="text-base md:text-lg leading-relaxed text-[#004421]">
                      Cabaña para 4 personas que entrega .... con tinaja y vista al bosque
                    </p>

                    <a
                      href="/cabanas/yuki"
                      className="text-[#006633] hover:text-[#004421] hover:font-semibold whitespace-nowrap"
                    >
                      más
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
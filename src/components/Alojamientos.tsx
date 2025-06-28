import React from "react";

export default function Alojamientos() {
  return (
    <section id="alojamientos" className="bg-[#f5f5ef] w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1  items-center">
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-950 mb-6 text-center text-[#004421]">Alojamientos</h2>
            <div className="flex justify-between">
                <div className="flex-[0_0_30%]">
                    <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                        Cabaña Kumo
                    </h3>
                    <div>
                        <img src="/images/kumo.jpg" alt="cabaña kumo" className="h-[35vh]"/>
                        <div className="flex items-end">
                            <p className="text-lg md:text-xl text-green-950 leading-relaxed text-[#004421]">
                            Cabaña para 2 personas que busca .... con tinaja y vista al lago
                            </p>
                            <a href="/cabanas/kumo" className="text-[#006633] hover:text-[#004421] hover:font-semibold">mas</a>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-[0_0_30%]">
                    <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                        Cabaña Mizu
                    </h3>
                    <div>
                        <img src="/images/mizu.jpg" alt="cabaña mizu" className="h-[35vh]"/>
                        <div className="flex items-end">
                            <p className="text-lg md:text-xl text-green-950 leading-relaxed text-[#004421]">
                            Cabaña para 2 personas que busca .... con tinaja y vista al lago
                            </p>
                            <a href="/cabanas/mizu" className="text-[#006633] hover:text-[#004421] hover:font-semibold">mas</a>
                        </div>
                       
                    </div>
                </div>
                <div className="flex-[0_0_30%]">
                    <h3 className="text-base md:text-[18px] font-semibold mb-2 md:mb-[10px] text-[#004421]">
                        Cabaña Yuki
                    </h3>
                    <div>
                        <img src="/images/yuki.jpg" alt="cabaña yuki" className="h-[35vh]"/>
                        <div className="flex items-end">
                            <p className="text-lg md:text-xl text-green-950 leading-relaxed text-[#004421]">
                            Cabaña para 4 personas que entrega .... con tinaja y vista al bosque
                            </p>
                            <a href="/cabanas/yuki" className="text-[#006633] hover:text-[#004421] hover:font-semibold">mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
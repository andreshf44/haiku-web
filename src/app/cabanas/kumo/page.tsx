import Image from 'next/image'
import Link from 'next/link'

export default function KumoPage() {
  return (
    
    <div className="bg-[#f5eedf]">
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/kumo.jpg"
          alt="Kumo"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-[#f5eedf] p-10">
          <h1 className="text-5xl font-bold drop-shadow-xl">Kumo</h1>
          <Link
            href="/reservar"
            className="mt-4 bg-[#c19454] text-[#3c371f] px-6 py-2 rounded hover:bg-[#b88a4c] transition"
          >
            Reservar esta cabaña
          </Link>
        </div>
      </section>

      {/* Detalles */}
      <section className="grid md:grid-cols-2 gap-8 p-10">
        <Image
          src="/images/kumo-interior.jpg"
          alt="Interior de Kumo"
          width={600}
          height={400}
          className="rounded shadow"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#134520] mb-2">
            Un espacio pensado para ti
          </h2>
          <p className="text-[#3c371f] leading-relaxed text-lg italic">
            Kumo, es la cabaña más etérea de Hayku. Su diseño ligero y envolvente ofrece una experiencia suspendida entre el bosque y el cielo. Ideal para desconectar del mundo, reencontrarte con tu cuerpo y respirar profundo. Todo está pensado para el placer tranquilo.
          </p>
        </div>
      </section>

      {/* Experiencias */}
      <section className="bg-[#134520] py-10 px-6 text-[#f5eedf]">
        <h3 className="text-xl font-semibold text-center mb-6">
          Disfruta también de:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🌽</div>
            Trekking
          </div>
          <div>
            <div className="text-3xl mb-2">🌳</div>
            Caminatas
          </div>
          <div>
            <div className="text-3xl mb-2">🕯️</div>
            Spa
          </div>
          <div>
            <div className="text-3xl mb-2">🎪</div>
            Inmersión sensorial
          </div>
        </div>
      </section>

      <div className="text-center py-10">
        <Link
          href="/"
          className="inline-block bg-[#c19454] text-[#3c371f] px-6 py-2 rounded hover:bg-[#b88a4c] transition"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}

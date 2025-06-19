import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const cabanas = {
  mizu: {
    nombre: 'Mizu',
    descripcion:
      'Mizu es una cabaña grupal para 4 personas que fluye con naturalidad entre árboles y susurros del bosque. Diseñada para compartir una experiencia cálida y comunitaria, con una tinaja al aire libre bajo el cielo del sur. Ideal para familias o amistades que quieren reconectar, reír, descansar.',
    imagen: '/images/mizu.jpg',
    interior: '/images/mizu-interior.jpg'
  },
  yuki: {
    nombre: 'Yuki',
    descripcion:
      'Yuki es una cabaña íntima, silenciosa, pensada para el descanso profundo. Minimalismo cálido, texturas naturales y una tinaja privada con vista al bosque te invitan a soltar el tiempo y volver a ti. Un refugio para quienes buscan quietud, pareja o retiro personal.',
    imagen: '/images/yuki.jpg',
    interior: '/images/yuki-interior.jpg'
  },
  kumo: {
    nombre: 'Kumo',
    descripcion:
      'Kumo, es la cabaña más etérea de Hayku. Su diseño ligero y envolvente ofrece una experiencia suspendida entre el bosque y el cielo. Ideal para desconectar del mundo, reencontrarte con tu cuerpo y respirar profundo. Todo está pensado para el placer tranquilo.',
    imagen: '/images/kumo.jpg',
    interior: '/images/kumo-interior.jpg'
  }
} as const


type CabanaSlug = keyof typeof cabanas;

export default function Page({ params }: { params: { slug: string } }) {
  const cabana = cabanas[params.slug as CabanaSlug];
  
    if (!cabana) return notFound();
  
    return (
      <div className="bg-[#f5eedf]">
        {/* Hero */}
        <section className="relative h-[70vh] w-full">
          <Image
            src={cabana.imagen}
            alt={cabana.nombre}
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-[#f5eedf] p-10">
            <h1 className="text-5xl font-bold drop-shadow-xl">{cabana.nombre}</h1>
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
            src={cabana.interior}
            alt={`Interior de ${cabana.nombre}`}
            width={600}
            height={400}
            className="rounded shadow"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-[#134520] mb-2">
              Un espacio pensado para ti
            </h2>
            <p className="text-[#3c371f] leading-relaxed text-lg italic">
              {cabana.descripcion}
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
    );
  }
  
  // Agregado para rutas estáticas
  export async function generateStaticParams() {
    return Object.keys(cabanas).map((slug) => ({ slug }));
  }

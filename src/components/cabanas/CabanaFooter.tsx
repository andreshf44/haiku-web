import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

type CabanaFooterProps = {
  cabanaName: string
  reserveHref: string
}

export default function CabanaFooter({
  cabanaName,
  reserveHref,
}: CabanaFooterProps) {
  return (
    <footer className="relative overflow-hidden bg-dark px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className="secondary-text-light text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            ¿Listo para vivir la experiencia {cabanaName}?
          </h2>

          <p className="text-sm md:text-base">
            Consulta disponibilidad y asegura tu estadía.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href={reserveHref}
            className="bg-button-gold px-10 py-3 rounded font-semibold text-white transition"
          >
            Reservar esta cabaña
          </Link>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium secondary-text-light">
            <FaWhatsapp size={16} />
            <span>Respuesta vía WhatsApp</span>
          </div>
        </div>

        <div className="hidden md:flex justify-end opacity-25">
          <img
            src="/images/logo-haiku.png"
            alt="Haiku"
            className="w-[180px] object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
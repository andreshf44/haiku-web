import Link from 'next/link'
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id='contacto' className="bg-dark relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <img
          src="/images/bamboo-footer.png"
          alt=""
          className="w-[250px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-[#736536]/30">
          {/* Texto ubicación */}
          <div>
            <p className="text-icon text-sm font-semibold tracking-[0.22em] uppercase mb-3">
              ¿Cómo llegar?
            </p>

            <h2 className="secondary-text-light text-4xl leading-tight mb-5">
              A minutos de Pucón,
              <br />
              lejos del ruido
            </h2>

            <div className="space-y-3 secondary-text-light">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-icon" />
                <span>A 15 minutos de Pucón</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-icon" />
                <span>A 10 minutos del lago</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-icon" />
                <span>Rodeado de bosque nativo</span>
              </div>
            </div>
          </div>

          {/* Mini mapa */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl min-h-[240px] group"
          >
            <img
              src="/images/mapa-haiku.jpg"
              alt="Ubicación Haiku"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <h3 className="secondary-text-light text-4xl mb-4">
              Haiku
            </h3>

            <p className="secondary-text-light font-medium mb-3">
              Naturaleza. Silencio. Presencia.
            </p>

            <p className="secondary-text-light opacity-80 text-sm leading-relaxed">
              Cabañas de inspiración japonesa
              en el corazón de Pucón.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-icon font-semibold mb-4">
              Navegación
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="/#quienes-somos" className="secondary-text-light hover-secondary-light">
                Quiénes Somos
              </Link>

              <Link href="/#alojamientos" className="secondary-text-light hover-secondary-light">
                Alojamientos
              </Link>

              <Link href="/#experiencias" className="secondary-text-light hover-secondary-light">
                Experiencias
              </Link>

              <Link href="/#reservar" className="secondary-text-light hover-secondary-light">
                Reservar
              </Link>

              <Link href="/#contacto" className="secondary-text-light hover-secondary-light">
                Contacto
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-icon font-semibold mb-4">
              Contacto
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 secondary-text-light">
                <FaWhatsapp />
                <span>+56 9 4444 9999</span>
              </div>

              <div className="flex items-center gap-3 secondary-text-light">
                <FaEnvelope />
                <span>hola@haiku.cl</span>
              </div>

              <div className="flex items-center gap-3 secondary-text-light">
                <FaMapMarkerAlt />
                <span>Pucón, Araucanía, Chile</span>
              </div>
            </div>

            <div className="flex gap-4 mt-5">
              <FaInstagram
                className="secondary-text-light hover-secondary-light cursor-pointer"
                size={20}
              />

              <FaFacebookF
                className="secondary-text-light hover-secondary-light cursor-pointer"
                size={18}
              />
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-icon font-semibold mb-4">
              Legal
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="#" className="secondary-text-light hover-secondary-light">
                Términos y condiciones
              </Link>

              <Link href="#" className="secondary-text-light hover-secondary-light">
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Línea */}
        <div className="border-t border-[#736536]/30 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="secondary-text-light text-sm opacity-80">
              © 2025 Haiku. Todos los derechos reservados.
            </p>

            <a
              href="https://mi-portafolio-sandy-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-text-light text-sm hover-secondary-light transition-colors"
            >
              Diseñado y desarrollado por Andrés Enrique
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
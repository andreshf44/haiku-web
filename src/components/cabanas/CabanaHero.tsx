import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

type Feature = {
  icon: string
  alt: string
  label: string
}

type CabanaHeroProps = {
  title: string
  subtitle: string
  image: string
  reserveHref: string
  features: Feature[]
}

export default function CabanaHero({
  title,
  subtitle,
  image,
  reserveHref,
  features,
}: CabanaHeroProps) {
  return (
    <section className="relative h-[70vh] w-full">
      <Image
        src={image}
        alt={subtitle}
        fill
        className="object-cover brightness-75"
      />

      <div className="content-hero absolute top-20 z-20 p-[25px] max-w-[600px] secondary-text-light">
        <div className='text-center md:text-left'>
          <h2 className="text-[24px] md:text-[55px] leading-tight">
            {title}
          </h2>

          <p className="text-lg mt-1">{subtitle}</p>
        </div>

        <div className='content-hero !ml-0'>
          <div className="flex justify-evenly items-baseline pt-2 font-bold gap-6 content-icons">
          {features.map((feature) => (
            <div key={feature.label} className="grid place-items-center">
              <img src={feature.icon} alt={feature.alt} />
              <span className="text-icon">{feature.label}</span>
            </div>
          ))}
          </div>

          <div>
          <Link href={reserveHref} className="bg-button-gold">
            Reservar esta cabaña
          </Link>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm font-medium secondary-text-light">
            <FaWhatsapp size={16} />
            <span>Respuesta vía WhatsApp</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
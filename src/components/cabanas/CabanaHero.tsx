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
  reserveText?: string
  whatsappText?: string
}

export default function CabanaHero({
  title,
  subtitle,
  image,
  reserveHref,
  features,
  reserveText = 'Reservar esta cabaña',
  whatsappText = 'Respuesta vía WhatsApp',
}: CabanaHeroProps) {
  return (
    <section
      className="relative h-[70vh] w-full"
      aria-labelledby="cabana-title"
    >
      <Image
        src={image}
        alt={`${subtitle} - Haiku Refugio & Spa`}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-75"
      />

      <div className="content-hero principal-content absolute top-20 z-20 p-[25px] max-w-[720px] secondary-text-light">
        <div className="text-center md:text-left">
          <h1
            id="cabana-title"
            className="text-[32px] md:text-[55px] leading-tight"
          >
            {title}
          </h1>

          <p className="text-[24px] md:text-lg mt-1">
            {subtitle}
          </p>
        </div>

        <div className="content-hero !ml-0">
          <div className="flex justify-evenly items-baseline pt-2 font-bold gap-6 content-icons">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="grid place-items-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.alt}
                />

                <span className="text-icon">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href={reserveHref}
              className="bg-button-gold"
            >
              {reserveText}
            </Link>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm font-medium secondary-text-light">
              <FaWhatsapp
                size={16}
                aria-hidden="true"
              />

              <span>{whatsappText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
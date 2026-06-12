import Image from 'next/image'

type DetailBlock = {
  title: string
  description: string
  image: string
  reverse?: boolean
}

type CabanaDetailsProps = {
  blocks: DetailBlock[]
}

export default function CabanaDetails({ blocks }: CabanaDetailsProps) {
  return (
    <section className="bg-accent">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`
            grid
            md:grid-cols-[2fr_3fr]
            md:h-[260px]
          `}
        >
          {/* Texto: en mobile siempre va primero */}
          <div
            className={`
              flex flex-col justify-center px-8 md:px-16 py-12
              ${block.reverse ? 'md:order-2' : 'md:order-1'}
            `}
          >
            <h2 className="main-text-dark text-3xl md:text-4xl font-semibold mb-4">
              {block.title}
            </h2>

            <p className="secondary-text-dark text-sm leading-relaxed max-w-[500px]">
              {block.description}
            </p>
          </div>

          {/* Imagen: en mobile siempre va después */}
          <div
            className={`
              relative h-[240px] md:h-[260px]
              ${block.reverse ? 'md:order-1' : 'md:order-2'}
            `}
          >
            <Image
              src={block.image}
              alt={block.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
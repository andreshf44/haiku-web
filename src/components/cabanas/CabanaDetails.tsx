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

export default function CabanaDetails({
  blocks,
}: CabanaDetailsProps) {
  return (
    <section className="bg-accent">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`
            grid
            ${
              block.reverse
                ? 'md:grid-cols-[3fr_2fr]'
                : 'md:grid-cols-[2fr_3fr]'
            }
            min-h-[320px]
          `}
        >
          {block.reverse ? (
            <>
              {/* Imagen 60% */}
              <div className="relative min-h-[320px]">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto 40% */}
              <div className="flex flex-col justify-center px-8 md:px-16 py-12">
                <h2 className="main-text-dark text-3xl md:text-4xl font-semibold mb-4">
                  {block.title}
                </h2>

                <p className="secondary-text-dark text-lg leading-relaxed max-w-[500px]">
                  {block.description}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Texto 40% */}
              <div className="flex flex-col justify-center px-8 md:px-16 py-12">
                <h2 className="main-text-dark text-3xl md:text-4xl font-semibold mb-4">
                  {block.title}
                </h2>

                <p className="secondary-text-dark text-lg leading-relaxed max-w-[500px]">
                  {block.description}
                </p>
              </div>

              {/* Imagen 60% */}
              <div className="relative min-h-[320px]">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  )
}
export default function Footer() {
    return (
      <footer className="h-[60vh] text-center text-sm bg-[#b98f5a]">
        <div className="bg-[#004421] text-white py-12 px-6">
  <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
  
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <p className="text-lg mb-2">
        📍 Dirección: Camino al bosque s/n, Pucón, Chile
      </p>
      <p className="text-lg mb-2">
        📞 Teléfono: <a href="tel:+56912345678" className="underline hover:text-[#ccc]">+56 9 1234 5678</a>
      </p>
      <p className="text-lg mb-2">
        📧 Correo: <a href="mailto:contacto@haiku.cl" className="underline hover:text-[#ccc]">contacto@haiku.cl</a>
      </p>
    </div>

    <div>
      <p className="text-lg mb-2">
        ⏰ Horario de atención:
      </p>
      <ul className="text-lg list-disc ml-6">
        <li>Lunes a Viernes: 9:00 – 18:00</li>
        <li>Sábado: 10:00 – 14:00</li>
        <li>Domingo: Cerrado</li>
      </ul>
    </div>
  </div>
</div>
<div className="w-full h-64 rounded overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5268889608043!2d-71.9576235847995!3d-39.278943979506634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614f4b1a4d35e3d%3A0x9f221b9ae0cc3a35!2sPuc%C3%B3n%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1718627153172!5m2!1ses-419!2scl"
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

        © {new Date().getFullYear()} Haiku Natural - Todos los derechos reservados
      </footer>
    )
  }
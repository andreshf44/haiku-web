import Navbar from './Navbar'
import Footer from './Footer'
import ReservaFlotante from './ReservaFlotante'
import CabanaCarousel from './CabanaCarousel'
import SeccionesInfo from './SeccionesInfo'
import QuienesSomos from './QuienesSomos'
import Alojamientos from './Alojamientos'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-[#efe9d7]">{children}
        <CabanaCarousel />
        <QuienesSomos />
        <Alojamientos/>
        <SeccionesInfo />
      </main>
      <ReservaFlotante />
      <Footer />
    </div>
  )
}
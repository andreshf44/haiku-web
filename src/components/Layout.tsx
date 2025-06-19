import Navbar from './Navbar'
import Footer from './Footer'
import ReservaFlotante from './ReservaFlotante'
import CabanaCarousel from './CabanaCarousel'
import SeccionesInfo from './SeccionesInfo'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto bg-[#efe9d7]">{children}
        <CabanaCarousel />
        <SeccionesInfo />
      </main>
      <ReservaFlotante />
      <Footer />
    </div>
  )
}
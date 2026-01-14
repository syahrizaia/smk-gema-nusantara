import Banner from "./components/Layouts/Banner"
import Footer from "./components/Layouts/Footer"
import Gallery from "./components/Layouts/Gallery"
import LatestNews from "./components/Layouts/LatestNews"
import Navbar from "./components/Layouts/Navbar"
import SIAP from "./components/Layouts/SIAP"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <SIAP />
        <Gallery />
        <LatestNews />
        <Footer />
      </div>
    </>
  )
}

export default App

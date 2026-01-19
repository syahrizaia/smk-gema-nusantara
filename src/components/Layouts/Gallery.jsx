import { useEffect } from "react"
import { dataGallery } from "../../service/data"
import Aos from "aos"
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div className="grid grid-cols-3 items-center gap-5 px-20 py-10 bg-gray-100">
        {dataGallery.image.map((item) => (
            <div data-aos="zoom-in" className="overflow-hidden">
                <img
                    className="object-cover transition-transform delay-150 duration-300 ease-in-out hover:scale-125"
                    src={item.src}
                    key={item.id}
                />
            </div>
        ))}
    </div>
}

export default Gallery
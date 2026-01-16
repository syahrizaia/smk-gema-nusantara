import { dataGallery } from "../../service/data"

const Gallery = () => {
    return <div className="grid grid-cols-3 items-center gap-5 px-20 py-10 bg-gray-100">
        {dataGallery.image.map((item) => (
            <img src={item.src} key={item.id} />
        ))}
    </div>
}

export default Gallery
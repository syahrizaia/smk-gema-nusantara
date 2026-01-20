import { useEffect } from "react"
import { dataHeadmaster } from "../../service/data"
import Aos from "aos"
import 'aos/dist/aos.css';

const ThePrincipals = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div className="px-20 py-5">
        <h1 data-aos="fade-down">PARA -----</h1>
        <h2 data-aos="fade-down" className="text-3xl">KEPALA SEKOLAH</h2>
        <div className="grid grid-cols-2 gap-5 py-5">
            {dataHeadmaster.map((item) => {
                return <div
                    data-aos="fade-up"
                    key={item.id}
                    className="flex flex-row gap-5"
                >
                    <img
                        className="w-28 h-28 transition-transform delay-150 duration-300 hover:scale-125"
                        src={item.photo}
                        alt={item.name}
                    />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl text-blue-500">{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default ThePrincipals
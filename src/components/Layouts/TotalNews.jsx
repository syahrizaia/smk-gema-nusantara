// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Total = ({ total, children }) => {
//     // ref: elemen yang dipantau, inView: status apakah elemen terlihat di layar
//     const { ref, inView } = useInView({
//         triggerOnce: true, // Animasi hanya jalan sekali saja
//         threshold: 0.5,    // Mulai animasi jika 50% elemen sudah terlihat
//     });

//     return (
//         <div ref={ref} className="flex flex-col justify-center items-center gap-3">
//             <h1 className="text-5xl font-bold text-blue-500">
//                 {inView ? (
//                     <CountUp
//                         end={total} 
//                         duration={2.5} // Durasi animasi dalam detik
//                         separator="."  // Pemisah ribuan (format Indonesia)
//                     />
//                 ) : (
//                     "0"
//                 )}
//             </h1>
//             {children}
//         </div>
//     );
// }

const Total = ({ total, children }) => {
    return <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold text-blue-500">{total}</h1>
        {children}
    </div>
}

const TotalNews = () => {
    return <div className="flex justify-around items-center gap-5 px-20 py-10 bg-gray-100">
        <Total total={1554}>Berita</Total>
        <Total total={65}>Guru</Total>
        <Total total={3}>Laboratorium</Total>
        <Total total={2182}>Lulusan</Total>
    </div>
}

export default TotalNews
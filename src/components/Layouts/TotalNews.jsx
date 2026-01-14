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
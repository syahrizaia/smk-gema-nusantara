const CardCustom = ({ title, description }) => {
    return <div className="flex flex-col gap-5 border rounded-lg shadow-md p-5 text-center bg-white">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
    </div>
}

export default CardCustom
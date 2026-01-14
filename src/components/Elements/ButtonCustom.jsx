const ButtonCustom = ({ children, onClick }) => {
    return <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded transition delay-150 duration-300 hover:bg-blue-600"
    >
        {children}
    </button>
}

export default ButtonCustom
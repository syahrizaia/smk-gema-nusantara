import { Link } from "react-router-dom"

const LinkCustom = ({ to, children }) => {
    return <Link to={to} className="text-gray-700 transition delay-150 duration-300 hover:text-blue-500">
        {children}
    </Link>
}

export default LinkCustom
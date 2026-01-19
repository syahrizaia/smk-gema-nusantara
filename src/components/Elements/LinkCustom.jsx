import { Link, NavLink, useLocation } from "react-router-dom"

const LinkCustom = ({ to, children, subLinks = [] }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return <div className="relative group">
        <NavLink
            to={to}
            className={`transition duration-300 hover:text-blue-500 flex items-center gap-1 py-4 ${
                isActive ? "text-blue-500" : "text-gray-700"
            }`}
            // className={({ isActive }) =>
            //     isActive
            //         ? "text-blue-500"
            //         : "text-gray-700 transition delay-150 duration-300 hover:text-blue-500"
            // }
        >
            {children}
        </NavLink>

        {subLinks.length > 0 && (
            <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-lg border border-gray-100 rounded-md py-2 z-50">
                {subLinks.map((sub, index) => (
                    <NavLink
                        key={index}
                        to={sub.to}
                        className="block flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                    >
                        {sub.label}
                        {sub.withArrow && <span className="ml-2">&rarr;</span>}
                    </NavLink>
                ))}
            </div>
        )}
    </div>
}

export default LinkCustom
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex bg-[#215148] justify-center p-5">
            <div className="content-center">
                <img src="icon 2.png" alt="Team C Logo" className="w-20 rounded-full border-2"/>
            </div>
            <div className="text-white m-5 font-bold text-3xl">
                Hangout Zone
            </div>
            <div className="justify-center flex m-auto text-3xl font-bold">
                <Link to="/" className="m-4 hover:underline decoration-gray-300 hover:text-gray-300">Home Page</Link>
                <Link to="/teamc" className="m-4 hover:underline decoration-gray-300 hover:text-gray-300">Team C Studios</Link>
                <Link to="/minecraft" className="m-4 hover:underline decoration-gray-300 hover:text-gray-300">Minecraft Server</Link>
            </div>
        </div>
    )
}
export default Header
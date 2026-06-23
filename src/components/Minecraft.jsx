import Footer from "./Footer"
import Header from "./Header"

const Minecraft = () => {
    return (
        <div className="bg-[#4F9E8E] text-white">
            <Header/>
            <div className="m-10">
                <div className="flex">
                    <div className="basis-1/2 text-4xl font-bold">
                        We have a Minecraft Server.
                    </div>
                </div>
                <div className="text-lg">
                    Server Info.
                    {/* Team C Studios is an indie game development group created by XannyXu, Frank_the_Ogre, and their friends. */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Minecraft
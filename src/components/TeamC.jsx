import Footer from "./Footer"
import Header from "./Header"

const TeamC = () => {
    return (
        <div className="bg-[#4F9E8E] text-white">
            <Header/>
            <div className="m-10">
                <div className="flex">
                    <div className="basis-1/2 text-4xl font-bold">
                        This is Team C Studios.
                    </div>
                </div>
                <div className="text-lg">
                    Team C Studios is an indie game development group created by XannyXu, Frank_the_Ogre, and their friends.
                </div>
                <div className="text-lg">
                    Here is the Team C Studios invite link: <a className="text-blue-700 visited:text-purple-700" target="blank" href={"https://discord.gg/ucPcb3JB9F"}>Team C Studios Discord</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TeamC
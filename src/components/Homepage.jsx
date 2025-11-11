import Footer from "./Footer"
import Header from "./Header"

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className="m-10">
                <div className="flex">
                    <div className="basis-1/2 text-4xl font-bold">
                        This is Team C Studios.
                    </div>
                </div>
                <div className="text-lg">
                    Team C Studios is an indie game development group created by XannyXu, Frank_the_Ogre, and their friends.
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Homepage
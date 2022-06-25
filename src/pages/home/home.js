import R_button from "../components/buttons/reuseableButton";
import Cards from "../components/cards/cards";
import Navbar from "../components/navBar";
import "./home.scss";
// import {IoDiamondOutline} from "react-icons/io";
// import {avata} from "../../images/human.png";


const cardItems = [
    {
        icon: "icons",
        title: "Fully Secured",
        desc: "Our platform is APIDSS compliant to ensure",
        desc2: "optimum security of your data electronically"
    },
    {
        icon: "<IoDiamondOutline />",
        title: "Instant Loan",
        desc: "Download the app apply now and",
        desc2: "get instantly alerted if you qualify"
    },
    {
        icon: "icons",
        title: "Easy to Use",
        desc: "Our Platform is built, especially for you",
        desc2: "It is seamless and easy to navigate"
    }
    
]


const Home = ()=>{

    return (

            <div className="container">
                <Navbar />
                <div className="main__section__container">
                    <div className="inspiring">
                        <h2>Get Quick Credit</h2>
                        <h2>Anytime, Anywhere.</h2>
                        <p>Never go broke again. No longa queues. No bulky documents</p>
                        <p>No long wait times. Just your smartphone and QuickCheck App.</p>
                        {/* <img src={avata}> */}
                        <R_button text="Get the App"/>
                    </div>
                    <div className="twoBg__img">
                        <div className="up__bg"></div>
                        <div className="down__bg"></div>
                    </div>
                </div>
                <div className="whyUs__container">
                    <h2>Why Quick Credit</h2>
                    <p>We use machine learning to predict borrower's behaviour and instantly evaluate loan applications.
                       We aim at offering digital financial services to help you get closer to your personal and business goals.
                    </p>
                </div>
                <div className="cards__section">
                    <Cards 
                        icon={cardItems[0].icon}
                        title={cardItems[0].title}
                        desc={cardItems[0].desc}
                        desc2={cardItems[0].desc2}
                    />
                    <Cards 
                        icon={cardItems[1].icon}
                        title={cardItems[1].title}
                        desc={cardItems[1].desc}
                        desc2={cardItems[1].desc2}
                    />
                    <Cards 
                        icon={cardItems[2].icon}
                        title={cardItems[2].title}
                        desc={cardItems[2].desc}
                        desc2={cardItems[2].desc2}
                    />
        
                </div>
            </div>



    )
}
export default Home;
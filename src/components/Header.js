// IMPORTS
import { Link } from 'react-router-dom';
// CSS
import '../styles/Header.css';
// IMAGES
import explorers from '../assets/explorers.png';


const Header = () => {

    return (
        <header>
            <div className="headerFlex">
                <div className="wrapper">
                    <div className="headerContent">
                        <div className="headerTextContainer">
                            <h1 className="headerTitle">Path of the Warrior</h1>
                            <p>Did you come here to become a Warrior?</p>
                            <p>Warriors have great strength and high HP, and face their enemies up-close with powerful attacks. Sounds exiting, no?</p>
                            <p>You look like you are more than qualified. If you wish to become a Warrior, I welcome you. Is that your wish?</p>
                            <p>Your heart is ready, yes? There is no room for hesitation in a Warrior's soul.</p>
                        </div>{/* END .textContainer */}
                            <div className="headerImage">
                                <img src={explorers} alt="Five explorers with different classes (mage, thief, pirate, warrior, archer)" />
                            </div>{/* END .headerImage */}
                    </div>{/* END .headerContent */}
                        
                    {/* Link to WarrioInfo.js */}
                    <Link to="warriorsinfo" className='routerLink headerLink'>
                        I'm Ready
                    </Link>
                </div>
            </div>{/* END .headerFlex */}
        </header>
    )
}

export default Header
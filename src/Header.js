import './Header.css';
import { Link } from 'react-router-dom';


import explorers from './assets/explorers.png';


const Header = () => {

    return (
        <header>
                <div className="wrapper">
                    <div className="headerFlex">
                        <div className="headerContent">
                            <div className="textContainer">
                            <h1 className="title">Path of the Warrior</h1>
                            <p>Did you come here to become a Warrior?</p>
                            <p>Warriors have great strength and high HP, and face their enemies up-close with powerful attacks. Sounds exiting, no?</p>
                            <p>You look like you are more than qualified. If you wish to become a Warrior, I welcome you. Is that your wish?</p>
                            <p>Your heart is ready, yes? There is no room for hesitation in a Warrior's soul.</p>
                            </div>
                            <div className="backgroundImage">
                                <img src={explorers} alt="Five explorers with different classes (mage, thief, pirate, warrior, archer)" />
                            </div>
                        </div>

                        <Link to="warriorsinfo">
                            <button>I'm Ready</button>
                        </Link>
                    </div>
                </div>
            </header>
    )
}

export default Header
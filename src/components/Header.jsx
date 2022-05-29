import '../styles/Header.scss';
import { motion } from 'framer-motion';


const Header = ({setShowMenu})=>{

    const ShowHidden = {
        hide : {
            height: '0px',
            opacity: 0
        },
        show: {
            height: 'auto',
            opacity: 1,
            transition: {
                type: 'tween',
            }
        }
    };
    return (<header>
        <div className="logo">
        </div>
        <div className="navbar">
            <div className="links">
                <motion.li whileHover="show" initial="hide"><a href="#">Resources <span className="material-symbols-rounded">
                                expand_more
                                </span></a>
                    <motion.div className="drop-down-menu" variants={ShowHidden}>
                        <p><a href="#">Getting started!</a></p>
                        <p><a href="#">Blog</a></p>
                        <p><a href="#">Videos</a></p>
                        <p><a href="#">Support</a></p>
                    </motion.div>
                </motion.li>
                <li><a href="#">Join Discord</a></li>
                <li><a href="#">Login</a></li>
            </div>
            <div className="nav-button">
                TRY DETAIL FOR FREE
            </div>
        </div>
        <div className="menu" onClick={()=>{
            setShowMenu((state)=> !state);
            document.body.style.overflow = 'hidden';
        }}>
            <span className="material-symbols-rounded">
            menu
            </span>
        </div>
    </header>);
}

export default Header;
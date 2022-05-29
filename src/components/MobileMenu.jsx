import '../styles/MobileMenu.scss';



const MobileMenu = ({className, setShowMenu})=>{
    return (<div className={`mobile-menu ${className}`}>
    <span className="material-symbols-rounded" onClick={()=>{
        setShowMenu(state => !state);
        document.body.style.overflow = 'auto';
    }}>
close
</span>
        <div className="logo">

        </div>
        <div className={`NavBar`}>
        <li><a href="#">Resources <span className="material-symbols-rounded">
                                expand_more
                                </span></a>
                    <div className="drop-down-menu">
                        <p><a href="#">Getting started!</a></p>
                        <p><a href="#">Blog</a></p>
                        <p><a href="#">Videos</a></p>
                        <p><a href="#">Support</a></p>
                    </div>
                </li>
                <li><a href="#">Join Discord</a></li>
                <li><a href="#">Login</a></li>
        </div>
        <div className="button">
            TRY DETAIL FOR FREE
        </div>
    </div>)
};

export default MobileMenu;
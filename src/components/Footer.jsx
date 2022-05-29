
import '../styles/Footer.scss';

const Footer = ()=>{
    return <footer>
        <div className="news-container">
            <div className="left-side">
                <p>Sign up for news and resources</p>
                <p>Unsubscribe at any time.</p>
            </div>
            <div className="input-side">
                <div className="input-control">
                    <input type="text" placeholder='email@elomary.com' />
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
        <div className="links">
            <div className="link">
                <h1>Details</h1>
                <div className="links-container">
                    <p><a href="#">Join Discord</a></p>
                    <p><a href="#">Jobs</a></p>
                </div>
            </div>
            <div className="link">
                <h1>Resources</h1>
                <div className="links-container">
                    <p><a href="#">Get help</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Videos</a></p>
                    <p><a href="#">Getting Started</a></p>
                </div>
            </div>
            <div className="link">
                <h1>Social</h1>
                <div className="links-container">
                    <p><a href="#">Youtube</a></p>
                    <p><a href="#">Instagram</a></p>
                    <p><a href="#">Twitter</a></p>
                    <p><a href="#">Linkedin</a></p>
                </div>
            </div>
            <div className="link">
                <h1>Legal</h1>
                <div className="links-container">
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Cookie Policy</a></p>
                </div>
            </div>
        </div>
        <div className="rights">
            <p>&copy; 2021 Detail Technologies B.V., All Rights reserved</p>
            <p>Made By heart <a href="https://github.com/celomary" target="_blank">Celomary</a></p>
        </div>
    </footer>;
};

export default Footer;
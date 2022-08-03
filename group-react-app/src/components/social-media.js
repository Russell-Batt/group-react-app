import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './social-media.css'

function SocialMedia(props) {
    const {darkMode, setDarkMode} = props

    return(
        <div className={`social-media ${darkMode && 'dark-mode'}`}>
            <a href="facebook"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
            <a href="twitter"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
            <a href="instagram"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
            <a href="linkedin"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>   
        </div>
    )
}

export default SocialMedia
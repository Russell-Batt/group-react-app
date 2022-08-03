import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMicrsoft, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { fa } from '@fortawesome/free-solid-svg-icons'

function SocialMedia() {
    return(
        <div>
            <a href="facebook"><FontAwesomeIcon icon="fa fa-twitter" /></a>
            {/* <a href="twitter"><i className="fa fa-twitter"></i></a>
            <a href="instagram"><i className="fa fa-instagram"></i></a>
            <a href="linkedin"><i className="fa fa-linkedin"></i></a> */}
            
        </div>
    )
}

export default SocialMedia
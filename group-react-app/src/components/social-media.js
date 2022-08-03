import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// import { fa } from '@fortawesome/free-solid-svg-icons'

function SocialMedia() {
    return(
        <div>
            <a href="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            {/* <a href="twitter"><FontAwesomeIcon icon={faFacebook}</i></a>
            <a href="instagram"><<FontAwesomeIcon icon={faFacebook}</a>
            <a href="linkedin"><i className="fa fa-linkedin"></i></a> */}
            
        </div>
    )
}

export default SocialMedia
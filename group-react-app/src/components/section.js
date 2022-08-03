import './section.css'

function Section(props) {
    const {title, paragraph, image, darkMode} = props;
    
    return(
        <div className={`section ${darkMode && 'dark-mode'}`}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <img className="image" src={image} alt="" />
        </div>
    )
}

export default Section
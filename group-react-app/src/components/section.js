import './section.css'

function Section(props) {
    const {title, paragraph, image} =props
    
    
    return(
        <div class="section">
            <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <img class="image" src={image} alt="" />
        </div>
    )
}

export default Section
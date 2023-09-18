import "./style/content.css"

function Content() {
    return (
        <div className="content">
            <div className="about-container">
                <h2 className="about">About</h2>
                <p className="text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className="about-container">
                <h2 className="interest">Interests</h2>
                <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default Content
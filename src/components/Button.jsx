import "./style/button.css"

function Button() {
    return (
        <div className="button-container">
            <div className="button-wrap">
                
                <a href="#" className="button white"><i class="fa-solid fa-envelope"></i>Email</a>
            </div>

            <div className="button-wrap">
                
                <a href="#" className="button blue"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}
export default Button
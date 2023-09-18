import Image from './Image'
import Main from './Main'
import Footer from './Footer'
import "./style/container.css"

function Container() {

  return (
    <div className="card">
        <div className="image-container">
            <Image />
        </div>
        <Main />
        <Footer />
    </div>
  )
}

export default Container

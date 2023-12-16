import { logo } from "../assets"
 
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain"/>
        <button type="submit" onClick={() => {
          window.open('https://github.com/Fardeen26')
        }} className="black_btn">GitHub</button>
      </nav>

      <h1 className="head_text">
        Summirize Articles With <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplyfy your reading with Summize, an open-source article summirizer that transform lengthy articles into clear and consice summiries
      </h2>
    </header>
  )
}

export default Hero
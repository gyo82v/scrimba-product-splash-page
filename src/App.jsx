import { useState } from "react"
import avatar from "./images/avatar.png"
import bg from "./images/bg-sushi.png"

function App() {
  const [formData, setFormdata] = useState({name : "", email : ""})
  const [hasApplied, setHasApplied] = useState(false)

  //tailwind styles 
  const flex = `flex flex-col`
  const shadow = `shadow-lg shadow-neutral-800/30`
  const header = `bg-cover bg-center items-center p-4 font-bold text-center min-h-80 
                  md:flex-1 md:min-h-screen`
  const title = `text-4xl text-neutral-300 mb-auto md:mt-20`
  const headerDesc = `text-neutral-300 md:text-xl md:mb-10 text-outline`
  const main = `items-center p-4 mt-10 md:mt-0 text-center md:flex-1 md:justify-center
                px-10 lg:px-20`
  const img = `rounded-full h-40 w-40 md:h-48 md:w-48`
  const subTitle = `text-2xl font-bold mt-10 text-outline-one `
  const span = `font-semibold text-lg italic mt-4 mb-8`
  const input = `border boder-neutral-400 rounded-lg p-2 mt-2
                 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-neutral-200
                 focus:text-lg focus:font-bold font-semibold `
  const btn = `mt-12 mb-4 py-2 bg-gradient-to-br from-green-400 to-lime-300 rounded-lg border-none
               transform hover:scale-105 active:scale-95 font-bold text-lg text-green-900`
  //
  const onChange = e => {
    const {name, value} = e.target
    setFormdata(d => ({...d, [name] : value}))
  }
  const handleSubmit = e => {
    e.preventDefault()
    setHasApplied(true)
  }

  return (
    <div className={`${flex} md:flex-row`}>
      <header className={`${flex} ${header}`} style={{backgroundImage: `url(${bg})`}}>
        <h1 className={title}>Master Sushi: Hands-on Workshop with an Experienced Chef</h1>
        <p className={headerDesc}>
            Elevate your culinary skills in an immersive,
            small-group lesson led by an experienced sushi chef. 
        </p>
      </header>
      <main className={`${flex} ${main}`}>
        <img src={avatar} alt="portrait of the chef that teaches the course" className={`${img} ${shadow}`}/>
        <h2 className={subTitle}>Private Sushi Masterclass</h2>
        <span className={span}>Authentic techniques • Small groups • Ingredients & tools provided</span>
        <p className="text-left">
            Join an immersive, hands-on sushi masterclass led by an experienced sushi chef. Over a focused
            three-hour session you’ll learn rice preparation, fish selection and handling, precision knife
            techniques, nigiri and maki assembly, and professional plating.
        </p> 
        <form className={`${flex} w-full mt-8`} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your full name..." 
            aria-label="Enter your full name" 
            value={formData.name} 
            name="name" 
            onChange={onChange}
            className={`${input} ${shadow}`} 
            required
          />
          <input
            type="email"
            placeholder="Enter your email..." 
            aria-label="Enter your email"
            value={formData.email}
            name="email"
            onChange={onChange}
            className={`${input} ${shadow}`}
            required
          />
          <button className={`${btn} ${shadow}`} disabled={hasApplied}>
            {hasApplied ? "Thank you! Check your email." : "Apply"}
            </button>
        </form>
        <p className="italic font-light">We'll never share your information without permission</p>
      </main>
    </div>
  )
}

export default App

import { useState } from "react"
import avatar from "./images/avatar.png"
import bg from "./images/bg-sushi.png"

function App() {
  const [formData, setFormdata] = useState({name : "", email : ""})

  //tailwind styles 
  const container = `flex flex-col`
  const header = `flex flex-col bg-cover bg-center items-center justify-center
                  p-4 font-bold text-center`
  const title = `text-4xl text-neutral-300`
  const headerDesc = `text-neutral-300 mt-4`
  const main = `flex flex-col items-center p-4 mt-10 text-center`
  const img = `rounded-full h-40 w-40`
  const subTitle = `text-2xl font-bold mt-4`
  const span = `font-semibold text-lg italic`
  const mainDesc = `mt-4`
  const form = ``
  const formDesc = ``
  const input = ``

  //
  const onChange = e => {
    const {name, value} = e.target
    setFormdata(d => ({...d, [name] : value}))
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className={container}>
      <header className={header} style={{backgroundImage: `url(${bg})`}}>
        <h1 className={title}>Master Sushi: Hands-on Workshop with an Experienced Chef</h1>
        <p className={headerDesc}>
            Elevate your culinary skills in an immersive,
            small-group lesson led by an experienced sushi chef. 
        </p>
      </header>
      <main className={main}>
        <img src={avatar} alt="portrait of the chef that teaches the course" className={img}/>
        <h2 className={subTitle}>Private Sushi Masterclass</h2>
        <span className={span}>Authentic techniques • Small groups • Ingredients & tools provided</span>
        <p className={mainDesc}>
            Join an immersive, hands-on sushi masterclass led by an experienced sushi chef. Over a focused
            three-hour session you’ll learn rice preparation, fish selection and handling, precision knife
            techniques, nigiri and maki assembly, and professional plating. The course emphasizes food
            safety, sustainable sourcing, and the harmony of texture and flavor. Small-group instruction
            ensures personalized feedback and ample practice;
        </p> 
        <form className={form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your full name..." 
            aria-label="Enter your full name" 
            value={formData.name} 
            name="name" 
            onChange={onChange}
            className={input} 
          />
          <input
            type="email"
            placeholder="Enter youe email..." 
            aria-label="Enter your email"
            value={formData.email}
            name="email"
            onChange={onChange}
            className={input}
          />
          <button>Apply</button>
        </form>
        <p className={formDesc}>We'll never share your information without permission</p>
      </main>
    </div>
  )
}

export default App

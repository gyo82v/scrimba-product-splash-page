

function App() {


  return (
   <body>
  <section className="intro">
    <h1>Master Sushi: Hands-on Workshop with an Experienced Chef</h1> {/* title here */}
    <p>
      Elevate your culinary skills in an immersive, small-group lesson led by an experienced sushi chef. 
      Learn traditional techniques, ingredient selection, and the fundamentals of presentation.{/* subtitle here */}
    </p>
  </section>

  <main className="main-content">
    <img alt="Sushi class" {...{/* ignore this for now */}} />
    <h2>Private Sushi Masterclass (Beginner → Intermediate)</h2> {/* name of the product */}
    <span>Authentic techniques • Small groups • Ingredients & tools provided</span> {/* subtitle of the product */}

    <p>
      Join an immersive, hands-on sushi masterclass led by an experienced sushi chef. Over a focused
      three-hour session you’ll learn rice preparation, fish selection and handling, precision knife
      techniques, nigiri and maki assembly, and professional plating. The course emphasizes food
      safety, sustainable sourcing, and the harmony of texture and flavor. Small-group instruction
      ensures personalized feedback and ample practice; ingredients and chef’s tools are provided.
      Participants leave with practical recipes, troubleshooting tips, and the confidence to recreate
      refined sushi at home. Recommended for beginners and culinary enthusiasts seeking professional guidance.
    </p> {/* description of the product */}
    
    <form>{/* form here... ignore this */}</form>
    <p>We'll never share your information without permission</p>
  </main>
</body>

  )
}

export default App

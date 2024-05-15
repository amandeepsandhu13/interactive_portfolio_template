import Header from "./components/Header";
import { CORE_PROJECTS } from "./data.js";



// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

function CoreConcept({image,title,description}){
  return(
    <li><img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
        <h2>Projects</h2>
          <ul>
            <CoreConcept {...CORE_PROJECTS[0]} />
            <CoreConcept {...CORE_PROJECTS[1]} />
            <CoreConcept {...CORE_PROJECTS[2]} />
            <CoreConcept {...CORE_PROJECTS[3]} />
          
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
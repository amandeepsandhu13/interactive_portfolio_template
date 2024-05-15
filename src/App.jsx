import Header from "./components/Header";
import { CORE_PROJECTS } from "./data.js";



// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

function CoreConcept(props){
  return(
    <li><img src={props.image} alt="props.title" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
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
            <CoreConcept title = {CORE_PROJECTS[1].title}
                           image = {CORE_PROJECTS[1].image}
                           description = {CORE_PROJECTS[1].description}
            />
             <CoreConcept title = {CORE_PROJECTS[2].title}
                           image = {CORE_PROJECTS[2].image}
                           description = {CORE_PROJECTS[2].description}
            />
            <CoreConcept title = {CORE_PROJECTS[3].title}
                           image = {CORE_PROJECTS[3].image}
                           description = {CORE_PROJECTS[3].description}
            />
          
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data.js";



// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

function CoreConcept(props){
  return(
    <li><img src={props.image} alt="" />
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
            <CoreConcept title = {CORE_CONCEPTS[0].title}
                           image = {CORE_CONCEPTS[0].image}
                           description = {CORE_CONCEPTS[0].description}
            />
            <CoreConcept title = {CORE_CONCEPTS[1].title}
                           image = {CORE_CONCEPTS[1].image}
                           description = {CORE_CONCEPTS[1].description}
            />
             <CoreConcept title = {CORE_CONCEPTS[2].title}
                           image = {CORE_CONCEPTS[2].image}
                           description = {CORE_CONCEPTS[2].description}
            />
            <CoreConcept title = {CORE_CONCEPTS[3].title}
                           image = {CORE_CONCEPTS[3].image}
                           description = {CORE_CONCEPTS[3].description}
            />
          
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
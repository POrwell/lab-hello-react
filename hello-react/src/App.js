
import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuLogo from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
    <nav className="Nav-bar">
        <img src={ironhackLogo} alt="Ironhack logo"/>
        <img src={menuLogo} alt="menu logo"/>
    </nav>
    <header>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button>Awesome!</button>
      </header>
      <div className="Main">
        <article>
        <img src={icon1} alt="spanner icon"/>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
        <img src={icon2} alt="home page icon"/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
        <img src={icon3} alt="settings icon"/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
        </article>
        <article>
        <img src={icon4} alt="laptop screen icon"/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </div>
    </div>
  );
}
export default App;

import Header from "./Header";
import Movie from "./Movie";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Movie title="Lord of the Rings" />
        <Movie title="Dune" />
        <Movie title="Gladiator" />
      </main>
    </div>
  );
}

export default App;


import CardOne from "./components/CardOne";
import Heading from "./components/heading";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import CardFour from "./components/CardFour";
import './App.css';

function App() {
  return (
    <main className="App">
      {/* Start of Heading Section */}
      <section className="heading-section">
        <Heading />
      </section>
      {/* End of Heading Section */}

      {/* Start of Card Section */}
      <section className="card-container">
        {/* Start of Card One */}
        <article className="card-section">
          <CardOne />
        </article>
        {/* End of Card One */}
        
        {/* Start of Card Two and Three */}
        <article className="card-section">
          <CardTwo />
          <CardThree />
        </article>
        {/* End of Card Two and Three */}

        {/* Start of Card Four */}
        <article className="card-section">
          <CardFour />
        </article>
        {/* End of Card Four */}
      </section>
      {/* End of Card Section */}
    </main>
  );
}


export default App;

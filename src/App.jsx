import Header from "./components/Header";
import Cards from "./components/Cards";
import Data from "./data";
import "./App.css";

function App() {
  const cardComponent = Data.map((card) => {
    return <Cards {...card} />;
  });

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="card-component">{cardComponent}</div>
        </div>
      </div>
    </>
  );
}

export default App;

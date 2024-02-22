import NavBar from "./components/NavBar.jsx";
import "./App.css";
import babel from "./assets/babel.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryList from "./components/CategoryList.jsx";

function App() {
  const name = "";
  return (
    <div className="App">
      <NavBar />
      <CategoryList />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

import { BrowserRouter , Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

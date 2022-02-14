import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {CarLearn} from "./pages/CarLearn";
import {CarShop} from "./pages/CarShop";
import {Home} from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/learn/:carId" element={<CarLearn />} />
          <Route exact path="/shop/:carId" element={<CarShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

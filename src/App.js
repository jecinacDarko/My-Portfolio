import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./animated-routes/AnimatedRoutes";


function App() { 
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

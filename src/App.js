import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './animated-routes/AnimatedRoutes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

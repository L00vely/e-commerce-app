
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { PlantsPage } from "./components/PlantsPage/PlantsPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to={`/plants`} />} />
        <Route path="/plants" element={<PlantsPage />}/> 
      </Routes>
    </Router>
  );
}

export default App;

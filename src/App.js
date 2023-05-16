import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  return <Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
      </Routes>
  </Router>
}

export default App;
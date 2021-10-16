import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar"
import Colleges from "./components/Colleges";
import Students from "./components/Students";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/colleges">
                    <Sidebar />
                    <Colleges />
                </Route>
                <Route exact path="/students">
                    <Sidebar />
                    <Students />
                </Route>
                <Route exact path="/">
                    <Sidebar />
                    <Home />
                </Route>
            </Router>
        </div>
  );
}

export default App;

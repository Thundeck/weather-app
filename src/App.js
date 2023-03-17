import { Routes, Route } from "react-router-dom";
import LayOut from "./components/Layout";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import r from './Routes'
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path={r.main} element={<LayOut />} >
          <Route index element={<CardContainer/>} />
          <Route exact path={r.about} element={<About/>}/>
          <Route exact path={r.notFound} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

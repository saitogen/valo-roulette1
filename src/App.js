import { BrowserRouter, Route } from "react-router-dom";
import Roulette from "./components/Roulette";
import Neon from "./components/Neon";
import Killjoy from "./components/Killjoy";
import Jett from "./components/Jett";
import Chamber from "./components/Chamber";
import Reyna from "./components/Reyna";
import Sky from "./components/Sky";
import Yoru from "./components/Yoru";
export default function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Roulette />
      </Route>
      <Route path="/Jett">
        <Jett />
      </Route>
      <Route path="/Neon">
        <Neon />
      </Route>
      <Route path="/Killjoy">
        <Killjoy />
      </Route>
      <Route path="/Chamber">
        <Chamber />
      </Route>
      <Route path="/Yoru">
        <Yoru />
      </Route>
      <Route path="/Sky">
        <Sky />
      </Route>
      <Route path="/Reyna">
        <Reyna />
      </Route>
    </BrowserRouter>
  );
};
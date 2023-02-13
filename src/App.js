import { BrowserRouter, Route } from "react-router-dom";
import Roulette from "./components/Roulette";
import Neon from "./components/Neon";
export default function App() {
  return (
    <BrowserRouter>
    <Route path="/">
      <Roulette />
    </Route>
    <Route path="/Neon">
      <Neon />
    </Route>
        <Route path={"/neon/"} element={<Neon/>} />
    </BrowserRouter>
  );
};
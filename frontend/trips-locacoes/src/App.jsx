import Home from "./Pages/Home";
import PageCidade from "./Pages/PageCidades";
import PageAcomodacao from "./Pages/PageAcomodacao";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagecidade" element={<PageCidade />} />
        <Route path="/pageacomodacao" element={<PageAcomodacao />} />
      </Routes>
    </>
  );
};

export default App;

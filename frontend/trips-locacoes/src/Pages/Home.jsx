import Footer from "../componentes/Footer/Footer";
import MaisProcurados from "../componentes/MaisProcurados/MaisProcurados";
import Navbar from "../componentes/Navbar/Navbar";
import Procurarcidade from "../componentes/Procurarcidade/Procurarcidade";
import RotacaoImg from "../componentes/Rotacaoimg/Rotacaoimg";

const Home = () => {
  return (
    <>
      <Navbar />
      <RotacaoImg />
      <Procurarcidade />
      <MaisProcurados />
      <Footer />
    </>
  );
};

export default Home;

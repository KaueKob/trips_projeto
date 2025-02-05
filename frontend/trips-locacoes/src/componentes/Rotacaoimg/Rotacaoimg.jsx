import { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import img1 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/apartamento_batel_curitiba.jpg";
import img2 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/apartamento_centro_sao_paulo.jpg";
import img3 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/apartamento_com_vista_mar_rio_de_janeiro.jpg";
import img4 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/cabana_aconchegante_campos_jordao.jpg";
import img5 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/cabana_rustica_gramado.jpg";
import img6 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/casa_beira_mar_florianopolis.png";
import img7 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/chale_lareira_gramado.jpg";
import img8 from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/acomodacoes/chale_montanhas_campos_jordao.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function RotacaoImg() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para a próxima imagem em ordem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Volta para a imagem anterior em ordem
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Efeito para mudar automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[358px] sm:h-[300px] md:h-[350px] flex justify-center items-center">
      {/* Botão de voltar */}
      <button
        onClick={prevImage}
        className="absolute left-5 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
      >
        <NavigateBeforeIcon size={24} />
      </button>

      {/* Imagem principal */}
      <img
        src={images[currentIndex]}
        alt="Rotating"
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Botão de avançar */}
      <button
        onClick={nextImage}
        className="absolute right-5 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
      >
        <NavigateNextIcon size={24} />
      </button>
    </div>
  );
}

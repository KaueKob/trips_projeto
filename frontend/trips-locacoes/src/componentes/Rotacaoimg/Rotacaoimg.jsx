import { useState, useEffect } from "react";
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
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[358px] sm:h-[300px] md:h-[350px] flex justify-center">
      <img
        src={currentImage}
        alt="Rotating"
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  );
}

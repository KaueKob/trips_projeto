import { useState, useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const MaisProcurados = () => {
  const [acomodacoes, setAcomodacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/acomodacoes")
      .then((response) => {
        const cidadesSelecionadas = new Set();
        const selecionadas = response.data.Acomodações.filter((acomodacao) => {
          if (!cidadesSelecionadas.has(acomodacao.localizacao)) {
            cidadesSelecionadas.add(acomodacao.localizacao);
            return true;
          }
          return false;
        }).slice(0, 6);

        setAcomodacoes(selecionadas);
      })
      .catch((error) => console.error("Erro ao buscar acomodações:", error));
  }, []);

  const handleSaibaMais = (id) => {
    navigate("/pageacomodacao", { state: { id } });
  };

  return (
    <div className="w-full max-w-[1440px] py-7 mx-auto px-4">
      <span className="flex justify-center mb-6 text-3xl font-bold text-center">
        Imóveis mais procurados:
      </span>
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {acomodacoes.map((acomodacao) => {
          const imagePath = `/src/assets/acomodacoes/${acomodacao.imagem}`;

          return (
            <div
              key={acomodacao.id}
              className="bg-[#fff] w-[350px] h-[550px] flex flex-col rounded-3xl shadow-lg mt-5"
            >
              <div className="relative">
                <img
                  src={imagePath}
                  alt={acomodacao.imagem}
                  className="object-cover w-[350px] h-[350px] rounded-t-3xl"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <FavoriteIcon className="w-6 h-6 text-red-500" />
                </div>
                <button
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#9a8989] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#9a6262] transition"
                  onClick={() => handleSaibaMais(acomodacao.id)}
                >
                  Saiba Mais
                </button>
              </div>

              <span className="text-xl font-semibold text-center py-2">
                {acomodacao.nome}
              </span>

              <ul className="flex flex-col space-y-2 px-4">
                <li className="text-sm text-gray-600">
                  Localização: {acomodacao.localizacao}
                </li>
                <li className="text-sm text-gray-600">
                  Preço por noite: R$ {acomodacao.preco_noite}
                </li>
                <li className="text-sm text-gray-600">
                  Quartos: {acomodacao.quartos}
                </li>
                <li className="text-sm text-gray-600">
                  Máx. Pessoas: {acomodacao.pessoasmax}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaisProcurados;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ExibirAcomCid = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { acomodacoes, cidade } = location.state || {
    acomodacoes: [],
    cidade: "",
  };

  const [favoritos, setFavoritos] = useState({});

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    setFavoritos(storedFavoritos);
  }, []);

  const toggleFavorito = (id) => {
    const novosFavoritos = { ...favoritos, [id]: !favoritos[id] };
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  if (!cidade) {
    return <div>Sem cidade selecionada.</div>;
  }

  // remoç~ao de acentos e espaços
  const cidadeTrim = cidade
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  const handleSaibaMais = (id) => {
    navigate("/pageacomodacao", { state: { id } });
  };

  return (
    <div>
      <div className="flex w-full h-[358px]">
        <img
          src={`/src/assets/cidades/${cidadeTrim}.jpg`}
          alt="Cidade"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full py-7 px-4 sm:px-8 md:px-16">
        <span className="flex justify-center mb-6 text-3xl font-bold">
          Acomodações em {cidade}
        </span>
        <div className="w-full flex flex-wrap justify-center sm:justify-between gap-5 p-7">
          {acomodacoes.map((acomodacao) => {
            const imagePath = `/src/assets/acomodacoes/${acomodacao.imagem}`;
            const isFavorito = favoritos[acomodacao.id];

            return (
              <div
                key={acomodacao.id}
                className="bg-[#fff] w-full sm:w-[350px] h-[550px] flex flex-col rounded-3xl shadow-lg mt-5"
              >
                <div className="relative">
                  <img
                    src={imagePath}
                    alt={acomodacao.imagem}
                    className="object-cover w-full h-[350px] rounded-t-3xl"
                  />
                  <div
                    className="absolute top-3 right-3 p-2 cursor-pointer transition"
                    onClick={() => toggleFavorito(acomodacao.id)}
                  >
                    <FavoriteIcon
                      className={`w-6 h-6 transition ${
                        isFavorito ? "text-red-500" : "text-white"
                      }`}
                    />
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
    </div>
  );
};

export default ExibirAcomCid;

import { useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ExibirAcomCid = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook para navegação
  const { acomodacoes, cidade } = location.state || {
    acomodacoes: [],
    cidade: "",
  };
  console.log(cidade, "cidade2");
  if (!cidade) {
    return <div>Sem cidade selecionada.</div>;
  }

  //remoça˜o de acentos e espaços, seguindo post no stackoverflow
  //https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
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
      {console.log(cidade)}
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
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
                    <FavoriteIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <button
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#9a8989] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#9a6262] transition"
                    onClick={() => handleSaibaMais(acomodacao.id)} // Passa o ID para a próxima página
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

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Procurarcidade = () => {
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!cidade.trim()) return;

    axios
      .get(`http://127.0.0.1:8000/acomodacoes/?cidade=${cidade}`)
      .then((response) => {
        if (response.data.acomodacoes.length > 0) {
          navigate(`/pagecidade`, {
            state: { acomodacoes: response.data.acomodacoes, cidade },
          });
        } else {
          alert("Nenhuma acomodação encontrada para essa cidade.");
        }
      })
      .catch((error) => console.error("Erro ao buscar acomodações:", error));
  };

  return (
    <div className="flex flex-col w-full max-w-[1440px] h-[296px] items-center text-center py-10 px-4">
      <div className="w-full max-w-[800px] h-[138px] flex flex-col space-y-3">
        <span className="font-bold text-2xl">
          Conectando Você ao Lar Perfeito
        </span>
        <span className="font-semibold text-xl">
          Encontre acomodações incríveis para sua próxima viagem, com conforto,
          segurança e praticidade.
        </span>
      </div>
      <div className="flex space-x-3 items-center w-full max-w-[900px] mt-5">
        <input
          type="text"
          placeholder="Digite a Cidade de seu destino."
          className="w-full h-[50px] rounded-full bg-[#f0e8e8] focus:outline-none focus:ring-2 focus:ring- text-center"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <button
          className="bg-[#885e5e] rounded-xl w-[50px] h-[50px] text-white text-lg flex justify-center items-center"
          onClick={handleSearch}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Procurarcidade;

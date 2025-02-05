import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ExibirAcomodacao = () => {
  const location = useLocation();
  const { id } = location.state;

  const [acomodacao, setAcomodacao] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/acomodacoes/${id}`)
      .then((response) => {
        setAcomodacao(response.data);
      })
      .catch((error) => console.error("Erro ao buscar acomodação:", error));
  }, [id]);

  if (!acomodacao) return <div>Carregando...</div>;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <span className="flex justify-center text-3xl font-bold py-4">
        {acomodacao.nome} em {acomodacao.localizacao}
      </span>
      <div className="w-full max-w-3xl h-[500px] flex justify-center mx-auto">
        <img
          src={`/src/assets/acomodacoes/${acomodacao.imagem}`}
          alt={acomodacao.imagem}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="px-4 sm:px-8 flex justify-center text-center text-lg py-6">
        <span>{acomodacao.descricao}</span>
      </div>
      <div>
        <ul className="flex flex-col items-center pb-8 space-y-2">
          <li>Disponível: {acomodacao.disponibilidade ? "Sim" : "Não"}</li>
          <li>Quarto: {acomodacao.quartos}</li>
          <li>Pessoas: {acomodacao.pessoasmax}</li>
          <li>Preço: R$ {acomodacao.preco_noite}</li>
          <button className="bg-[#977b7b] rounded-xl px-6 py-1 text-white">
            Alugar
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ExibirAcomodacao;

from fastapi import FastAPI, Query, HTTPException
from urllib.parse import unquote

app = FastAPI()

acomodacoes = [
    {
        "id": 1,
        "nome": "Chalé nas montanhas",
        "imagem": "chale_montanhas_campos_jordao.jpeg",
        "preco_noite": 250,
        "localizacao": "Campos do Jordão, SP",      
        "quartos": 1,
        "pessoasmax": 2
    },
    {
        "id": 2,
        "nome": "Cabana aconchegante",
        "imagem": "cabana_aconchegante_campos_jordao.jpg",
        "preco_noite": 320,
        "localizacao": "Campos do Jordão, SP",
        "quartos": 2,
        "pessoasmax": 4
    },
    {
        "id": 3,
        "nome": "Casa rústica de madeira",
        "imagem": "casa_rustica_madeira_campos_jordao.jpeg",
        "preco_noite": 280,
        "localizacao": "Campos do Jordão, SP",      
        "quartos": 2,
        "pessoasmax": 4
    },
    {
        "id": 4,
        "nome": "Apartamento no centro",
        "imagem": "apartamento_centro_sao_paulo.jpg",
        "preco_noite": 200,
        "localizacao": "São Paulo, SP",      
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 5,
        "nome": "Studio moderno",
        "imagem": "studio_moderno_sao_paulo.jpg",
        "preco_noite": 240,
        "localizacao": "São Paulo, SP",      
        "quartos": 1,
        "pessoasmax": 2
    },
    {
        "id": 6,
        "nome": "Cobertura de luxo",
        "imagem": "cobertura_de_luxo_sao_paulo.jpg",
        "preco_noite": 500,
        "localizacao": "São Paulo, SP",      
        "quartos": 4,
        "pessoasmax": 8
    },
    {
        "id": 7,
        "nome": "Cabana rústica",
        "imagem": "cabana_rustica_gramado.jpg",
        "preco_noite": 180,
        "localizacao": "Gramado, RS",      
        "quartos": 1,
        "pessoasmax": 2
    },
    {
        "id": 8,
        "nome": "Pousada aconchegante",
        "imagem": "pousada_aconchegante_gramado.jpg",
        "preco_noite": 220,
        "localizacao": "Gramado, RS",      
        "quartos": 3,
        "pessoasmax": 6
  
    },
    {
        "id": 9,
        "nome": "Chalé com lareira",
        "imagem": "chale_lareira_gramado.jpg",
        "preco_noite": 260,
        "localizacao": "Gramado, RS",      
        "quartos": 2,
        "pessoasmax": 4
    },
    {
        "id": 10,
        "nome": "Suíte luxuosa",
        "imagem": "suite_luxuosa_rio_de_janeiro.jpg",
        "preco_noite": 500,
        "localizacao": "Rio de Janeiro, RJ",      
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 11,
        "nome": "Apartamento com vista para o mar",
        "imagem": "apartamento_com_vista_mar_rio_de_janeiro.jpg",
        "preco_noite": 350,
        "localizacao": "Rio de Janeiro, RJ",
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 12,
        "nome": "Casa pé na areia",
        "imagem": "casa_pe_na_areia_rio_de_janeiro.jpg",
        "preco_noite": 700,
        "localizacao": "Rio de Janeiro, RJ",      
        "quartos": 5,
        "pessoasmax": 10
    },

    {
        "id": 13,
        "nome": "Pousada tranquila",
        "imagem": "pousada_tranquila_florianopolis.png",
        "preco_noite": 280,
        "localizacao": "Florianópolis, SC",      
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 14,
        "nome": "Casa à beira-mar",
        "imagem": "casa_beira_mar_florianopolis.png",
        "preco_noite": 400,
        "localizacao": "Florianópolis, SC",      
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 15,
        "nome": "Loft moderno",
        "imagem": "loft_moderno_florianopolis.png",
        "preco_noite": 290,
        "localizacao": "Florianópolis, SC",      
        "quartos": 2,
        "pessoasmax": 4
    },

    {
        "id": 16,
        "nome": "Flat moderno",
        "imagem": "flat_moderno_curitiba.webp",
        "preco_noite": 270,
        "localizacao": "Curitiba, PR",      
        "quartos": 1,
        "pessoasmax": 2
    },
    {
        "id": 17,
        "nome": "Apartamento no Batel",
        "imagem": "apartamento_batel_curitiba.jpg",
        "preco_noite": 310,
        "localizacao": "Curitiba, PR",     
        "quartos": 3,
        "pessoasmax": 6
    },
    {
        "id": 18,
        "nome": "Casa com jardim",
        "imagem": "casa_jardim_curitiba.jpg",
        "preco_noite": 350,
        "localizacao": "Curitiba, PR",      
        "quartos": 3,
        "pessoasmax": 6
    }
]


@app.get("/acomodacoes")
def listar_acomodacoes():
    return{"Acomodações": acomodacoes}

@app.get("/acomodacoes/{id}")
def exibir_acomodacoes(id : int):
    for acomodacao in acomodacoes:
        if acomodacao["id"] == id:
            return acomodacao
        
        
@app.get("/acomodacoes/")
def buscar_por_cidade(cidade: str = Query(..., description="Nome da cidade para buscar acomodações")):
    # Decodifica manualmente a cidade
    cidade = unquote(cidade)
    print(f"Cidade decodificada: {cidade}")  # Para verificar no log

    resultado = [acomodacao for acomodacao in acomodacoes if acomodacao["localizacao"].split(",")[0].lower() == cidade.lower()]
    if not resultado:
        raise HTTPException(status_code=404, detail="Nenhuma acomodação encontrada para essa cidade")
    return {"acomodacoes": resultado}

    
{ 
  "acomodacoes": [
    {
      "id": 4,
      "nome": "Suíte luxuosa",
      "imagem": "https://via.placeholder.com/300",
      "preco_noite": 500,
      "localizacao": "Rio de Janeiro, RJ"
    }
  ]
}
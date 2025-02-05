from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from urllib.parse import unquote
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import json


from database import SessionLocal, engine
from models import Base, Acomodacao

app = FastAPI()

#esse trecho serve para corrigir erro de CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# cria a tabela se ela não existir
Base.metadata.create_all(bind=engine)

def get_db():

    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.on_event("startup")
def startup_populate_db():

    with open("dados_iniciais.json", "r", encoding="utf-8") as f:
        acomodacoes_iniciais = json.load(f)

    db = SessionLocal()
    try:
        for item in acomodacoes_iniciais:
            existe = db.query(Acomodacao).filter_by(id=item["id"]).first()
            if not existe:
                db.add(Acomodacao(**item))
        db.commit()
    finally:
        db.close()


@app.get("/acomodacoes")
def listar_acomodacoes(db: Session = Depends(get_db)):
 
    lista = db.query(Acomodacao).all()
    return {"Acomodações": lista}


@app.get("/acomodacoes/{id}")
def exibir_acomodacoes(id: int, db: Session = Depends(get_db)):

    acomodacao = db.query(Acomodacao).filter_by(id=id).first()
    if not acomodacao:
        raise HTTPException(status_code=404, detail="Acomodação não encontrada")
    return acomodacao


@app.get("/acomodacoes/")
def buscar_por_cidade(
    cidade: str = Query(..., description="Nome da cidade para buscar acomodações"),
    db: Session = Depends(get_db)
):

    cidade_decodificada = unquote(cidade)


    acomodacoes = db.query(Acomodacao).all()
    resultado = []
    for aco in acomodacoes:

        nome_cidade = aco.localizacao.split(",")[0].strip()
        if nome_cidade.lower() == cidade_decodificada.lower():
            resultado.append(aco)

    if not resultado:
        raise HTTPException(status_code=404, detail="Nenhuma acomodação encontrada para essa cidade")

    return {"acomodacoes": resultado}


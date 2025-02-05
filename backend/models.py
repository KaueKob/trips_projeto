from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Acomodacao(Base):
    __tablename__ = "acomodacoes"

    id = Column(Integer, primary_key=True, autoincrement=False)
    nome = Column(String(255), nullable=False)
    imagem = Column(String(255), nullable=False)
    preco_noite = Column(Float, nullable=False)
    localizacao = Column(String(255), nullable=False)
    quartos = Column(Integer, nullable=False)
    pessoasmax = Column(Integer, nullable=False)


"use client";
import { useState, useEffect } from "react";
import { NextResponse } from "next/server";
import { listaDeLivros } from "./api/route";

import Loading from "./Loading";
import Link from "next/link";
import styles from "./main.module.css";
import Image from "next/image";
import ServerError from "./ServerError";

export async function GET(req) {
  const id = parseInt(req.url.split('/api/')[1]);
  let objeto = null;
  listaDeLivros.forEach((obj) => {
    if (obj.id === id) {
      objeto = obj;
    }
  });
  return NextResponse.json(objeto);
}

export default function Main() {
  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setListProduct(data);
        setListComplete(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setIsError(true);
      }
    };
    getProduct();
  }, []);

  const search = (text) => {
    setTextSearch(text);
    // Se o texto que o usuário digitou estiver vazio, retornar a lista de produtos completa novamente
    if (text.trim() === "") {
      setListProduct(listComplete);
      return;
    }
    const newList = listComplete.filter((product) => {
      // Verifica se o título existe e é uma string antes de chamar toUpperCase()
      return (
        product.titulo &&
        typeof product.titulo === "string" &&
        product.titulo.toUpperCase().trim().includes(text.toUpperCase())
      );
    });
    setListProduct(newList);
  };

  if (isError) {
    return <ServerError />;
  }

  if (listComplete.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.filters}>
        <input
          type="text"
          value={textSearch}
          placeholder="Pesquise um produto"
          onChange={(event) => search(event.target.value)}
        />
      </div>

      <main className={styles.main}>
        {listProduct.map((produto) => (
          <div className={styles.card} key={produto.id}>
            <br />
            <Image
              src={produto.imagem}
              className={styles.imagem}
              alt={produto.titulo}
              width={150}
              height={200}
            />
            <h3>{produto.titulo}</h3>
            <p>{produto.autor}</p>
            <p>Data de publicação: {produto.anoPublicacao}</p>
            <p>Preço: ${produto.preco}</p>
            <p>Gênero: {produto.genero}</p>

            <Link href={"/product/" + produto.id}>
              <button class="button">Ver mais</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
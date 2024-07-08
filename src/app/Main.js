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
      objeto = obj; // Correção aqui
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
    if (text.trim() === "") {
      setListProduct(listComplete);
      return;
    }
    const newList = listComplete.filter((product) =>
      product.title.toUpperCase().trim().includes(text.toUpperCase())
    );
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
              src={produto.image}
              className={styles.image}
              alt={produto.title}
              width={150}
              height={150}
            />
            <h3>{produto.titulo}</h3>
            <p>{produto.autor}</p>
            <p>Data de publicação: {produto.anoPublicacao}</p>
            <p>Preço: ${produto.preco}</p>
            <p>Gênero: {produto.genero}</p>

            <Link href={"/product/" + produto.id}>
              <button>Ver mais</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
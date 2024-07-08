"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import Link from "next/link";
import styles from "./main.module.css";
import ServerError from "./ServerError";

export default function Main() {

    if(listComplete[0] == null){
      return <Spinner/>
    }
        return (
          <>
           <div className={styles.filters}>
          {/* campo de pesquisa */}
          <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event)=> search(event.target.value)}/>
        </div>

            <main className={styles.main}> 
        {listProduct.map((produto) => (
        <div class="card" className={styles.card} key={produto. id}>
         
          <br/>
        <img src={produto.image} className={styles.image} alt={produto.title} />

        <h3>{produto.titulo}</h3>
        <p>{produto.autor}</p>
        <p>data de publicação: {produto.anoPublicacao}</p>
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
      };
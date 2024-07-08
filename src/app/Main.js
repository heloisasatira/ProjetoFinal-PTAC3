"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "./Loading";
import Link from "next/link";
import styles from "./main.module.css";
import ServerError from "./ServerError";

export default function Main() {
    const [listProduct, setListProduct] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const [isError, setIsError] = useState(false);  

    useEffect(() => {
        const getProduct = async () => {
          try{
          const response = await fetch("https://localhost:3000/api");
          const data = await response.json();
          setListProduct(data);
          setListComplete(data);
          }
          catch{
            setIsError(true);
          }
        }
        getProduct();
      }, []);

      const search = (text) =>{
        setTextSearch(text);
      //se o texto que o usuário digitou estiver vazio, retornar a lista de produtos completa novamente
        if (text.trim() == ""){
          setListProduct(listComplete);
          return
        }
      const newList = listProduct.filter((product) => 
      product.title.toUpperCase().trim().includes(textSearch.toUpperCase())
      );
      setListProduct(newList);
    }
//caso o servidor esteja falhando, retornar o componente ServerError
    if(isError == true){
      return <ServerError/>
    }

    if(listComplete[0] == null){
      return <Loading/>
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
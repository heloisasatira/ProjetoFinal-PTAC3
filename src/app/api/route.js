import { NextResponse } from "next/server";

export const listaDeLivros = [
    {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/710RkdwVdaL._AC_UF1000,1000_QL80_.jpg",
        titulo: "O Anticristo",
        autor: "Friedrich Nietzsche",
        preco: 54,
        anoPublicacao: 1895,
        genero: "Filosofia"
    },
    {
        id: 2,
        imagem: "https://m.media-amazon.com/images/I/91AHNAr638L._AC_UF1000,1000_QL80_.jpg",
        titulo: "O Conto da Aia",
        autor: "Margaret Atwood",
        preco: 40.41,
        anoPublicacao: 1985,
        genero: "Distopia"
    },
    {
        id: 3,
        imagem: "https://m.media-amazon.com/images/I/719UtmEsIIL._AC_UF1000,1000_QL80_.jpg",
        titulo: "A Redoma de Vidro",
        autor: "Sylvia Plath",
        preco: 51.72,
        anoPublicacao: 1963,
        genero: "Drama"
    },
    {
        id: 4,
        imagem: "https://m.media-amazon.com/images/I/71hiWlcQceL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Água Viva",
        autor: "Clarice Lispector",
        preco: 29.92,
        anoPublicacao: 1973,
        genero: "Romance psicológico"
    },
    {
        id: 5,
        imagem: "https://m.media-amazon.com/images/I/41W1YrtPlyL.jpg",
        titulo: "O Peso do Pássaro Morto",
        autor: "Aline Bei",
        preco: 44,
        anoPublicacao: 2017,
        genero: "Poesia, romance contemporâneo"
    },
    {
        id: 6,
        imagem: "https://m.media-amazon.com/images/I/51xwoNdADeL.jpg",
        titulo: "A Depressão é uma Borboleta Azul",
        autor: "Sabrine Cantele",
        preco: 19.90,
        anoPublicacao: 2022,
        genero: "Poesia"
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}
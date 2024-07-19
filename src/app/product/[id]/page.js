export default async function Product({params}){

    const response = await fetch("http://localhost:3000/product/" + params.id); 
    const data = await response.json();
    
        return (
            <p>{data.id}</p>
        );
    }
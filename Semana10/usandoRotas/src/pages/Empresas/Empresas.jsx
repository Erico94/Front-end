import { useLocation } from "react-router-dom"


export default function Empresas(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // capturar um parameto:
    // searchParams.get('status')

    // capturar todos os parametros :
    searchParams.forEach((value,key)=>{
        console.log(`Value :${value}`);
        console.log(`Key : ${key}`);
    })

    return (
        <>
        <h1>Empresa </h1>
        </>
    )
}
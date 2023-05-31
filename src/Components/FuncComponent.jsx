// no hace falta importar la libreria de React porque no hay un componente suyo
//rafce
const FuncComponent = ({texto, amount}) =>{
    console.log(texto, amount);
    return(
        <>
        <h1>Este es el componente {texto}</h1>
        {amount*2}
        </>
    )
}
export default FuncComponent

 
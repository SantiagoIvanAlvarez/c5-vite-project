//rcc
import React, { Component } from "react"

const funcion = () =>{
    let a = '1'
    a = 'palabra'
    return a;
}


export default class ClassComponent extends Component{

    render(){
console.log(this.props);
        let {texto, amount} = this.props
        return(
            <>
            <h1>Este es un component de {texto}</h1>
            {amount}
            </>
        )

    }
}

export class OtroComponente extends Component{
    render(){
        return(
            <>
            <h1>Este es el otro componente de clase</h1>
            </>
        )
    }
}


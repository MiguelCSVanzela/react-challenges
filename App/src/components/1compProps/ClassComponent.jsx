// Componente 5 - Criando um componente de classe
import { Component } from "react";

class ClassComponent extends Component{
    render() {
        const {name, age} = this.props

        return(
            <>
            <h2>
                Nome: {name} <br/>
                Idade: {age}
            </h2>
            </>
        )
    }
}

export default ClassComponent
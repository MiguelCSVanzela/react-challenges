// Componente 3 - recebendo três props com tipos de dados diferentes

const ThreeProps = ({greeting, guests, hour}) => {
    return(
        <>
        <h2>{greeting}!, como vai?</h2>
        <h3>Os convidados são {guests.join(", ")}, que virão as {hour} em ponto.</h3>
        </>
    )
}

export default ThreeProps
//Componente 4 - renderizar uma lista de usuários


const MapProps = ({members}) => {
    return(
        <ul>
          {members.map((member) => {
            return(
                <li key={member.id}>
                    Nome: {member.name} e profissão: {member.profissao}
                </li>
            )
          })}
        </ul>
    )
}

export default MapProps
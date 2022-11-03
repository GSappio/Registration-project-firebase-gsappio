export default function Cabecalho(props) {
    // props é somente leitura!!
    // PROPS É SOMENTE PARA LEITURA!!!!!
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
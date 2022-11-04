import Layout from "../components/Layout"

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico() {
    return (
        <Layout titulo="Conteúdo Estatico">
                <div>{Math.random()}</div>
        </Layout>
    )

}
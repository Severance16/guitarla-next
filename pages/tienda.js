import Layaout from "@/components/layaout";
import Guitarra from "@/components/guitarra";
import styles from "@/styles/grid.module.css";

export default function Tienda({guitarras}) {

    return (
        <Layaout
            title={"Tienda Virtual"}
            description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>
                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layaout>
    )
}

// ----------- Hacer consultas a una api, solo se consulta cuando se hace el build ---------------

// export async function getStaticProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json()
//     return{
//         props: {
//             guitarras
//         }
//     }
// }

// --------------- Hacer consultas a un api, consulta constantemente ------------
export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()
    return {
        props: {
            guitarras
        }
    }
}
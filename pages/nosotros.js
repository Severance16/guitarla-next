import Image from "next/image";
import Layaout from "@/components/layaout";
import styles from "@/styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layaout
        title={"Nosotros"}
        description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Integer molestie elementum nibh a gravida. Proin quis purus mattis, porttitor neque nec, facilisis risus. Donec convallis molestie augue id commodo. Suspendisse potenti. Nulla commodo erat vitae urna vestibulum rhoncus. Donec vitae odio augue. Maecenas ac metus eget nisl sodales laoreet a ut dolor.
            </p>
            <p>
              Nulla risus metus, efficitur nec enim sed, consectetur volutpat ligula. Duis accumsan elementum auctor. Duis tempus pellentesque libero, eget facilisis quam molestie sed. Fusce ac aliquet nisi. Proin tincidunt molestie ipsum ut blandit. Aenean tincidunt id ligula ut pharetra.
            </p>
          </div>
        </div>
      </main>
    </Layaout>
  )
}

import Layaout from "@/components/layaout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layaout
        title="Página no encontrada"
    >
        <p className="error">Página no encontrada</p>
        <Link href='/' className="error-enlace">Ir a Inicio</Link>
    </Layaout>
  )
}

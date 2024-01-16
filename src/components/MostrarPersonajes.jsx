import {personajes} from '../utils/DataPersonaje'
import { CardPersonajes } from './CardPersonajes'

export const MostrarPersonajes = () => {

    return(
     <div className="container">

       <h1>Mi Primera Aplicación en REACT</h1>

       <div className='contenedorPersonajes'>

                {
                                personajes.map((personaje) => (
                                <CardPersonajes 
                                // nombre={personaje.nombre} 
                                //  estado={personaje.estado} 
                                // rango={personaje.rango} 
                                // aldea={personaje.aldea}

                                //poner la key cada ves que se hace un map sino sale error
                                
                                key={personaje.nombre}

                                //Con esto se envia todo y no uno en uno
                                {...personaje}
                                />

                            )  )
                }



       </div>
                
     </div>

    )


}
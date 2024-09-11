import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const API_URL = 'http://localhost:8080/tipos'


const NewTipo=()=>{
    const [nombre,setNombre] = useState('')
    const [descripcion,setDescripcion] = useState('')
    
    const navigate = useNavigate()
    
    const postear=(e)=>{
        
        e.preventDefault();
        
        let form = {
            nombre : nombre,
            descripcion : descripcion
        }

        axios.post(API_URL,form)
            .then(response=>{
                console.log('Posteado exitosamente: ',response)
                navigate("/tipos")
            })
            .catch(error=>{
                console.error("Error al consumir la API: ",error)
            })
    }

    return(
        <div className='m-5'>
            <a href="/tipos"><button className='btn btn-danger mb-4 mx-3'>Cancelar</button></a>
            <h1 className='mb-4'>Crear nuevo tipo:</h1>
            <form onSubmit={postear}>
                <label htmlFor="nombre">Nombre:</label>
                <input className='form-control mb-3' type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} />
                <label htmlFor="descripcion">Descripción:</label>
                <input className='form-control mb-3' type="text" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} />
                <button className='btn btn-success' type='submit'>Guardar</button>
            </form>
        </div>
    )
}
export default NewTipo;
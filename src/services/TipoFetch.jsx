import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8080/tipos'

const TipoFetch = () =>{
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(API_URL)
            .then(response=>{
                setData(response.data)
            })
            .catch(error =>{
                console.log('Ha ocurrido un error al consumir la API: ', error)
            })
    },[])

    return(
        <div className='m-5'>
            <div className='d-flex'>
                <a href="/login"><button className='btn btn-danger mx-3 shadow-sm'>Cerrar sesion</button></a>
                <a href="/newTipo"><button className='btn btn-warning mx-3 shadow-sm'>Crear tipo</button></a>
                <a href="/"><button className='btn btn-info mx-3 shadow-sm'>Ver especies</button></a>
            </div>
            <h1 className='mb-5 mt-4'>Lista de tipos:</h1>
            <div className='row'>
                {data.map(tipo=>(
                    <div className='col-6 my-4'>
                        <div className='bg-light shadow rounded-5 p-5'>
                        <h3>{tipo.nombre}</h3>
                        {tipo.descripcion &&(
                            <div>
                            <p className='m-0 p-0'><b>Descripcion:</b></p>
                            <p>{tipo.descripcion}</p>
                            </div>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TipoFetch;
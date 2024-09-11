import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:8080/especies'
const tipos = 'http://localhost:8080/tipos'

const Formulario = () =>{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [tiempoCrecimiento,setTiempoCrecimiento] = useState('');
    const [tipoespecie,setTipoespecie] = useState('');

    const handleSubmit = (e) =>{

        e.preventDefault();
        
        const newEspecie = {
            nombre: nombre,
            descripcion: descripcion,
            tiempoCrecimiento: tiempoCrecimiento,
            tipoespecie: {
                id: tipoespecie
            }
        }
        axios.post(API_URL,newEspecie)
            .then(response =>{
                console.log('Nueva especie creada: ',response.data);
                navigate('/');
            })
            .catch(error=>{
                console.log('Error al crear especie: ',error)
            });
    }

    useEffect(()=>{
        axios.get(tipos)
            .then(response=>{
                setData(response.data)
            })
            .catch(error=>{
                console.error("No se pudieron obtener los tipos: ",error)
            })
    },[])

    return(
        <div className='m-5'>
            <div>
                <a href="/"><button className='btn btn-danger mx-3'>Cancelar</button></a>
            </div>
            <div className="mt-4">
                <h1>Crear nueva especie:</h1>
                <form onSubmit={handleSubmit}>
                    <input className='form-control my-3' type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder='Nombre planta' />
                    <textarea className='form-control my-3' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} placeholder='Descripcion'>
                    </textarea>
                    <input className='form-control my-3' type="number" value={tiempoCrecimiento} onChange={(e)=>setTiempoCrecimiento(parseInt(e.target.value))}  placeholder='Tiempo de crecimiento'/>
                    <select className='form-control my-3' onChange={(e)=>setTipoespecie(parseInt(e.target.value))}>
                        {data.map(val=>(
                            <option value={val.id}>{val.nombre}</option>
                        ))}
                    </select>
                    <button className='btn btn-success' type='submit'>Guardar</button>
                </form>
            </div>
        </div>
    )
}
export default Formulario;
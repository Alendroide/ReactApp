import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:8080/especies'

const Formulario = () =>{
    const navigate = useNavigate();
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

    return(
        <div className='m-5'>
            <h1>Crear nueva especie:</h1>
            <form onSubmit={handleSubmit}>
                <input className='form-control my-3' type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder='Nombre planta' />
                <textarea className='form-control my-3' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} placeholder='Descripcion'>
                </textarea>
                <input className='form-control my-3' type="number" value={tiempoCrecimiento} onChange={(e)=>setTiempoCrecimiento(parseInt(e.target.value))}  placeholder='Tiempo de crecimiento'/>
                <input className='form-control my-3' type="number" value={tipoespecie} onChange={(e)=>setTipoespecie(parseInt(e.target.value))} placeholder='Tipo de especie' />
                <button className='btn btn-success' type='submit'>Guardar</button>
            </form>
        </div>
    )
}
export default Formulario;
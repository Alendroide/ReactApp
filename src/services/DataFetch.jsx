import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/especies'

const DataFetch = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(API_URL)
            .then(response=>{
                setData(response.data);
            })
            .catch(error=>{
                console.log(error);
            });
    },[]);

    return (
        <div className='m-5'>
            <div className='d-flex'>
                <a href="/login"><button className='btn btn-danger mx-3 shadow-sm'>Cerrar sesion</button></a>
                <a href="/new"><button className='btn btn-warning mx-3 shadow-sm'>Crear especie</button></a>
                <a href="/tipos"><button className='btn btn-info mx-3 shadow-sm'>Ver tipos</button></a>
            </div>
            <h1 className='my-4'>Datos obtenidos</h1>
                <div className='row w-100'>
                {data.map(item =>(
                    <div  key={item.id} className='col-lg-6 col-sm-12'>
                    <div className='my-4 p-5 bg-light rounded-4 w-100 shadow'>
                        <h4>{item.nombre}</h4>
                        
                        {item.descripcion && (
                         <p>{item.descripcion}</p>
                        )}
                        <p><b>Tiempo de crecimiento:</b> {item.tiempoCrecimiento} días</p>
                        <p><b>Tipo:</b> {item.tipoespecie.nombre}</p>

                    </div>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default DataFetch;
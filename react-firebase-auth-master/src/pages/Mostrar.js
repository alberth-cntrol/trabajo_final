import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap';
import Navbar from '../components/Navbar/Navbar';
export function Mostrar() {
  const [series, setSeries] = useState([]);
  const [pos, setPos] = useState(null);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8000/reconocimiento')
      .then(res => {
        console.log(res.data);
        setSeries(res.data);
      })
  })

  function mostrar(cod, Mostrar) {
    axios.get('http://localhost:8000/reconocimiento/' + cod)
      .then(res => {
        setPos(Mostrar);
        setId(res.data.id);
        setNombre(res.data.name);
        setFecha(res.data.release_date);
      })
  }
  return (
    <div>
      <Navbar/>
      <br/>
      <div className='container'>
        <table className='table'>
          <thead className='table-dark'>
            <tr>
              <th className='border border-solid border-2 border-green-600'>Codigo</th>
              <th className='border border-solid border-2 border-green-600'>Foto</th>
              <th className='border border-solid border-2 border-green-600'>Hora</th>

            </tr>
          </thead>
          <tbody>
            {series.map((serie, Mostrar) => {
              return (
                <tr key={serie.id}>
                  <td className='border border-solid border-2 border-green-600'>{serie.codigoReconocimiento}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.fotoReconocimiento}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.Hora}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>



  );
}

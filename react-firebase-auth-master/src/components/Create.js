import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import { async } from '@firebase/util'

const Create = () => {
    const [ Contraseña, setContraseña ] = useState('')
    const [ Modelo, setModelo ] = useState(0)
    const [ Serie, setSerie ] = useState('')
    const navigate = useNavigate()

    const CerradurasCollection = collection(db, 'Cerraduras')

    const store = async (e) => {
        e.preventDefault()
        await addDoc( CerradurasCollection, { Contraseña: Contraseña, Modelo: Modelo, Serie: Serie } )
        
    }

    return (
        <div><h1>Vista Crear</h1></div>
    )
}

export default Create

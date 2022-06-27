import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc} from "firebase/firestore"
import { db } from '../firebase'
import { async } from "@firebase/util"


const Show = () => {

    const [Cerraduras, setCerraduras] = useState( [] )

    const CerradurasCollection = collection(db, "Cerraduras")

    const getCerraduras = async () => {
        const data = await getDocs(CerradurasCollection)
        //console.log(data.docs)
        setCerraduras(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
        console.log(Cerraduras)
    }

    useEffect( () => {
        getCerraduras()
    }, [] )

    return (
        <div>Show</div>
    )
}

export default Show
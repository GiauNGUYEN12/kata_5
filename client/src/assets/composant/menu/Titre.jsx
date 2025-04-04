import '../../styles/Titre.css'
import { useState, useEffect } from 'react'

function Titre () {
    const [prenom, setPrenom] = useState(""); 
    useEffect(()=> {
    const getPrenom = async () => {
        const response = await fetch("http://localhost:3001/prenom")
        const data = await response.json();
        console.log(data)
        setPrenom(data[0].name); // Accéder au prénom dans le tableau
        console.log(data[0].name)
    }
    getPrenom();
}, [])   

    return (
        <div className="titreBody">
            <h1>Adalicious 🥦</h1>
            <h3>Bonjour {prenom}</h3>
        </div>
    )
}

export default Titre;
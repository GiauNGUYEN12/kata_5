import '../../styles/Acceuil.css'
import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Acceuil(){
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3001/client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({firstname})
        })
        const result = await res.json()
        console.log(result)
        setFirstname("")
    }
   
    return (
        <div className="acceuilBody"> 
             <div className='brocoli'> 🥦 </div>
            <h1> Bienvenue sur Adalicious </h1>
            <p> Pour commencer, peux-tu me donner ton prénom ! </p>
            <form className="formBody" onSubmit={handleSubmit}>
            <div className='inputBody'>
                <input 
                className='inputAccueil'
                type="text"
                placeholder="Entrez ton prénom..."
                value={firstname} //input affiche tjs la valeur actuelle de firstname
                onChange={(e)=>setFirstname(e.target.value)} //mettre à jour état
                />
            </div>
            <div className='buttonBody'>
                <button type="submit" className='buttonAcceuil'onClick={() => navigate(`/detail-menu`)} >Valider</button>
            </div>
            </form>
        </div>
    )
}

export default Acceuil; 
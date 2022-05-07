

import './style.css'
import user from '../../imagens/user.jpg';
import chef from '../../imagens/chef.jpg';
import { useEffect, useState } from 'react';

export function Sug () {
    const [sug, setsug] = useState([])

    const[limiUsers, setLimitUsers] = useState(5)

    const slice =sug.slice(0 ,limiUsers)


    useEffect (() => {
        fetch("https://api.github.com/users/gabrieldiasss/followers")

        .then ((Response) => {
            return Response.json()
        })
        .then((result) => {
            setsug(result)
        })
        .catch((err) => {
            throw new Error(err)
        })

      },[]);


    return(
        <>
        <div className="header-sug">

        <img className='img-user' src={user} alt='Perfil'/>

        <div className='user-infos-sug'>
            <div className='infos'>
                <span> heey_niik</span>
                 <p> Nicolly Gabriele</p>
            </div>

                <button className="switch">Mudar</button>

             </div>
        </div>

        <div className="header-main-sug">
            <p> Sugestões para você</p>

            <span> Ver tudo  </span>
        </div>

        <div className="user-sug">

            {slice.map ((sug, key) => (
                <div className="infos-sug" key={key}>
               < img  src={`https://github.com/${sug.login}.png`} />
                
                


                <div className="info-sug">
                    <span>{sug.login}</span>
                    <p>Seguido por jennifer,Lorraine e mais 3</p>
                </div>

                <button className="follow"> Seguir </button>

                </div>
           ))}

            
     </div>
            


        <footer className="footer-sug">
            <p>Sobre &bull; Ajuda Imprensa &bull;API &bull;Carreiras &bull;Privacidade &bull;TermosLocalizações&bull;Principais contas &bull;Hashtags &bull; Idioma
                Português (Brasil)</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>


        </footer>


        
        </>

    );

};

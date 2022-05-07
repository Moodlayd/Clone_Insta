import './style.css'


import {FiMoreHorizontal} from'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile} from 'react-icons/bs'
import{FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons'
import João from"../../imagens/João.jpg";
import pub2 from"../../imagens/pub2.jpg";
import daniper from"../../imagens/dani.jpeg";
import Pub3 from"../../imagens/Pub3.jpeg";

export function Post () {
    return (
        <>
          <header className='header-post'>
                <div className='infos-post'>

                <img className='img-header-post'  src=' https://cdn.discordapp.com/attachments/969735812533088296/972200145884184596/IMG_20220422_132255_603.jpg' alt='Imagem de perfil'/>
               
                <p>Larissa Azevedo</p>
                </div>
        <FiMoreHorizontal />

       
          </header>
        
        <div className='img-post'>

          <img src='https://cdn.discordapp.com/attachments/969735812533088296/972199959275376640/20220503_131159.jpg'/>
        </div>

        <div className='footer-post'>

          <IconContext.Provider value={{size:"30px"}}>
          <section className='engajament-post'>
            <div className='icons-1'>
               <div className='icon'><IoMdHeartEmpty/></div>
               <div className='icon'><BsChat/></div>
               <div className='icon'><FiSend/></div>
               
            </div>
            <div className='icon'><BsBookmark/></div>
            
          </section>
         </IconContext.Provider>

        <section className="like">

          <p> 80 curtidas</p>

        </section>

        <div className='legenda'>
            <p>
              <strong>Larissa Azevedo</strong> Muito feliz em fazer novas amizades!
            </p>

            <div className='time-post'>
              <time>
                HÁ 30 MINUTOS 
              </time>
            </div>

            <div className='comment'>

              <div className='fake-comment'>

                <IconContext.Provider value={{size:"25px"}}>
                 <div className='icon'>
                 <BsEmojiSmile/>
                 </div>

                 </IconContext.Provider>

                 <input placeholder="Adicione um comentário..."/>
                 
                 </div>

                 <button>Publicar</button>

                 

              </div>
            </div>
        </div>

        <header className='header-post'>
                <div className='infos-post'>

                <img className='img-header-post'  src={João} alt='Imagem de perfil'/>
               
                <p> João Conrado</p>
                </div>
            <FiMoreHorizontal />
       
          </header>

          <div className='img-post'>

<img src={pub2}/>
</div>

<div className='footer-post'>

<IconContext.Provider value={{size:"30px"}}>
<section className='engajament-post'>
  <div className='icons-1'>
     <div className='icon'><IoMdHeartEmpty/></div>
     <div className='icon'><BsChat/></div>
     <div className='icon'><FiSend/></div>
     
  </div>
  <div className='icon'><BsBookmark/></div>
  
</section>
</IconContext.Provider>

<section className="like">

<p> 72 curtidas</p>

</section>

<div className='legenda'>
  <p>
    <strong>João Conrado</strong> A mente é fértil, para sonhar não tem limite.
  </p>

  <div className='time-post'>
    <time>
      HÁ 1 HORA
    </time>
  </div>

  <div className='comment'>

    <div className='fake-comment'>

      <IconContext.Provider value={{size:"25px"}}>
       <div className='icon'>
       <BsEmojiSmile/>
       </div>

       </IconContext.Provider>

       <input placeholder="Adicione um comentário..."/>
       
       </div>

       <button>Publicar</button>

       

    </div>
  </div>
</div>

          <header className='header-post'>
                <div className='infos-post'>

                <img className='img-header-post'  src={daniper} alt='Imagem de perfil'/>
               
                <p> Daniele Simões</p>
                </div>
            <FiMoreHorizontal />
       
          </header>

          <div className='img-post'>

<img src={Pub3}/>
</div>

<div className='footer-post'>

<IconContext.Provider value={{size:"30px"}}>
<section className='engajament-post'>
  <div className='icons-1'>
     <div className='icon'><IoMdHeartEmpty/></div>
     <div className='icon'><BsChat/></div>
     <div className='icon'><FiSend/></div>
     
  </div>
  <div className='icon'><BsBookmark/></div>
  
</section>
</IconContext.Provider>

<section className="like">

<p> 85 curtidas</p>

</section>

<div className='legenda'>
  <p>
    <strong>Daniele Simões</strong> Mais de novos ensinamentos e novas amizades!
  </p>

  <div className='time-post'>
    <time>
      HÁ 3 HORAS
    </time>
  </div>

  <div className='comment'>

    <div className='fake-comment'>

      <IconContext.Provider value={{size:"25px"}}>
       <div className='icon'>
       <BsEmojiSmile/>
       </div>

       </IconContext.Provider>

       <input placeholder="Adicione um comentário..."/>
       
       </div>

       <button>Publicar</button>

       

    </div>
  </div>
</div>

        




       
        




        </>
    )
}
import './style.css'
import user from "../../imagens/user.jpg"
import ProaSt from"../../imagens/ProaSt.png";
import Lua from"../../imagens/Lua.jpeg";
import Cris from"../../imagens/Cris.jpeg";
import Suzy from"../../imagens/Suzy.jpeg";
import Lari from"../../imagens/Lari.jpg";
import Gab from"../../imagens/Gab.jpg";
import João from"../../imagens/João.jpg";

export function Story (){
    return (

        <div className="container">

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={user} alt="ProaS"/>
                </div>

                <span>Seu story</span>

                </div>

            <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={ProaSt} alt="ProaS"/>
                </div>

                <span>PROA</span>

            </div>
         
            <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={Lua} alt="Luana"/>
                </div>

                <span>Luana</span>

                </div>

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={Cris} alt="Christian"/>
                </div>

                <span>Christian</span>

                </div>

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={Suzy} alt="Suzy"/>
                </div>

                <span>Suzy</span>

                </div>

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={Lari} alt="Larissa"/>
                </div>

                <span>Larissa</span>

                </div>

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={Gab} alt="Gabriel"/>
                </div>

                <span>Gabriel</span>

                </div>

                <div className="user-elements" >

                <div>

                    <img className="image-user-story"src={João} alt="ProaS"/>
                </div>

                <span>João</span>

                </div>

        </div>
    )
}
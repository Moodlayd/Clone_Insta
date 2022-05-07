
import { Post } from '../post';
import { Story } from '../story';
import { Sug } from '../sug';
import './post.css'



 function Layout() {

    return(
      <>

         <div className="MainGrid">

            <div className="first-Column" style={{gridArea:"firstColumn"}}>
               <div className="box">
                  <Story/>
                  </div>

                

                  <div className="box"   style={{margin: "30px 0"}}>
                  <Post/> 
                  </div>

            </div>

        

            <div  style ={{gridArea:"secondColumn"}}>
             <div className="sugestãoBox"  >
            <Sug/>
         </div>

         </div>


          </div>

      </>

     
    )
}

export default Layout;
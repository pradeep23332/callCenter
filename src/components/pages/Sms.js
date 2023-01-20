import React from 'react';
import '../../App.css';
import "../sms.css";


export default function Sms() {
  return(
    <>
  
    <div className="all4">
       <br/>
       <h2 style={{marginLeft:"750px" , color:"purple"}}>SMS</h2>
       </div>

      
       <div className="box125">
           <br/>
           <div className="trangle48"style={{marginLeft:"200px", marginTop:"10px"}}>
              <div className="s1">
              </div>
              
              <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/receivedm" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Received Messages</a></button>
              
           </div>
           <br/>

           <div className="trangle49"style={{marginLeft:"200px"}}>
                <div className="s2">
                 </div>
                 
                 <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/sentm" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Sent Messages</a></button>
           </div>
           <br/>


           <div className="trangle50"style={{marginLeft:"200px"}}>
                  <div className="s3">
                 </div>
                 
                 <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/hotsetting" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Hotline Settings</a></button>
           </div>
           <br/>

           <div className="trangle51"style={{marginLeft:"200px"}}>
                  <div className="s4">
                  </div>
                  <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/sendmes" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Send Messages</a></button>
                  
           </div>
           <br/>


        </div>

        <div className="loop3">
           
        </div>







    </>

  ) ;
}

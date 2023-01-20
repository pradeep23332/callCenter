import React from 'react';
import '../../App.css';
import "../status.css";

export default function AgentStatusLog() {
  return (
    <>
       <div className="all3">
        <br/>
       <h2 style={{marginLeft:"750px" , color:"purple"}}>Agent Status Log</h2>
       </div>

       <div className="box115">
         <form  style={{marginLeft:"30px"}}>
         <br/>

         <div class="form-group" style={{marginLeft:"10px",marginTop:"-30px"}}>
            <label>From 
            <input type="date" class="form-control"name="date" /></label>
          </div>
           <br/><br/>

           <div class="form-group" style={{marginLeft:"10px",marginTop:"-16px"}}>
            <label>To 
            <input type="date" class="form-control"name="date" /></label>
          </div>
          
          <br/><br/>
          <div class="form-group"style={{marginLeft:"10px",marginTop:"-14px"}}>
            <label>Agent 
            <input type="text" class="form-control"name="text" />
            </label>
          </div>

         <br/>

          <div class="form-group"style={{marginLeft:"10px",marginTop:"13px"}}>
            <label>Callerld 
            <input type="text" class="form-control"name="text" />
            </label>
          </div>
          <br/><br/>

          <div className="drop" style={{marginLeft:"290px",marginTop:"-60px",}}>
            <select style={{width:"80px",borderRadius:"10px"}}>
              <option value="All">All</option>
              <option value="#01">#01</option>
              <option value="#02">#02</option>
            </select>
          </div>

           <button type="button" style={{marginLeft:"400px",marginTop:"-290px"}} class="btn btn-primary">Search</button><br/>
           <button type="button"  style={{marginLeft:"400px", marginTop:"-240px"}}class="btn btn-success">Export</button>
           
         </form>

      </div>

      <div className="loop2">
           
      </div>

      <div className = "rectangle37">
    <table class="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Agent</th>
      <th scope="col">Queue </th>
      <th scope="col">Status</th>
      <th scope="col">CLI </th>
      <th scope="col">Priority</th>
      <th scope="col">Action</th>
      <th scope="col">Type </th>
      <th scope="col">Time </th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>71455</td>
      <td>715644</td>
      <td>31</td>
      <td>7</td>
      <td>CALL_COMPLETED</td>
      <td>1000121</td>
      <td>2022-11-23 10:05:36 </td>
     
    </tr>

   

    

    
  </tbody>
</table>
</div>
   </>
  );
}

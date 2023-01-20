import React from 'react';
import '../../App.css';
import "../stat.css";

export default function Statistics() {
  return (
  <>
  <div className="all1">
  <br/>
       <h2 style={{marginLeft:"750px" , color:"purple"}}>Statistics</h2>

      
   </div>

   <div className="box1">
         <form  style={{marginLeft:"30px"}}>
         <div class="form-group" style={{marginLeft:"10px"}}>
            <label>Date  
            <input type="date" class="form-control"name="date" /></label>
          </div>
          <br/><br/>
          <div class="form-group"style={{marginLeft:"10px"}}>
            <label>Hotline  
            <input type="text" class="form-control"name="text" />
            </label>
          </div>


          <div className="drop" style={{marginLeft:"300px",marginTop:"-10px"}}>
            <select style={{width:"80px"}}>
              <option value="All">All</option>
              <option value="#01">#01</option>
              <option value="#02">#02</option>
            </select>
          </div>

          <br/>

           <div className="drop2"  style={{marginTop:"-10px", marginLeft:"20px"}}>
             <lable>Action</lable>&nbsp;&nbsp;
             <select>
              <option value="Hourly">Hourly</option>
              <option value="#01">#01</option>
              <option value="#02">#02</option>
            </select>

           </div>
          
           <button type="button" style={{marginLeft:"400px",marginTop:"-190px"}} class="btn btn-primary">Search</button><br/>
           <button type="button"  style={{marginLeft:"400px", marginTop:"-160px"}}class="btn btn-success">Export</button>
           
         </form>
    </div>


    



  <div className = "rectangle33">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Received</th>
      <th scope="col">Answered</th>
      <th scope="col">Caller Exited</th>
      <th scope="col">Answer Rate</th>
      <th scope="col">Total Hold Time(Min)</th>
      <th scope="col">Average Hold Time(sec)</th>
      <th scope="col">Total Call Time (min)</th>
      <th scope="col">Average Call Time (secs)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>

    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>

    

    
  </tbody>
</table>
</div>
<div className="box12">
         
       
  
    </div>
  </>
  );
}


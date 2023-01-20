import React from 'react';
import '../../App.css';
import "../callog.css";

export default function CallLog() {
  return (
  <>
  <div className="all2">
  <br/>
       <h2 style={{marginLeft:"750px" , color:"purple"}}>Call log</h2>



  </div>

  <div className="box112">
         <form  style={{marginLeft:"30px"}}>
         <br/>
         <div class="form-group" style={{marginLeft:"10px",marginTop:"-30px"}}>
            <label>From 
            <input type="date" class="form-control"name="date" /></label>
          </div>
           <br/><br/>
           <div class="form-group" style={{marginLeft:"360px",marginTop:"-106px"}}>
            <label>To 
            <input type="date" class="form-control"name="date" /></label>
          </div>
          



          <br/><br/>
          <div class="form-group"style={{marginLeft:"10px"}}>
            <label>Agent 
            <input type="text" class="form-control"name="text" />
            </label>
          </div>

          <div class="form-group"style={{marginLeft:"360px",marginTop:"-60px"}}>
            <label>Callerld 
            <input type="text" class="form-control"name="text" />
            </label>
          </div>
          <br/><br/>

          <div class="form-group"style={{marginLeft:"10px",marginTop:"-10px"}}>
            <label>Queue
            <input type="text" class="form-control"name="text" />
            </label>
          </div>
          <br/><br/>

          <div className="drop" style={{marginLeft:"280px",marginTop:"-60px",}}>
            <select style={{width:"80px",borderRadius:"10px"}}>
              <option value="All">All</option>
              <option value="#01">#01</option>
              <option value="#02">#02</option>
            </select>
          </div>

          <br/>

           <div className="drop2"  style={{marginTop:"-80px", marginLeft:"390px"}}>
             <lable>Events</lable>&nbsp;&nbsp;
             <select>
              <option value="#0">0111112354</option>
              <option value="#01">#01</option>
              <option value="#02">#02</option>
            </select>

           </div>
          

          <div class="form-check">
          <label class="form-check-label" for="exampleCheck1"style={{marginLeft:"-6px",marginTop:"22px"}}>Show Recordings</label>
          <input type="checkbox" class="form-check-input" style={{marginTop:"25px",marginLeft:"9px"}}id="exampleCheck1"/>
          </div>
           <br/>

           <button type="button" style={{marginLeft:"300px",marginTop:"-100px"}} class="btn btn-primary">Search</button><br/>
           <button type="button"  style={{marginLeft:"500px", marginTop:"-145px"}}class="btn btn-success">Export</button>
           
         </form>

      </div>

      <div className="loop">
           
      </div>

      <div className = "rectangle43">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Agent</th>
      <th scope="col">CallerID</th>
      <th scope="col">Call Time (s)</th>
      <th scope="col">Hold Time (s)</th>
      <th scope="col">Event</th>
      <th scope="col">Queue Name</th>
      <th scope="col">Start Time </th>
      <th scope="col">End Time </th>
      <th scope="col">Total Time (s) </th>
      
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
      <td>2022-11-23 10:05:36 </td>
      <td>2022-11-23 10:05:36 </td>
    </tr>

   

    

    
  </tbody>
</table>
</div>


  </>
  );
}

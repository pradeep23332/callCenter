import React from 'react';
import '../../App.css';
import "../calla.css";

export default function CallAgents() {
  return (
    <>
    <br/>
    <br/>
    <h2> Call Agent Pool</h2>

    <div className="rectangle109">
    <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Alias</th>
      <th scope="col">MSISDN</th>
      <th scope="col">Outgoing CLI </th>
      <th scope="col">Assigned Hotlines</th>
      <th scope="col">Assigned Queues </th>
      <th scope="col">Logged in Queues</th>
      <th scope="col">#</th>
      
    </tr>
   </thead>
   <tbody>
    <tr>
      <th scope="row">0714521452</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> 
        <div class="form-group col-md-7">
          <input type="text" class="form-control"/>
        </div>
        <td><button type="button" class="btn btn-success btn-sm">save</button></td>
      </td>
     
      <td>Mark</td>
      <td>Otto</td>
      <td><button type="button" class="btn btn-primary">Goto Profile</button></td>
      
    </tr>

    <tr>
      <th scope="row">0704521452</th>
      <td>M</td>
      <td>O</td>
      <td> 
        <div class="form-group col-md-7">
          <input type="text" class="form-control"/>
        </div>
        <td><button type="button" class="btn btn-success btn-sm">save</button></td>
      </td>
     
      <td>k</td>
      <td>O</td>
      <td><button type="button" class="btn btn-primary">Goto Profile</button></td>
      
    </tr>
   
  </tbody>
</table>
</div>

    
    
      

      
      
  
  
      
    </>
  );
}
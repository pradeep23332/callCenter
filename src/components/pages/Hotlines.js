import React from 'react';
import '../../App.css';
import "../hotline.css";


export default function Hotlines() {
  return (
    <>
    <div className="rectangle2">
      <br/>
      
    <button type="button" style={{marginLeft:"40px",height:"60px"}}class="btn btn-outline-primary"><a href="http://localhost:3000/" style={{textDecoration:"none",color:"white",fontSize:"30px"}}> Hotlines </a></button>
    <br/><br/>
    <button type="button" style={{marginLeft:"40px", height:"60px"}}class="btn btn-secondary"><a href="http://localhost:3000/allhotline" style={{textDecoration:"none",color:"white",fontSize:"18px"}}> Show All Hotlines</a></button>
    </div>

    <div className = "rectangle3">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Hotline</th>
      <th scope="col">Total Queue_</th>
      <th scope="col">Total Agents</th>
      <th scope="col">Go to Profile</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button type="button" class="btn btn-primary">Goto Profile</button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button type="button" class="btn btn-primary">Goto Profile</button></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><button type="button" class="btn btn-primary">Goto Profile</button></td>
      
    </tr>
  </tbody>
</table>
</div>


    
      

      
      
  
  
      
    </>
  );
}

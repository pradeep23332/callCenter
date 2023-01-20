import React from 'react';
import "../allhot.css";
export default function Allhotline() {
  return (
    <>
    
    <div className="rectangle10">
        <br/>
    <button type="button" style={{marginLeft:"40px",height:"60px"}}class="btn btn-outline-primary"><a href="http://localhost:3000/" style={{textDecoration:"none",color:"white",fontSize:"30px"}}> Hotlines </a></button>
    </div>

    <br/>
    <h2 style={{marginLeft:"50px"}}>ALL HOTLINES</h2>
    <br/><br/>

    <div className="rec34">
    <button type="button" style={{marginLeft:"540px", width:"800px" , height:"40px"}}class="btn btn-primary btn-lg btn-block" >hotline1</button><br/><br/>
     
    <div className = "rectangle8">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Agents</th>
      <th scope="col">Status</th>
      <th scope="col">CLI</th>
      <th scope="col">Priority</th>
      <th scope="col">Queue_(Rec)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
</div>

    </div>

    <div className="rec35">
    <button type="button" style={{marginLeft:"540px", width:"800px" , height:"40px", marginTop:"350px"}}class="btn btn-primary btn-lg btn-block" >hotline2</button><br/><br/>
          
    <div className = "rectangle8">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Agents</th>
      <th scope="col">Status</th>
      <th scope="col">CLI</th>
      <th scope="col">Priority</th>
      <th scope="col">Queue_(Rec)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
</div>

    </div>
    </>
  );
}

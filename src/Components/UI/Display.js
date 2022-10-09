import React from 'react'

function Display(props) {
  console.log(props.passData);
  return (
    
   <div>
     <div className="container mt-5">
      <div className="card" >
          <ul className="list-group list-group-flush"> 
                    {
                      
      props.passData.map(item =>
          
        <div>
        <li>
          {item.name}
        </li>
        <li>
          {item.name}
        </li>
        <li>
          {item.name}
        </li>
        </div>
        
        )
     
  }  
 
        
          </ul>
      </div>
      </div>

 </div>
    
  )
}

export default Display

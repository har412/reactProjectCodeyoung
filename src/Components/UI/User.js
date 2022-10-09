import React, { useState } from 'react'

import { Link } from 'react-router-dom';
function user(props) {
     const [userDataName,setUserName]=useState('');
     const [userDataAge,setUserAge]=useState('');
    
    function submitHandler(e) {
        e.preventDefault();
         var data={
            "Name":userDataName,
            "Age":userDataAge
        }
        console.log(props);

        props.dataHandler(data);
        
    }
    function nameHandler(e){
        setUserName(e.target.value); 
        // console.log(userDataName);
    }
    function ageHandler(e){
        setUserAge(e.target.value); 
        // console.log(userDataAge);
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5 ">
                    <form action="" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlfor="exampleFormControlInput1" class="form-label ">Username</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={nameHandler} placeholder="Enter your Name"></input>
                    </div>
                    <div class="mb-3">
                        <label htmlfor="exampleFormControlTextarea1" class="form-label">Age</label>
                        <input type="number" class="form-control"  onChange={ageHandler} id="exampleFormControlTextarea1" placeholder="Enter your Age"></input>
                    </div>
                    <input type="Submit" name="submit" id="submit" />
                  
                    </form>

                   
                    
                </div>
            </div>
        </div>
    )
}

export default user

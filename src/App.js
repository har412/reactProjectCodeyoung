
import { useState } from 'react';
import './App.css';
import Display from './Components/UI/Display';
import User from "./Components/UI/User";
import { BrowserRouter as Router,Routes ,Route, Link} from "react-router-dom";
import Home from './Components/UI/Home';
import Navbar from './Components/UI/Navbar';
import HoverText from './HoverText';


function App() {
  var initial=[{
"Name":"Harkirat Singh",
"age":23
  },
  {
    "Name":"garry",
    "age":27
      }

];
  const [arr,setArr]=useState(initial);
  const [usedata,setData]=useState('');
    // console.log(usedata);
  function dataHandler(data)
{
  setData(data);
  
}  
const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div className='hoverDiv' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      
    </div>
  );
};


const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
  <Router>
     <Navbar></Navbar>
    {/* <User dataHandler={dataHandler}>Hello</User> */}
    {/* <Display passData={arr} ></Display> */}
    <Routes>
      {/* <Route path='/' exact element={<User dataHandler={dataHandler}>Hello</User>}></Route> */}
      <Route path='/profile' element={<Home></Home>}></Route>
      <Route path='/adventure' element={<Home></Home>}></Route>
    </Routes>
  
  {/* <Display passData={arr}></Display> */}
   
   <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText/>}
   
   

    </Router>
    </div>
  );
}

export default App;

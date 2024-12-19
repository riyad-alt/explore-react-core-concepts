
import './App.css'
import Count from './Count'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button click')
  }
  const handleClick2=()=>{
    alert('button click 2')
  }

  const addToFive=(num) =>{
    alert(num+5);
  }


  return (
    <>
      
      <h3> React core concepts2</h3>
      <Friends></Friends>

  <Team></Team>
  <Users></Users>
 

  <Count></Count>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third click on')}}>third click</button>
      <br/>
    <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App

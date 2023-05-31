import './App.css'
import ClassComponent, {OtroComponente} from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
function App() {


  return (
    <>
    <OtroComponente/>
    <ClassComponent texto='clase' amount={1000}/>
    <FuncComponent texto='funcion nº 1' amount={150000}/>
    <FuncComponent texto='funcion nº 2' amount={300000}/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ButtonCSSProperties from './components/ButtonCSSProperties'
import ButtonChildren from './components/ButtonChildren'
import ButtonFunctionProp from './components/ButtonFunctionProp'
import ButtonImproved from './components/ButtonImproved'
import ButtonOptionalValues from './components/ButtonOptionalValues'
import ButtonState from './components/ButtonState'
import ButtonMap from './components/ButtonMap'
import ButtonAnyPair from './components/ButtonAnyPair'
import Form from './components/Form'

function App() {

  //ButtonState 
  /* const [count, setCount] = useState(0) */


  //ButtonFunctionProp
  /* function onClickFunction() {
    console.log("hallo")
  } */

  return (
    <>
      {/* <Button backgroundColor={'red'} title={"4"} fontSize={'2rem'} /><br />
      <ButtonImproved backgroundColor='blue' title={'better'} fontSize='1rem' /><br />
      <ButtonOptionalValues backgroundColor={'red'} title={'Optional Button'} fontSize={'1rem'} fontColor="red" /><br />
      {/* <ButtonMultipleValues backgroundColor='blue' fontColor='yellow' fontSize='1.5rem' padding={[10, 20, 30]} title='Multiple' /> <br/>
      <ButtonCSSProperties style={{ backgroundColor: "red" }} title='CSS Properties' /><br />
      <ButtonFunctionProp style={{ backgroundColor: "brown", fontSize: "1.5rem" }} title='function' onClick={onClickFunction} /> <br />

      <ButtonChildren style={{ backgroundColor: "red" }} >
        <h5>hallo aus wrap</h5>
        <h5>hallo aus wrap</h5>
      </ButtonChildren><br />

      <ButtonState style={{ backgroundColor: "red" }} title='State' setCount={setCount} /><br />
      {count}<br/>
      <ButtonMap/><br/>
      <ButtonAnyPair/><br/> */}
      <Form/>


    </>
  )
}

export default App

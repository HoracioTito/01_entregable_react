
import './css/style.css'
import jsonFraces from './jsons/jsonFraces.json'
import { useState } from 'react'
import './App.css'
import Phrase from './component/Phrase'
import Footer from './component/Footer'


const arrColor=[
  '#ff6961',
  '#77dd77',
  '#fdfd96',
  '#84b6f4',
  '#fdcae1'
]
function App() {

  /* Load random Phrase */
  const iniInd = Math.floor( Math.random() * jsonFraces.length)

  /* Var index array json */
  const [ind, setInd] = useState(iniInd)
  const [img1, setImg] = useState("https://picsum.photos/200")

  /* Change phrase , function */
  const changePhrase= () =>{
     
     let rndInd = Math.floor( Math.random() * jsonFraces.length)
     setInd(rndInd)

     setImg( `https://picsum.photos/200?${rndInd}`)

  }
  
  /* Colors body and text  */
  let color = arrColor[ Math.floor( Math.random() * arrColor.length)]

  document.body.style.background=`${color}`

   

  return (
    <div className="App">

      <div className="content"> 

        <div className='card'  style={{color : color}} >

          <Phrase  phase={jsonFraces[ind].quote} />
          
          <Footer  author={jsonFraces[ind].author} color={color} fnChangePhrase={changePhrase}  img_rnd={img1} />

          
        </div>

      </div>


    </div>
  )
}

export default App

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
  
function App() {
  return (
    <>
    <Suspense fallback={<h5>Data is loading...</h5>}>
         <Countries countriesPromise ={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App

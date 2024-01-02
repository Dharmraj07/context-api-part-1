import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'

const App = () => {
  return (
    
       <div className='App'>
        {/* <h1>Context API</h1> */}
        <Cart />
        <hr/>
        <Item name="MacBook Pro" price={500000} />
        <Item name="iPhone 13" price={100000} />
        <Item name="iPad Air" price={60000} />
        <Item name="Apple Watch" price={30000} />
        <Item name="AirPods Pro" price={15000} />
      </div>
    
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

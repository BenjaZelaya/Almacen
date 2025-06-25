import { Routes, Route } from 'react-router-dom'
import Homepage from './Page/Homepage.jsx'
import SobreNosotros from './Page/SobreNosotros.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </>
  )
}

export default App


import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import ContactFormComponent from './components/contact_form.component'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <ContactFormComponent />
      </div>
    </div>
  )
}

export default App

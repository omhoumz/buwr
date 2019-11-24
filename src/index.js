import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Job boards</h1>
      <h2>
        Start editing to see some <code>code</code> happen!
      </h2>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

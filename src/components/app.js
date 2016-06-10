
import React from "react"

export default class App extends React.Component {
  render () {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1>
          Bright, spacious studio in the heart of Mile End
        </h1>

        <p>
          Share a space with 3 friendly, nerdy creative professionals.
        </p>

        <p>
          Located at the corner of Saint Laurent & Saint Viateur.
        </p>

        <p>
          $500/m for a space large enough to comfortably fit 2.
        </p>

        <p>
          Email James: <a href="mailto:j@presstube.com">j@presstube.com</a>, or phone Luc: 514.424.2363.
        </p>

        <div>
          <img src="assets/corner.jpg"/>
        </div>
        <div>
          <img src="assets/kitchen.jpg"/>
        </div>
        <div>
          <img src="assets/center.jpg"/>
        </div>
        <div>
          <img src="assets/exterior.jpg"/>
        </div>
        <div>
          <img src="assets/exterior-corner.jpg"/>
        </div>
      </div>
    )
  }
}

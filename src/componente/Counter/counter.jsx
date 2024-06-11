import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    console.log("Construindo a classe Counter!");
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button>Diminuir</button>
        <button>Aumentar</button>
      </div>
    );
  }
}
//parei o video 31:18

import React from "react"
import contatoStyles from "../styles/contato.module.scss"

export default ({ children }) => (
  <div className={contatoStyles.contato} id='contato'>
    <div className={contatoStyles.container}>
      <h1 className={contatoStyles.titulo}>Contato <span></span></h1>
      <div>
        <h2 className={contatoStyles.subtitulo}>Endereço</h2>
        <p>Av. Pasteur, 250 - Fundos <br></br>
        Praia Vermelha - Urca <br></br>
        Rio de Janeiro - RJ <br></br>
        CEP: 22.290-902</p>
      </div>
      <div>
        <h2 className={contatoStyles.subtitulo}>Telefones</h2>
        <p>(21) 3938-5067<br></br>
        (21) 3938-5067</p>
      </div>
      <div>
        <h2 className={contatoStyles.subtitulo}>E-mail</h2>
        <p><a href="mailto:faleconosco@eco.ufrj.br">faleconosco@eco.ufrj.br</a></p>
      </div>
    </div>
  </div>
)
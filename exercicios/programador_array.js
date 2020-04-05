const programador = {
  nome: 'Marta',
  idade: '25',
  tecnologias : [
    {
      nome:'C ++',
      especialidade:'Desktop',  
    },
    {
      nome:'Phyton',
      especialidade:'Data Sience',
    },
    {
      nome:'JavaScrip',
      especialidade:'Web / Mobile',
    }
  ]  
}
console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e utiliza a 
  tecnologia ${programador.tecnologias[0].nome} com especialidade em 
   ${programador.tecnologias[0].especialidade}.`)

// console.log(programador.tecnologias[0].nome);
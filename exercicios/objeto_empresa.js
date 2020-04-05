const usuario = {
  nome : 'Marcela',
  empresa : {
    nome:'RocketSeat',
    endereco: 'Rua Miguel Atonio',
    num: '321',
    bairro: 'Imajara',
    cor: 'roxo',
    foco: 'Programacao'
    }
  }

console.log(`A empresa ${usuario.empresa.nome}, esta localizada na 
  ${usuario.empresa.endereco}, ${usuario.empresa.num}, 
  no Bairro ${usuario.empresa.bairro}`);
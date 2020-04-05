const nome = ' Virgilio';
const genero = 'masculino';
const idade = '100';
const contribuicao = '35';

const soma = idade +contribuicao;

if (genero == 'feminino') {
  if (contribuicao >=30){
    console.log(`${nome}, voce ja pode se aposentar!`);
  }else{
    if (soma>=85) {
      console.log(`${nome}, voce ja pode se aposentar!`);
    }
  console.log(`${nome}, voce nao pode se aposentar ainda.`);
  }
}

if (genero == 'masculino') {
  if (contribuicao >=35){
    console.log(`${nome}, voce ja pode se aposentar!`);
  }else{
    if (soma>=95) {
      console.log(`${nome}, voce ja pode se aposentar!`);
    }
  console.log(`${nome}, voce nao pode se aposentar ainda.`);
  }
}

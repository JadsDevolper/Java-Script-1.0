const nome    = 'Vanderleia';
const peso    = 105;
const altura  = 1.87;
const genero  = 'masculino';
// const imc     = 0;

const imc = peso / (altura * altura);

if (imc >=30) {
  console.log(`${nome}, você está acima do peso!!!`);
}else{
  if (imc < 29.9) {
  console.log(`${nome}, voce está não está acima do peso.`);
  }
}
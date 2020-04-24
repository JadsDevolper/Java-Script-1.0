//Criar um programa que calcule a media
//das notas entre alunose envia
//mensagem do calculo da media

const aluno01 ={
  nome:"Jadson",
  nota: 9.8
}

const aluno02 ={
  nome:"Jose",
  nota: 5.7
}
const aluno03 ={
  nome:"Vanesa",
  nota: 1.5
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;
console.log(media.toFixed(2));
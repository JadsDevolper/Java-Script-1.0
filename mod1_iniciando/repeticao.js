//Criar um programa que calcule a media
//das turmas entre alunos e envia
//mensagem do calculo da media

const alunosTurmaA = [
  {
    nome:"Jadson",
    nota: 7.8
  },
  {
    nome:"Mariana",
    nota: 7.8
  },
  {
    nome:"Debora",
    nota: 7.8
  },
  {
    nome:"Debora",
    nota: 7.8
  },
  {
    nome:"Debora",
    nota: 7.8
  }
]

const alunosTurmaB = [
  {
    nome:"Jose",
    nota: 0
  },
  {
    nome:"MarTiburtiana",
    nota: 4
  },
  {
    nome:"Bromelio",
    nota: 2
  },
  {
    nome:"Debora",
    nota: 7.8
  },
  {
    nome:"Debora",
    nota: 7.8
  },
  {
    nome:"Debora",
    nota: 7.8
  }
]

function calculaMedia(alunos){
  let soma = 0;
  for (let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota;
  }
  const media = soma /alunos.length;
  console.log(soma, media)
}

function enviaMesagen(media, turma){
  // Se a media for maior que 5, parabenizar a turma
  if (media > 5) {
    console.log(`A media da turma ${turma} foi de ${media}. Parabéns!!`);
  } else{
    console.log(`A media da turma ${turma} é menor que 5`)
  }
}

const media1 = calculaMedia(alunosTurmaA);
// const media2 = calculaMedia(alunosTurmaB);

// enviaMesagen(media1,'turmaA');
// enviaMesagen(media2,'turmaB');



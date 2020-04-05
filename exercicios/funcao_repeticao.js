const usuario =[
  {
    nome:'Jordana',
    tecnoligias: ['HTML','CSS'] 
  },
  {
    nome:'Madalenda',
    tecnoligias: ['C#',' Java Script'] 
  },
  {
    nome:'Valquiria',
    tecnoligias: ['React Native',' Phyton' ] 
  }
]

function checaCSS(usuario) {
  for (let tecnoligia of usuario.tecnoligias) {        
    if (tecnoligia == 'CSS') return true;     
    } 
  return false;  
}

 for (i = 0 ; i < usuario.length; i++) {
   const usuarioCSS = checaCSS(usuario[i]);  
   if (usuarioCSS) {
     console.log(` O usuario ${usuario[i].nome} trabalha com CSS`);
   } else {
    console.log(` O usuario ${usuario[i].nome} não trabalha com  CSS`);
  }
 }
const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));
server.set('view engine', 'njk');


nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache:true
});

server.get("/", function(request, response){
  const about = {
    avatar_url:"https://www.recorteadesivo.com.br/site/fotoCorMaterial?id_recorte_personalizado=661&id_materia_prima=1051&tamanho=280x280",
    name: "Carla Virts",
    role:"Instrutora de Treinamento",
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<a href="#" target="_blank"> Neste link!!</a>',
    links:[
      {name: 'Github' , url:'https://github.com/JadsDevolper'},
      {name: 'Twitter', url:'https://twitter.com/sepults'},
      {name: 'Youtube', url:'https://www.youtube.com/channel/UCmjvPWx0ah9T-eRVZNoJIUA?view_as=subscriber'}      
    ]
  }

  return response.render('about', { about });
});

server.get("/portfolio", function(request, response){
  return response.render('portfolio',{ items: videos });
});

server.get("/contato", function(request, response){
  return response.render('contato');
});

server.get('/video', function(request, response) {
  const id = request.query.id
  
  const video = videos.find(function(video){
    return video.id == id;
  })
  if (!video){
    return response.send(" video não encontrado!");    
  }  
  return response.render("video", { item: video});
});

server.listen(5000, function(){
  console.log("Servidor em execução");
});


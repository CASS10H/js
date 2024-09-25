let campoIdade;
let campoTerror;
let campoAção;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("16");
  campoTerror = createCheckbox("Gosta de Terror?");
  campoAção = createCheckbox("Gosta de ação?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeAção = campoAção.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeAção);

  fill(color(255,204, 0));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeAção) {
  if (idade >= 16) {
    if (idade >= 18) {
      return "Sexta feira 13 2009";
    } else {
      if (idade >= 16) {
        if(gostaDeTerror || gostaDeAção) {
          return "Dr fantastico";          
        } else{
         return "Velozes e furiosos";
        }
      } else {
        if (gostaDeTerror) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeTerror) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}

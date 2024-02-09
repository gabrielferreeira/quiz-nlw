const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto Mínimo",
        "Modelo de Objeto do Documento",
        "Dicionário de Objetos Múltiplos",
      ],
      correta: 1, // Modelo de Objeto do Documento
    },
    {
      pergunta: "Qual destes é um tipo de dados válido em JavaScript?",
      respostas: ["Undefined", "NaN", "Infinity"],
      correta: 0, // Undefined
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Remover um ouvinte de evento",
        "Adicionar um ouvinte de evento",
        "Criar um novo evento",
      ],
      correta: 1, // Adicionar um ouvinte de evento
    },
    {
      pergunta: "O que é um operador ternário em JavaScript?",
      respostas: [
        "Um operador que trabalha com três valores",
        "Um operador que realiza três operações",
        "Um operador que compara três variáveis",
      ],
      correta: 0, // Um operador que trabalha com três valores
    },
    {
      pergunta:
        "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: ["parseInt()", "convertToNumber()", "stringToNumber()"],
      correta: 0, // parseInt()
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof []) em JavaScript?",
      respostas: ["Array", "Object", "Undefined"],
      correta: 1, // Object
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara os valores e tipos sem coerção de tipo",
        "Compara os valores com coerção de tipo",
        "Compara apenas os tipos de dados",
      ],
      correta: 0, // Compara os valores e tipos sem coerção de tipo
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: ["!", "-", "~"],
      correta: 0, // !
    },
    {
      pergunta:
        "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: ["console.log()", "print()", "display()"],
      correta: 0, // console.log()
    },
    {
      pergunta:
        "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: ["pop()", "removeLast()", "splice()"],
      correta: 0, // pop()
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas;
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h2").textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      );
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas;
      };
  
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    quizItem.querySelector("dl dt").remove();
  
    quiz.appendChild(quizItem);
  }
  
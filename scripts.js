const perguntas = [
    {
      pergunta: "Qual é o principal objetivo da musculação?",
      respostas: [
        "Perder peso",
        "Melhorar a flexibilidade",
        "Desenvolver massa muscular",
        "Aumentar a resistência aeróbica",
        "Aumentar a força mental",
      ],
      correta: 2, // Desenvolver massa muscular
    },
    {
      pergunta:
        "Qual é o nome do tipo de exercício que trabalha um único grupo muscular?",
      respostas: [
        "Exercício composto",
        "Exercício isométrico",
        "Exercício isolador",
        "Exercício cardiovascular",
        "Exercício funcional",
      ],
      correta: 2, // Exercício isolador
    },
    {
      pergunta:
        "Qual é a melhor abordagem para evitar lesões durante a musculação?",
      respostas: [
        "Levantar o máximo de peso possível",
        "Manter uma boa forma e técnica",
        "Treinar até a exaustão",
        "Ignorar o aquecimento",
        "Não utilizar equipamentos de segurança",
      ],
      correta: 1, // Manter uma boa forma e técnica
    },
    {
      pergunta:
        "Qual é a função principal da creatina na suplementação esportiva?",
      respostas: [
        "Aumentar a resistência aeróbica",
        "Aumentar a velocidade de recuperação muscular",
        "Aumentar a disponibilidade de energia para contrações musculares",
        "Acelerar o metabolismo",
        "Reduzir a fadiga mental",
      ],
      correta: 2, // Aumentar a disponibilidade de energia para contrações musculares
    },
    {
      pergunta:
        "Quanto tempo, em média, deve durar um treino de musculação para obter resultados eficazes?",
      respostas: ["30 minutos", "1 hora", "90 minutos", "2 horas", "15 minutos"],
      correta: 1, // 1 hora
    },
    {
      pergunta:
        "Qual é o principal benefício da realização de exercícios de resistência?",
      respostas: [
        "Aumento da massa muscular",
        "Melhora da saúde cardiovascular",
        "Aumento da flexibilidade",
        "Redução da densidade óssea",
        "Aumento da pressão arterial",
      ],
      correta: 0, // Aumento da massa muscular
    },
    {
      pergunta:
        "Qual é o nome do processo pelo qual os músculos crescem após o treinamento de musculação?",
      respostas: [
        "Hipertrofia",
        "Atrofia",
        "Regeneração",
        "Esgotamento",
        "Depleção",
      ],
      correta: 0, // Hipertrofia
    },
    {
      pergunta:
        "Qual é o músculo do peito frequentemente trabalhado através de exercícios como supino?",
      respostas: ["Bíceps", "Quadríceps", "Peitoral", "Deltoides", "Tríceps"],
      correta: 2, // Peitoral
    },
    {
      pergunta:
        "Qual é a melhor maneira de aumentar a intensidade do treino de musculação?",
      respostas: [
        "Diminuir o número de repetições",
        "Aumentar o peso levantado",
        "Diminuir o descanso entre as séries",
        "Aumentar a velocidade dos movimentos",
        "Aumentar o volume de treino",
      ],
      correta: 1, // Aumentar o peso levantado
    },
    {
      pergunta:
        "Qual é o nome do processo pelo qual o corpo queima calorias para produzir energia durante o exercício?",
      respostas: [
        "Catabolismo",
        "Metabolismo",
        "Termogênese",
        "Homeostase",
        "Anabolismo",
      ],
      correta: 2, // Termogênese
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
  
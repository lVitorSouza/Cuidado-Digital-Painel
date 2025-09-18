// Dicionário de humores com mensagens e imagens
const dadosHumor = {
    feliz: {
      mensagens: [
        "Continue espalhando sua alegria! 🌞",
        "A felicidade é contagiante, compartilhe-a! 💛",
        "Aproveite cada momento desse bom humor! 🌻"
      ],
      imagens: [
        "https://esbrasil.com.br/wp-content/uploads/2017/08/Felicidade-1920x1440.jpg",
        "https://tse3.mm.bing.net/th/id/OIP.rvisyAuJlNjTU70OJqPGjAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://tse1.mm.bing.net/th/id/OIP.AUzoLZE74TJP7yjQJgKYIAHaKo?rs=1&pid=ImgDetMain&o=7&rm=3"
      ]
    },
    triste: {
      mensagens: [
        "Dias difíceis passam, você é forte! 💙",
        "Permita-se sentir, mas nunca desista. 🌧️",
        "Você não está sozinho nessa jornada. 🤝"
        
      ],
      imagens: [
        "https://midias.correiobraziliense.com.br/_midias/jpg/2024/06/26/675x450/1_pablo_marcal-38437315.jpg?20240902162023?20240902162023",
        "https://tse3.mm.bing.net/th/id/OIP.Sn3AUDvryCNO67wyySgjuwHaEK?w=640&h=360&rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/10/fast-and-furious-dominic-toretto-explained.jpg"
    ]
    },
    ansioso: {
      mensagens: [
        "Respire fundo, tudo vai se acalmar. 🌬️",
        "Passo a passo, sem pressa. 🕊️",
        "Você controla o agora, e isso basta. ✨"
        
      ],
      imagens: [
        "https://th.bing.com/th/id/R.0b603265e6c8b5886da2882bffac2ed4?rik=PqmcYoxrVv8k3Q&pid=ImgRaw&r=0",
        "https://t2.tudocdn.net/691001?w=1920",
        "https://images.squarespace-cdn.com/content/v1/6246756e8eba0414031f472c/44a1055a-d9f8-426e-9d05-6ecdc2214f84/jackie+chan+net+worth.jpg"
      ]
    }
  };
  
  // Captura elementos
  const form = document.getElementById("humorForm");
  const humorInput = document.getElementById("humorInput");
  const humorDisplay = document.getElementById("humorDisplay");
  const mensagemBtn = document.getElementById("mensagemBtn");
  const mensagemContainer = document.getElementById("mensagemContainer");
  
  // Recupera humor salvo
  window.onload = () => {
    const humorSalvo = localStorage.getItem("humor");
    if (humorSalvo) {
      humorDisplay.textContent = `Seu humor registrado: ${humorSalvo}`;
      mensagemBtn.classList.remove("hidden");
    }
  };
  
  // Registrar humor
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const humor = humorInput.value.trim().toLowerCase();
  
    localStorage.setItem("humor", humor);
    humorDisplay.textContent = `Seu humor registrado: ${humor}`;
    mensagemContainer.innerHTML = "";
    mensagemBtn.classList.remove("hidden");
    humorInput.value = "";
  });
  
  // Sortear mensagem + imagem
  mensagemBtn.addEventListener("click", () => {
    const humor = localStorage.getItem("humor");
  
    if (dadosHumor[humor]) {
      const mensagens = dadosHumor[humor].mensagens;
      const imagens = dadosHumor[humor].imagens;
  
      const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
      const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
  
      mensagemContainer.innerHTML = `
        <p><strong>${mensagemAleatoria}</strong></p>
        <img src="${imagemAleatoria}" alt="${humor}">
      `;
    } else {
      mensagemContainer.innerHTML = `
        <p><strong>Humor não encontrado. Mas lembre-se: você é incrível! 🌟</strong></p>
      `;
    }
  });
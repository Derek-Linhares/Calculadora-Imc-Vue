const { createApp } = Vue;

createApp({
  data() {
    return {
      peso: null,
      altura: null,
      imc: "",
      mostrarResultado: false,
      vazio: false,
    };
  },
  computed: {
    faixaAtual() {
      const valor = parseFloat(this.imc);
      if (!valor) return "";

      if (valor < 18.5) return "Abaixo do peso";
      if (valor < 25) return "Peso normal";
      if (valor < 30) return "Sobrepeso";
      if (valor < 35) return "Obesidade grau I";
      if (valor < 40) return "Obesidade grau II";
      return "Obesidade grau III";
    },
    classificacao() {
      switch (this.faixaAtual) {
        case "Abaixo do peso":
          return "Atenção, você está abaixo do peso."; 
        case "Peso normal":
          return "Parabéns! Você está com peso normal.";
        case "Sobrepeso":
          return "Atenção: você está com sobrepeso.";
        case "Obesidade grau I":
          return "Atenção! Você está com obesidade grau I. Procure um nutricionista para iniciar uma dieta!";
        case "Obesidade grau II":
          return "Cuidado! Você está com obesidade grau II. Inicie uma dieta e procure uma academia para se exercitar!";
        case "Obesidade grau III":
          return "ALERTA! Obesidade grau III. Procure um medico IMEDIATAMENTE.";
        default:
          return "";
      }
    },
  },
  methods: {
    calcular() {
      if (!this.peso || !this.altura) {
        this.imc = "";
        this.vazio = true;
        return;
      }
      this.imc = (this.peso / (this.altura / 100) ** 2).toFixed(2);
      this.mostrarResultado = true;
      this.vazio = false;
    },
    voltar() {
      this.mostrarResultado = false;
      this.imc = "";
    },
  },
}).mount("#calc");

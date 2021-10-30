const app = Vue.createApp({
  data: () => ({
    title: "Calculadora App",
    n1: 0,
    n2: 0,
  }),
  computed: {
    suma() {
      return this.n1 + this.n2;
    },
    resta() {
      return this.n1 - this.n2;
    },
    multiplicar() {
      return this.n1 * this.n2;
    },
    dividir() {
      return this.n1 && this.n2
        ? this.n1 / this.n2
        : "Error no calculable";
    },
  },
});

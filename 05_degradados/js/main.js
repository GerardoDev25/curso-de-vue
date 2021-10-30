const app = Vue.createApp({
  data: () => ({
    title: "Gradient Generator",
    fcolor: "#48ef12",
    scolor: "#eeeeee",
    orientation: 1,
  }),
  computed: {
    setColor() {
      switch (Number(this.orientation)) {
        case 1:
          return `background: linear-gradient(to right,${this.fcolor}, ${this.scolor} );`;
        case 2:
          return `background: linear-gradient(to left,${this.fcolor}, ${this.scolor} );`;
        case 3:
          return `background: linear-gradient(to top,${this.fcolor}, ${this.scolor} );`;
        case 4:
          return `background: linear-gradient(to bottom,${this.fcolor}, ${this.scolor} );`;
      }
    },
  },
});

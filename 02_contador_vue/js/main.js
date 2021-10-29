const App = Vue.createApp({
  data() {
    return {
      title: "contador App -vue",
      count: 0,
    };
  },
  methods: {
    modCount(instruction = "add", limit = 1) {
      instruction === "dis"
        ? (this.count -= limit)
        : (this.count += limit);
    },
  },
});

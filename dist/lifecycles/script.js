const print = console.log;

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
  },
  beforeCreate() {
    print('Component Will Create');
  },
  created() {
    print('Component Did Create');
  },
  beforeMount() {
    print('Component Will Mount');
  },
  mounted() {
    print('Component Did Mount');
  },
  beforeUpdate() {
    print('Component Will Update');
  },
  updated() {
    print('Component Did Update');
  },
  beforeDestory() {
    print('Component Will Destroy');
  },
  destroyed() {
    print('Component Did Destroy');
  },
  methods: {
    destroy() {
      this.$el.remove();
      this.$destroy();
    },
  },
});

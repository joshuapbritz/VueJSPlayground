Vue.component('web-counter', {
  template: `<div>
    <h1>Counter Value: {{ counter }}</h1>
    <br/>
    <button @click="counter++">INC</button>
    <button @click="counter--">DEC</button>
  </div>`,
  data() {
    return {
      counter: 0,
    };
  },
});

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
  },
});

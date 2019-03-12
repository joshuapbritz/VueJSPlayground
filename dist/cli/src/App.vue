<template>
  <div class="wrapper">
    <h1>Hello World! {{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    title() {
      return this.msg;
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #174574;
  padding-top: 60px;
}

.classname {
  color: orange;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

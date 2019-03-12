new Vue({
  el: '#app',
  data: {
    info: null,
  },
  computed: {},
  methods: {
    async getData() {
      if (!this.info) {
        const data = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        ).then(data => data.json());
        this.info = Array.from(data)
          .reverse()
          .map(user => {
            delete user.address.geo;
            return user;
          });
      } else console.info('Already Fetched Data');
    },
  },
});

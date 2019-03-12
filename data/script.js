new Vue({
  el: '#app',
  data: {
    counter: 0,
    form: {
      name: null,
      surname: null,
      email: null,
    },
  },
  computed: {
    valid() {
      console.log('Computing Status');
      
      const { name, surname, email } = this.form;

      const nameIsValid = name !== null && typeof name === 'string';

      const surnameIsValid = surname !== null && typeof surname === 'string';

      const emailIsValid =
        email !== null && typeof email === 'string' && validateEmail(email);

      return nameIsValid && surnameIsValid && emailIsValid;
    },
  },
  methods: {},
});

/**
 *
 * @param {String} email
 *
 * @return {Boolean}
 */
function validateEmail(email) {
  const rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rgx.test(
    String(email)
      .trim()
      .toLowerCase()
  );
}

<template>
  <div class="form">
    <form v-if="register" class="register-form">
      <input v-model="username" type="text" placeholder="name"/>
      <input v-model="password" type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button @click.prevent="register">create</button>
      <p class="message">Already registered? <a @click="toggle" href="#">Sign In</a></p>
    </form>
    <form v-else class="login-form">
      <input v-model="username" type="text" placeholder="username"/>
      <input v-model="password" type="password" placeholder="password"/>
      <button @click.prevent="login">login</button>
      <p class="message">Not registered? <a @click="toggle" href="#">Create an account</a></p>
    </form>
  </div>
</template>


<script>
export default {
  name: 'loginform',
  data() {
    return {
      register: false,
      username: '',
      password: '',
    };
  },
  methods: {
    toggle() {
      this.register = !this.register;
    },
    login() {
      if (this.username === this.password && this.username === 'admin') {
        this.$store.dispatch('login', 'abc123');
        this.$emit('login');
      }
    },
  },
};
</script>

<style>
form.login-form,
form.register-form {
  flex-direction: column;
}
.form {
  border-radius: 10px;
  position: absolute;
  top: 5em;
  right: 2em;
  z-index: 99999;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 12px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
}
.form button:hover {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
}
.form .register-form {
  display: none;
}
</style>

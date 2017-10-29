<template>
<div class="form">
  <form @submit.prevent class="rent-form">
    <label>Number of days</label>
    <input v-model="duration" type="text" placeholder="Duration"/>
    <span class="protectionplan">
      <label>Purchase Protection Plan ($5)</label><input v-model="protection" type="checkbox">
    </span>
    <p>Cost: ${{(price * +duration) + (protection ? 5 : 0)}}</p>
    <button @click.prevent="rent">Rent</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'rentform',
  props: ['price'],
  data() {
    return {
      duration: '',
      protection: true,
    };
  },
  methods: {
    rent() {
      this.$emit('hide');
    },
  },
};
</script>

<style scoped>

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
.form input[type="text"] {
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

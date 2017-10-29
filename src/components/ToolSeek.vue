<template>
<div id="toolseek">
  <h2><a @click="home" href="#">Tool Seek</a></h2>
  <span class="useability">
    <span v-if="!loginToken" class="login"><a @click="popupLogin" href="#">Log In</a></span>
    <span v-else class="profile"><i class="fa fa-user-circle fa-2x"></i></span>
  </span>
  <login-form v-if="showForm" @login="popupLogin"></login-form>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import LoginForm from '@/components/LoginForm';

export default {
  name: 'toolseek',
  components: {
    LoginForm,
  },
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    ...mapGetters(['loginToken']),
  },
  methods: {
    popupLogin() {
      this.showForm = !this.showForm;
    },
    home() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
a {
  color: black;
  text-decoration-line: none;
}
span.login a {
  padding: .5em 1em;
  background-color: #f90;
  border-radius: 30px;
}
div#toolseek h2 {
  font-family: 'Pacifico', cursive;
}
div#toolseek span.login {
  font-size: 18pt;
}
div#toolseek {
  display: flex;
  top: 0;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 10;
}
div#toolseek * {
  display: inline-flex;
  align-items: center;
}
span.useability * {
  margin: 0 .5em;
}
span.useability {
  margin-right: 1em;
}
</style>

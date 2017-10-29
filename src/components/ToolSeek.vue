<template>
<div id="toolseek">
  <h2>Tool Seek</h2>
  <span class="useability">
    <span class="login"><a>Log In</a></span>
    <span class="profile"><i class="fa fa-user-circle fa-2x"></i></span>
  </span>
</div>
</template>

<script>
export default {
  name: 'toolseek',
  data() {
    return {};
  },
};
</script>

<style>
div#toolseek h2 {
  font-family: 'Pacifico', cursive;
}
div#toolseek span.login {
  font-size: 18pt;
}
div#toolseek {
  display: flex;
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
</style>

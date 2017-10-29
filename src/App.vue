<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <tool-seek class="heading"></tool-seek>
    <router-view/>
  </div>
</template>

<script>
import ToolSeek from '@/components/ToolSeek';

require('font-awesome/css/font-awesome.min.css');

export default {
  name: 'app',
  components: {
    ToolSeek,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Courgette|Dosis|Pacifico');
html, body, div#app {
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>

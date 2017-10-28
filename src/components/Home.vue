<template>
<div id="home">
  <div class="inputarea">
    <input @click="showMap" class="zip" type="text" placeholder="Location">
  </div>
  <div class="about">
    
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
  },
  methods: {
    showMap(e) {
      console.log(e);
    },
  },
};
</script>

<style>
div#home, div.inputarea {
  height: 100%;
}
div.about {
  background-color: #f39;
}
div.inputarea {
  display: flex;
  justify-content: center;
  align-items: center;
}
input.zip {
  align-content: center;
  font-size: 36pt;
  text-align: center;
  height: 2em;
  width: 20em;
}
</style>

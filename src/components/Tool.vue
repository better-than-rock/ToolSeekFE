<template>
<div class="tool">
  <img :src="image">
  <div class="info">
    <h2>{{name}}</h2>
    <p>${{rate}} per day</p>
    <a class="rent" href="#">Rent</a>
  </div>
  <div class="owner">
    <img class="avatar" :src="owner.image">
    <h4>{{owner.name}}</h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'tool',
  props: ['tool'],
  data() {
    return {
      name: this.tool.name,
      rate: this.tool.rate,
      image: this.tool.image,
      owner: this.tool.owner,
    };
  },
};
</script>

<style scoped>
a.rent {
  margin-top: 2em;
  padding: .5em 1em;
  background-color: #f90;
  border-radius: 30px;
  color: black;
  text-decoration-line: none;
}
div.tool {
  border: 1px solid black;
  display: inline-flex;
}
div.tool img {
  height: 150px;
}
div.owner {
  text-align: center;
}
div.owner h4 {
  margin: 0;
}
div.tool > * {
  margin: 0 2em;
}
</style>

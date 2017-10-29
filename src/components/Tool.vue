<template>
<div class="tool" :class="{rented, unrented: !rented}" >
  <img :src="image">
  <div class="info">
    <h2>{{name}}</h2>
    <p>${{rate}} per day</p>
    <a @click="rent" class="rent" href="#">Rent</a>
  </div>
  <div class="owner">
    <img class="avatar" :src="owner.image">
    <h4>{{owner.name}}</h4>
  </div>
  <div class="distrate">
    <p>{{(dist * 69).toFixed(2)}}mi away from you!</p>
    <p>Rating: {{'⭐'.repeat(owner.rating)}}</p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'tool',
  props: ['tool', 'dist'],
  data() {
    return {
      rented: false,
      name: this.tool.name,
      rate: this.tool.rate,
      image: this.tool.image,
      owner: this.tool.owner,
    };
  },
  computed: {
    ...mapGetters(['loginToken']),
  },
  methods: {
    rent() {
      if (this.loginToken) {
        this.$emit('showRent', this.name, this.rate);
        this.rented = !this.rented;
      }
    },
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
div.tool.rented {
  border: 1px solid red;
}
div.tool.unrented {
  border: 1px solid black;
}
</style>

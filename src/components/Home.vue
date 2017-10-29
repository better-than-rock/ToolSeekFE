<template>
<div id="home">
  <div class="videoloop">
    <video :src="video" @ended="nextVideo" muted autoplay class="background-loop"/>
  </div>
  <div class="inputarea">
    <h3>Rent tools effortlessly</h3>
    <form class="find" @submit.prevent="showMap">
      <input v-model="zipcode" pattern="^\d{5}$" class="zip" type="text" placeholder="Zip Code" title="Zip Code">
    </form>
  </div>
</div>
</template>

<script>
import vid1 from '@/assets/videos/1.mp4';
import vid2 from '@/assets/videos/2.mp4';
import vid3 from '@/assets/videos/3.mp4';
import vid4 from '@/assets/videos/4.mp4';
import vid5 from '@/assets/videos/5.mp4';
import photo1 from '@/assets/photos/1.jpg';
import photo2 from '@/assets/photos/2.jpg';

const videos = [vid1, vid2, vid3, vid4, vid5];
let next = 1;
export default {
  name: 'home',
  data() {
    return {
      photo1,
      photo2,
      video: videos[0],
      zipcode: '',
    };
  },
  methods: {
    showMap() {
      this.$store.dispatch('setZip', this.zipcode);
      this.$router.push('show');
      console.log(this.zipcode);
    },
    nextVideo() {
      this.video = videos[next];
      this.$el.querySelector('video').load();
      // Set next to the next video (next + 1 or 0)
      next = next === 4 ? 0 : next + 1;
    },
  },
};
</script>

<style>
div#home {
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
form.find {
  display: flex;
  flex-direction: column;
}
div.section img {
  height: 200px;
}
div.about {
  background-color: #f39;
  text-align: center;
  display: flex;
  flex-direction: row;
}
div.inputarea {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div.inputarea h3 {
  font-family: 'Courgette', cursive;
}
.heading {
  text-align: left;
  margin-left: 1em;
  font-size: 16pt;
}
input::placeholder {
  font-family: 'Dosis', sans-serif;
}
input {
  margin: .1em;
  outline: none;
  align-content: center;
  font-size: 24pt;
  text-align: center;
  height: 1em;
  width: 10em;
  padding: .5em;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.3);
  opacity: .8;
}
video.background-loop {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  /* height: 100%; */
  z-index: -100;
}
</style>

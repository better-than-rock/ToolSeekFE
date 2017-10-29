<template>
<div id="home">
  <div class="videoloop">
    <video :src="video" @ended="nextVideo" muted autoplay class="background-loop"/>
  </div>
  <toolseek class="heading"></toolseek>
  <div class="inputarea">
    <h3>Rent tools effortlessly</h3>
    <form @submit.prevent="showMap">
      <input class="zip" type="text" placeholder="Zip Code">
    </form>
  </div>
  <div class="about">
    <h2>Help build and grow your community with Tool Seek</h2>
  </div>
</div>
</template>

<script>
import vid1 from '@/assets/videos/1.mp4';
import vid2 from '@/assets/videos/2.mp4';
import vid3 from '@/assets/videos/3.mp4';
import vid4 from '@/assets/videos/4.mp4';
import vid5 from '@/assets/videos/5.mp4';
import toolseek from '@/components/ToolSeek';

const videos = [vid1, vid2, vid3, vid4, vid5];
let next = 1;
export default {
  name: 'home',
  components: { toolseek },
  data() {
    return { video: videos[0] };
  },
  methods: {
    showMap(e) {
      const zip = e.targe.value;
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
div.about {
  background-color: #f39;
  text-align: center;
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
input.zip::placeholder {
  font-family: 'Dosis', sans-serif;
}
input.zip {
  outline: none;
  align-content: center;
  font-size: 24pt;
  text-align: center;
  height: 1em;
  width: 15em;
  padding: .5em;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.3);
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

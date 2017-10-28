<template>
<div id="home">
  <div class="inputarea">
    <div class="videoloop">
      <video loop muted autoplay class="background-loop">
        <source v-for="video in videos" :src="video" :key="video" type="video/mp4">
      </video>
    </div>
    <input @submit.prevent="showMap" class="zip" type="text" placeholder="Location">
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

export default {
  name: 'home',
  data() {
    const videos = [vid1, vid2, vid3, vid4, vid5];
    return { videos };
  },
  methods: {
    showMap(e) {
      console.log(e);
    },
  },
};
</script>

<style>
div#home {
  height: 100%;
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
}
input.zip {
  align-content: center;
  font-size: 36pt;
  text-align: center;
  height: 2em;
  width: 20em;
}
video.background-loop {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  z-index: -100;
}
</style>

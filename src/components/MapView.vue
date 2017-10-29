<template>
<div id="mapview">
  <div class="map">
  </div>
  <div class="toollist">
    <tool v-for="tool in tools" :key="tool.name" :tool="tool"></tool>
  </div>
</div>
</template>

<script>
import Tool from '@/components/Tool';
import hammer from '@/assets/photos/hammer.jpg';
import harold from '@/assets/photos/harold.jpg';
import stapler from '@/assets/photos/stapler.jpg';

// eslint-disable-next-line
window.loadMapScenario = () => {
  // eslint-disable-next-line
  const map = new Microsoft.Maps.Map(document.querySelector('div.map'), {
    credentials: 'Aj-YAY9LaDRaxG24fSALiQJLNvGTN3hRoG33rJqxDlmz8nonZ4Z0PTV_-VgWxJQT',
    center: new Microsoft.Maps.Location(30.5301939, -97.7124543),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16,
  });
  map.entities.push(new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(30.530769, -97.711640), null));
  map.entities.push(new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(30.530344, -97.713121), null));
};
/* eslint no-undef: "off" */
export default {
  name: 'mapview',
  components: {
    Tool,
  },
  data() {
    return {
      tools: [
        {
          name: 'Hammer',
          rate: 5.0,
          image: hammer,
          owner: {
            name: 'Harold',
            image: harold,
          },
        },
        {
          name: 'Stapler',
          rate: 10.0,
          image: stapler,
          owner: {
            name: 'Harold',
            image: harold,
          },
        },
      ],
    };
  },
  mounted() {
    const bingApi = document.createElement('script');
    bingApi.setAttribute('src', 'https://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario');
    bingApi.setAttribute('async', '');
    bingApi.setAttribute('defer', '');
    document.querySelector('body').appendChild(bingApi);
  },
};
</script>

<style scoped>
div#mapview {
  margin-top: 100px;
}
div.map {
  width: 500px;
  height: 400px;
  float: right;
  margin-right: 5em;
}
div.toollist {
  margin: 2em 4em;
}
div.tool {
  margin: 1em;
}
</style>

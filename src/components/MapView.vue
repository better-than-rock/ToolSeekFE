<template>
<div id="mapview">
  <div class="map" style="width: 500px; height: 400px;">
  </div>
</div>
</template>

<script>
// eslint-disable-next-line
window.loadMapScenario = () => {
  console.log('Loaded Map');
  // eslint-disable-next-line
  const map = new Microsoft.Maps.Map(document.querySelector('div.map'), {
    credentials: 'Aj-YAY9LaDRaxG24fSALiQJLNvGTN3hRoG33rJqxDlmz8nonZ4Z0PTV_-VgWxJQT',
    center: new Microsoft.Maps.Location(51.50632, -0.12714),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10,
  });
};
/* eslint no-undef: "off" */
export default {
  name: 'mapview',
  data() {
    return {};
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

<style>

</style>

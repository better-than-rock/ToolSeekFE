<template>
<div id="mapview">
  <div class="map">
  </div>
</div>
</template>

<script>
export default {
  name: 'mapview',
  data() {
  },
  mounted() {
    const map = new Microsoft.Maps.Map(this.$el.querySelector('div.map') {
      credentials: 'Aj-YAY9LaDRaxG24fSALiQJLNvGTN3hRoG33rJqxDlmz8nonZ4Z0PTV_-VgWxJQT',
      center: new Microsoft.Maps.Location(51.50632, -0.12714),
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      zoom: 10
    });
  }
};
</script>

<style>

</style>

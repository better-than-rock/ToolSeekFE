<template>
<div id="mapview">
  <span class="search">
    <input class="searchBar" type="text" v-model="filter" @input="filterData">
    <select v-model="sortBy" @change="filterData">
      <option value="distance">Distance</option>
      <option value="rating">Rating</option>
    </select>
  </span>
  <rent-form @hide="hide" :price="price" v-if="showForm"></rent-form>
  <div class="map">
  </div>
  <div class="toollist">
    <tool @showRent="showRent" v-for="tool in filteredTools" :key="tool.name" :tool="tool" :dist="distanceFromZip(tool)"></tool>
  </div>
</div>
</template>

<script>
import Tool from '@/components/Tool';
import RentForm from '@/components/RentForm';
import hammer from '@/assets/photos/hammer.jpg';
import harold from '@/assets/photos/harold.jpg';
import stapler from '@/assets/photos/stapler.jpg';
import handyman from '@/assets/photos/handyman.jpg';
import tablesaw from '@/assets/photos/tablesaw.jpg';
import lasercutter from '@/assets/photos/lasercutter.png';
import asianCW from '@/assets/photos/asianCW.jpg';

function distanceFromZip(a) {
  const center = [30.5301939, -97.7124543];
  const deltaX = a.location[0] - center[0];
  const deltaY = a.location[1] - center[1];
  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
}
let map;
// eslint-disable-next-line
window.loadMapScenario = () => {
  // eslint-disable-next-line
  map = new Microsoft.Maps.Map(document.querySelector('div.map'), {
    credentials: 'Aj-YAY9LaDRaxG24fSALiQJLNvGTN3hRoG33rJqxDlmz8nonZ4Z0PTV_-VgWxJQT',
    center: new Microsoft.Maps.Location(30.5301939, -97.7124543),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16,
  });
  /* map.entities.push(new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(30.530769, -97.711640), null));
  map.entities.push(new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(30.530344, -97.713121), null)); */
  const tools = [
    {
      name: 'Hammer',
      rate: 5.0,
      image: hammer,
      owner: {
        name: 'Harold',
        image: harold,
      },
      location: [30.530603, -97.713604],
    },
    {
      name: 'Stapler',
      rate: 10.0,
      image: stapler,
      owner: {
        name: 'Harold',
        image: harold,
      },
      location: [30.540999, -97.703541],
    },
    {
      name: 'Super Awesome Laser Cutter',
      rate: 500.0,
      image: lasercutter,
      owner: {
        name: 'Lyndon',
        image: asianCW,
      },
      location: [30.535963, -97.708229],
    },
    {
      name: 'Mega Sharp TableSaw',
      rate: 350.0,
      image: tablesaw,
      owner: {
        name: 'Cool Mom',
        image: handyman,
      },
      location: [30.533172, -97.715256],
    },
  ];
  tools.forEach((tool) => {
    map.entities.push(new Microsoft.Maps.Pushpin(
      new Microsoft.Maps.Location(...tool.location), null));
  });
};
/* eslint no-undef: "off" */
export default {
  name: 'mapview',
  components: {
    Tool,
    RentForm,
  },
  data() {
    const tools = [
      {
        name: 'Hammer',
        rate: 5.0,
        image: hammer,
        owner: {
          name: 'Harold',
          image: harold,
          rating: 5,
        },
        location: [30.530603, -97.713604],
      },
      {
        name: 'Stapler',
        rate: 10.0,
        image: stapler,
        owner: {
          name: 'Harold',
          image: harold,
          rating: 5,
        },
        location: [30.540999, -97.703541],
      },
      {
        name: 'Super Awesome Laser Cutter',
        rate: 500.0,
        image: lasercutter,
        owner: {
          name: 'Lyndon',
          image: asianCW,
          rating: 4,
        },
        location: [30.535963, -97.708229],
      },
      {
        name: 'Mega Sharp TableSaw',
        rate: 350.0,
        image: tablesaw,
        owner: {
          name: 'Cool Mom',
          image: handyman,
          rating: 2,
        },
        location: [30.533172, -97.715256],
      },
    ];
    return {
      sortBy: 'distance',
      filter: '',
      showForm: false,
      rented: false,
      price: 0,
      tools,
      filteredTools: Array.from(tools),
    };
  },
  mounted() {
    const bingApi = document.createElement('script');
    bingApi.setAttribute('src', 'https://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario');
    bingApi.setAttribute('async', '');
    bingApi.setAttribute('defer', '');
    document.querySelector('body').appendChild(bingApi);
    this.filteredTools.sort((a, b) => distanceFromZip(a) - distanceFromZip(b));
  },
  methods: {
    distanceFromZip(a) {
      const center = [30.5301939, -97.7124543];
      const deltaX = a.location[0] - center[0];
      const deltaY = a.location[1] - center[1];
      return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
    },
    showRent(name, price) {
      this.price = price;
      this.showForm = !this.showForm;
    },
    hide() {
      this.showForm = false;
      this.rented = true;
    },
    filterData() {
      console.log(this.filteredTools);
      this.filteredTools.splice(0, this.filteredTools.length);
      this.tools.filter(tool => tool.name.match(new RegExp(this.filter, 'i')))
        .forEach(tool => this.filteredTools.push(tool));
      if (this.sortBy === 'distance') {
        this.filteredTools.sort((a, b) => distanceFromZip(a) - distanceFromZip(b));
      } else {
        this.filteredTools.sort((a, b) => b.owner.rating - a.owner.rating);
      }
    },
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
  margin-right: 12em;
  margin-top: 2em;
}
div.toollist {
  margin: 2em 4em;
}
div.tool {
  display: inline-flex;
  margin: 1em;
}
input.searchBar {
  display: flex;
  margin: 0 auto;
}
span.search {
  display: inline-flex;
  margin: 0 2em;
}
</style>

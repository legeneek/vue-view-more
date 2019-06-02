<template>
  <div id="app">
    <ViewMore :height="100">
      <template v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque ex. Aenean placerat lectus lacus, ut imperdiet odio dapibus sed. Vestibulum consectetur facilisis justo ut luctus. Mauris cursus erat quis nisl tempus tincidunt. Vestibulum eget risus feugiat, efficitur urna a, pulvinar turpis. Quisque auctor nisl nec metus pretium, maximus consectetur magna consectetur. Pellentesque tempor commodo accumsan. Nunc sed ipsum nisi. Nam mollis efficitur arcu sed rutrum.</p>
      </template>
      <template v-slot:trigger>
        <div class="btn-vm">view more</div>
      </template>
    </ViewMore>
  </div>
</template>

<script>
import ViewMore from '../../src/index'

export default {
  name: 'app',
  components: {
    ViewMore
  }
}
</script>

<style scoped>
#app {
  width: 200px;
}
p {
  padding: 0;
  margin: 0;
  height: 200px;
}
.btn-vm {
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #000;
  background-color: #fff;
}
</style>


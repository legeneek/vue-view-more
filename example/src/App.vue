<template>
  <div id="app">
    <ViewMore :height="200" ref="more">
      <template v-slot:content>
        <p v-for="(item,index) in list" :key="index">{{item}}</p>
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
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque ex. Aenean placerat lectus lacus.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque ex. Aenean placerat lectus lacus.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque ex. Aenean placerat lectus lacus.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque ex. Aenean placerat lectus lacus.`,
      ]
    this.$nextTick(() => {
      this.$refs.more.update()
    })
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


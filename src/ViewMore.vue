<template>
  <div class="view-more" :style="containerStyle">
    <slot name="content"></slot>
    <div v-if="showViewMore" class="trigger" @click="expend()">
      <slot name="trigger"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      showViewMore: false,
      containerStyle: ''
    }
  },
  mounted() {
    const elHeight = this.$el.offsetHeight
    if (elHeight > this.height) {
      this.containerStyle = `height: ${this.height}px; overflow: hidden;`
      this.showViewMore = true
    }
  },
  methods: {
    expend() {
      this.containerStyle = 'height: auto;'
      this.showViewMore = false
    }
  }
}
</script>

<style scoped>
.view-more {
  position: relative;
}
.trigger {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

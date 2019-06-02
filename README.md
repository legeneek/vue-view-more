# vue-view-more
view more UI component based on vue2.

## Installation
```
npm i vue-view-more
```
## demo

check the example folder

```
npm run start
```

## Basic Use

- slot `content` is the content you want to display
- slot `trigger` is the view more button

```vue
<template>
  <div id="app">
      <ViewMore :height="100">
      <template v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </template>
      <template v-slot:trigger>
        <div class="btn-vm">view more</div>
      </template>
    </ViewMore>
    </div>
</template>

<script>
import ViewMore from 'vue-view-more'

export default {
  // ...
}

</script>
```

## props

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| height | Number | yes | the init height of content |

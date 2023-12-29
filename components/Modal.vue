<template>
    <div  v-if="show" 
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="max-w-3xl mx-auto px-4 py-2 bg-white relative">
        <button @click="$emit('close')" class="py-2 px-4 bg-gray-200 rounded-full absolute top-0 right-0">x</button>
        <!-- <p>{{ image }}</p> -->
        <p>{{ image.title }}</p>
        <img width="200" height="200" :src="image.url" class="w-full">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: Object,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>

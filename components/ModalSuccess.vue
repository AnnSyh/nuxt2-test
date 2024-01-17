<template>
    <div  v-if="show" 
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-auto p-12 max-w-3xl mx-auto bg-white relative">
        <button @click="$emit('close')" class="py-2 px-4 bg-gray-200 rounded-full absolute top-0 right-0">x</button>
        <p>Поздравляем с успешной ваидацией формы!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>

<template>
    <div  v-if="show" 
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="max-w-3xl mx-auto p-10 bg-white relative text-center">
        <div class="dot-before-after uppercase font-neucha">  Политика обработки персональных данных </div>
        <div class="my-4    ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus praesentium labore eum aliquid eos voluptate sunt harum quisquam? Totam necessitatibus mollitia debitis quaerat harum reprehenderit minima adipisci voluptatum architecto error.
        </div>
        <button @click="$emit('close')" class="py-2 px-4 bg-gray-200 rounded-xl">Согласен</button>
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
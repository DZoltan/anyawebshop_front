<script setup>

// eslint-disable-next-line no-undef
  const props = defineProps({
    category: {
      type : Object,
      default : null
    }
  })
console.log(props);
</script>

<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-opacity-55" style="margin: 1em;">
      <a href="#">
          <img class="p-8 rounded-t-lg" alt="product image" />
      </a>
      <div class="px-5 pb-5">
          <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ category?.name }}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">

          </div>
          <div class="flex items-center justify-between">
              <a @click="$router.push({name : 'kategoria', params : { categoryUrl: category?.categoryUrl} })" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Megtekintés</a>
          </div>
      </div>
  </div>

</template>

<style scoped>
</style>


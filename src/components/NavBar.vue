<script setup>

</script>

<template>
  <nav class="flex items-center justify-around flex-wrap bg-amber-200 p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a @click="$router.push('/')" class="block mt-4 lg:inline-block lg:mt-0 text-green-950 hover:text-white mr-14">
          Kezdőlap
        </a>
        <a @click="$router.push('termekek')" class="block mt-4 lg:inline-block lg:mt-0 text-green-950 hover:text-white mr-14">
          Shop
        </a>
        <a @click="$router.push('szolgaltatas')" class="block mt-4 lg:inline-block lg:mt-0 text-green-950 hover:text-white mr-14">
          Szolgáltatások
        </a>
        <a @click="$router.push('about')" class="block mt-4 lg:inline-block lg:mt-0 text-green-950 hover:text-white mr-14">
          Rólam
        </a>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>
</style>
<script setup>
  import CategoryElem from "@/components/CategoryElem.vue";
  import {nextTick, onMounted, ref} from "vue";
  import {useCategories} from "@/composables/categories";

  const {getAllCategories} = useCategories();

  const categories = ref([])

  onMounted(async () => {
    getAllCategories().then(async (res) => {
      console.log(res)
      categories.value = res?.data
      await nextTick();
    }).catch(async (err) => {
      console.log(err)
    })
  })

</script>

<template>
  <div class="h-dvh bg-shopImage">
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="category in categories" :key="category">
        <CategoryElem :category=category>
        </CategoryElem>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
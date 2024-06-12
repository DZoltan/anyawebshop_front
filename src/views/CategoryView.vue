<script setup>
  import {useRoute} from "vue-router";
  import {useCategories} from "@/composables/categories";
  import {useTermekek} from "@/composables/termek";
  import {nextTick, onMounted, ref, watch} from "vue";

  const { getCategoryByUrl } = useCategories();
  const { getTermekekByCategory } = useTermekek();

  const route = useRoute()
  const category = ref({})
  const termekek = ref([])

  onMounted(async () => {
    getCategoryByUrl(route.params.categoryUrl).then(async  (res) => {
      console.log(res)
      category.value = res?.data
      await nextTick();
    }).catch(async  (err) => {
      console.log(err)
    })
  })

  watch(category, async (newCategory) => {
    if (newCategory?._id != null) {
      try {
        termekek.value = await getTermekekByCategory(newCategory?._id)
        console.log(termekek.value)
      } catch (error) {
        console.log(error)
      }
    }
    else{
      console.log(newCategory._id)
    }
  })

</script>

<template>
  <div>
    Kategória {{ category?.name}}
  </div>
</template>

<style scoped>

</style>
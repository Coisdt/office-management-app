<template>
  <div class="relative w-full md:max-w-[400px] lg:max-w-[400px] mb-4 mt-6">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search staff members..."
      class="mb-4 p-2 border rounded relative w-full"
    />
    <font-awesome-icon class="absolute top-3 right-3" icon="search" />
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from "vue";

const emit = defineEmits(["update:searchQuery"]);
const searchQuery = ref("");

watch(searchQuery, (newQuery) => {
  emit("update:searchQuery", newQuery);
});
</script>

<style lang="scss" scoped></style>

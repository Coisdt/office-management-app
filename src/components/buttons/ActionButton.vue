<template>
  <div>
    <!-- Button for small and medium screens -->
    <button
      class="fixed bottom-2 right-2 bg-[--action] hover:bg-[--action] text-white rounded-full shadow-lg size-12 lg:hidden"
    >
      <font-awesome-icon :icon="['fas', 'plus']" class="icon lg:hidden" />
      <span v-if="text" class="hidden lg:inline-block text-white">{{
        text
      }}</span>
      <slot></slot>
    </button>

    <!-- Button for large screens -->
    <button
      class="hidden lg:inline-block bg-[--action] hover:bg-[--action] text-white rounded-md shadow-lg px-4 py-2"
    >
      <font-awesome-icon :icon="['fas', 'plus']" class="icon lg:hidden" />
      <span v-if="text" class="hidden lg:inline-block text-white">{{
        text
      }}</span>
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="css" scoped></style>

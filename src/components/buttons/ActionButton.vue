<template>
  <div class="">
    <button
      class="fixed bottom-2 right-2 bg-[#0D4477] hover:bg-[#0D4477] text-white rounded-full shadow-lg size-12"
      @click="handleAction"
    >
      <font-awesome-icon :icon="['fas', 'plus']" class="icon" />

      <slot name=""></slot>
    </button>
  </div>
</template>

<script setup>
const handleAction = () => {
  console.log("Action button clicked");
};
</script>

<style lang="css" scoped></style>

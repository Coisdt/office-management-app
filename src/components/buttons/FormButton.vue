<template>
  <button :style="buttonStyle">
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Click Me",
  },
  backgroundColor: {
    type: String,
    default: "#F8FAFC",
  },
  fontColor: {
    type: String,
    default: "white",
  },
});

const buttonStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.fontColor,
  padding: "10px 20px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  width: "70%",
  display: "block",
  margin: "0 auto",
}));
</script>

<style scoped>
button {
  font-size: 12px;
}
</style>

<template>
  <button :style="buttonStyle" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Click Me",
  },
  backgroundColor: {
    type: String,
    default: "#489DDA",
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

const handleClick = () => {
  console.log("Button clicked!");
};
</script>

<style scoped>
button {
  font-size: 16px;
  font-weight: bold;
}
</style>

<template>
  <div class="confirmation-modal">
    <div class="grid grid-cols-[auto_auto] gap-3 items-baseline">
      <font-awesome-icon
        class="cursor-pointer mt-2"
        @click="navigateBack"
        icon="arrow-left"
      />
      <p class="font-bold">{{ message }}</p>
    </div>

    <div class="buttons grid gap-2 mt-5">
      <FormButton
        :text="'DELETE STAFF MEMBER'"
        :backgroundColor="'red'"
        @click="confirm"
      />
      <FormButton
        :text="'KEEP STAFF MEMBER'"
        :fontColor="'#489DDA'"
        @click="close"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import FormButton from "../buttons/FormButton.vue";

const emit = defineEmits(["close", "confirm"]);
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const confirm = () => {
  emit("confirm");
};

const close = () => {
  emit("close");
};

const navigateBack = () => {
  emit("close");
};
</script>

<style scoped></style>

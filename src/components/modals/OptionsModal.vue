<template>
  <div class="grid gap-2">
    <FormButton :text="'EDIT STAFF MEMBER'" @click="submitForm" />
    <FormButton
      :text="'DELETE STAFF MEMBER'"
      :backgroundColor="'white'"
      :fontColor="'red'"
    />
  </div>
</template>

<script setup>
import FormButton from "../buttons/FormButton.vue";
const emit = defineEmits(["close", "open-new-modal"]);

function submitForm() {
  closeCurrentModal();
  openNewModal();
}
function closeCurrentModal() {
  // Logic to close the current modal
  emit("close");
  console.log("Closing current modal");
}
function openNewModal() {
  // Logic to open the new modal
  emit("open-new-modal");
  console.log("Opening new modal");
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="grid gap-2">
    <FormButton
      :text="'EDIT STAFF MEMBER'"
      :backgroundColor="'#489DDA'"
      @click="editStaffMember"
    />
    <FormButton
      :text="'DELETE STAFF MEMBER'"
      :fontColor="'red'"
      @click="openConfirmationModal"
    />
  </div>
</template>

<script setup>
import FormButton from "../buttons/FormButton.vue";

const emit = defineEmits([
  "close",
  "open-edit-modal",
  "open-confirmation-modal",
]);

let props = defineProps({
  staffMember: {
    type: Object,
    required: true,
    default: () => [],
  },
  office: {
    type: Object,
    required: true,
    default: () => [],
  },
});

function editStaffMember() {
  closeCurrentModal();
  openNewModal();
}
function closeCurrentModal() {
  emit("close");
}
function openNewModal() {
  emit("open-edit-modal");
}

function openConfirmationModal() {
  emit("open-confirmation-modal");
  closeCurrentModal();
}

//TODO: toast succuss
</script>

<style lang="scss" scoped></style>

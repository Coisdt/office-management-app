<template>
  <div class="grid gap-2">
    <FormButton :text="'EDIT STAFF MEMBER'" @click="editStaffMember" />
    <FormButton
      :text="'DELETE STAFF MEMBER'"
      :backgroundColor="'white'"
      :fontColor="'red'"
      @click="openConfirmationModal"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import FormButton from "../buttons/FormButton.vue";

const emit = defineEmits([
  "close",
  "open-edit-modal",
  "open-confirmation-modal",
]); //TODO: give specific emits to different modals esp ays one

const store = useStore();

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
  console.log("Closing current modal");
}
function openNewModal() {
  emit("open-edit-modal");
  console.log("open-edit-modal");
}

function openConfirmationModal() {
  emit("open-confirmation-modal");
  console.log("Opening confirmation modal");
  closeCurrentModal();
}

//TODO: toast succuss
</script>

<style lang="scss" scoped></style>

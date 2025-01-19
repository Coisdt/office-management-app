<template>
  <div class="grid grid-cols-[1fr_5fr_1fr] gap-4 items-center relative">
    <img
      class="border-2 border-white rounded-full shadow-lg size-10"
      :src="getAvatarPath(staffMember.imageId)"
      alt="Staff Avatar"
    />
    <h2 class="text-sm">
      {{ staffMember.firstName }} {{ staffMember.lastName }}
    </h2>
    <font-awesome-icon
      @click="openModal"
      class="absolute right-0 cursor-pointer"
      :icon="['fas', 'ellipsis-v']"
    />

    <Modal v-if="isOpen" @close="closeModal">
      <div>
        <OptionsModal
          v-if="isOptionsModalVisible"
          @close="closeOptionsModal"
          @open-new-modal="openNewModal"
        />
        <FormModal
          :staffMember="staffMember"
          :office="props.office"
          v-if="isNewModalVisible"
          @close="closeNewModal"
        />
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import avatars from "../assets/avatars/avatars.js";
import Modal from "./modals/BaseModal.vue";
import OptionsModal from "./modals/OptionsModal.vue";
import FormModal from "./modals/AddOrEditStaffModal.vue";
import AddOrEditOfficePage from "../views/AddOrEditOfficePage.vue";

let props = defineProps({
  staffMember: {
    type: Object,
    required: true,
    default: () => [],
  },
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const isOpen = ref(false);
const isOptionsModalVisible = ref(true);
const isNewModalVisible = ref(false);

// Method to map the ID to the image path
const getAvatarPath = (imageId) => {
  return avatars[imageId].src;
};

const openModal = () => {
  isOpen.value = true;
  isOptionsModalVisible.value = true;
};

const closeOptionsModal = () => {
  isOptionsModalVisible.value = false;
};

const openNewModal = () => {
  isOptionsModalVisible.value = false;
  isNewModalVisible.value = true;
};

const closeNewModal = () => {
  isNewModalVisible.value = false;
  isOpen.value = false;
};

const closeModal = () => {
  isOpen.value = false;
  isOptionsModalVisible.value = false;
  isNewModalVisible.value = false;
};
</script>

<style scoped></style>

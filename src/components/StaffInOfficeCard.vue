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
      @click="openOptionsModal"
      class="absolute right-0 cursor-pointer"
      :icon="['fas', 'ellipsis-v']"
    />

    <Modal
      v-if="isOptionsModalOpen"
      @close="closeOptionsModal"
      :showCloseButton="false"
    >
      <div>
        <OptionsModal
          @close="closeOptionsModal"
          @open-edit-modal="openEditModal"
          @open-confirmation-modal="openConfirmationModal"
          :office="props.office"
          :staffMember="props.staffMember"
        />
      </div>
    </Modal>

    <Modal v-if="isEditModalOpen" @close="closeEditModal">
      <div>
        <FormModal
          @close="closeEditModal"
          :staffMember="staffMember"
          :office="props.office"
        />
      </div>
    </Modal>

    <Modal
      v-if="isConfirmationModalOpen"
      @close="closeConfirmationModal"
      :showCloseButton="false"
    >
      <div>
        <ConfirmationModal
          @close="closeConfirmationModal"
          @confirm="deleteStaffMember"
          message="Are you sure you want to delete this staff member?"
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
import ConfirmationModal from "./modals/ConfirmationModal.vue";
import { useStore } from "vuex";

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

const isOptionsModalOpen = ref(false);
const isEditModalOpen = ref(false);
const isConfirmationModalOpen = ref(false);
const store = useStore();

// Method to map the ID to the image path
const getAvatarPath = (imageId) => {
  return avatars[imageId].src;
};

const openOptionsModal = () => {
  isOptionsModalOpen.value = true;
};

const closeOptionsModal = () => {
  isOptionsModalOpen.value = false;
};

const openEditModal = () => {
  isOptionsModalOpen.value = false;
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
};

const openConfirmationModal = () => {
  isOptionsModalOpen.value = false;
  isConfirmationModalOpen.value = true;
};

const closeConfirmationModal = () => {
  isConfirmationModalOpen.value = false;
};

const deleteStaffMember = async () => {
  if (props.staffMember && props.office) {
    try {
      await store.dispatch("deleteStaffMember", {
        officeId: props.office.id,
        staffMemberId: props.staffMember.id,
      });
      closeConfirmationModal();
    } catch (error) {
      console.error("Error deleting staff member:", error);
    }
  }
};
</script>

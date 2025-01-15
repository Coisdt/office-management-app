<template>
  <div class="grid grid-cols-[1fr_5fr_1fr] gap-4 items-center relative">
    <img
      class="border-2 border-white rounded-full shadow-lg size-10"
      :src="getAvatarPath(staffMember.imageId)"
      alt="Staff Avatar"
    />
    <h2 class="text-sm">{{ staffMember.name }}</h2>
    <font-awesome-icon
      @click="staffMemberOptions"
      class="absolute right-0"
      :icon="['fas', 'ellipsis-v']"
    />
  </div>
</template>

<script setup>
import avatars from "../assets/avatars/avatars.js";

let props = defineProps({
  staffMember: {
    type: Object,
    required: true,
    default: () => [],
  },
});

// Method to handle staff member options
const staffMemberOptions = () => {
  console.log(`Staff member ${props.staffMember.name} options clicked`);
};

// Method to map the ID to the image path
const getAvatarPath = (imageId) => {
  return avatars[imageId].src;
};
</script>

<style scoped></style>

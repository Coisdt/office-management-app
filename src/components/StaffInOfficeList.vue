<template>
  <div>
    <!-- Search Input -->
    <Searchbar v-model:searchQuery="searchQuery" />

    <!-- Staff Members -->
    <h1 class="text-xl font-bold mb-2 mt-4">Staff Members in Office</h1>
    <div
      class="staff-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      v-if="filteredStaffMembers.length"
    >
      <StaffInOfficeCard
        v-for="staffMember in filteredStaffMembers"
        :key="staffMember.id"
        :staffMember="staffMember"
      />
    </div>
    <div v-else>
      <p v-if="!props.office.staffMembersInOffice.length">
        There are currently no staff members assigned to this office.
      </p>
      <p v-else>No staff members match your search for "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Searchbar from "./Searchbar.vue";
import StaffInOfficeCard from "./StaffInOfficeCard.vue";

const props = defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const searchQuery = ref("");

const filteredStaffMembers = computed(() => {
  if (!searchQuery.value) {
    return props.office.staffMembersInOffice;
  }
  return props.office.staffMembersInOffice.filter((staffMember) =>
    staffMember.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style lang="scss" scoped></style>

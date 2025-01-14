<template>
  <div>
    <!-- Staff Members -->
    <h1 class="text-xl font-bold mb-2 mt-4">Staff Members in Office</h1>
    <div
      class="staff-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      v-if="office.staffMembersInOffice.length"
    >
      <div
        v-for="staffMember in office.staffMembersInOffice"
        :key="staffMember.id"
        class="staff-card bg-white shadow rounded-lg p-4 flex flex-col"
      >
        <h3 class="text-lg font-bold">{{ staffMember.name }}</h3>
        <p class="text-gray-600">{{ staffMember.position }}</p>
        <p class="text-sm text-gray-500">{{ staffMember.email }}</p>
      </div>
    </div>
    <div v-else>
      <p>No staff members in this office</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="office-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <div
      v-for="office in offices"
      :key="office.id"
      class="cursor-pointer"
      @click="navigateToOffice(office.id)"
    >
      <OfficeDetailsCard :office="office" @stop-propagation="handleAction" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import OfficeDetailsCard from "./OfficeDetailsCard.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const offices = computed(() => store.state.offices);
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);

const router = useRouter();

// Navigate to the office page
const navigateToOffice = (id) => {
  console.log("Navigating to office", id);

  router.push(`/office/${id}`);
};

// Stop parent click propagation
const handleAction = (event) => {
  event.stopPropagation();
};
</script>

<style scoped></style>

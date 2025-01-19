<template>
  <div class="home-page">
    <h1 class="text-2xl font-bold mb-4">All Offices</h1>
    <OfficeDetailsList :offices="offices" />
    <ActionButton @click="navigateToAddOfficePage" />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import OfficeDetailsList from "../components/OfficeDetailsList.vue";
import ActionButton from "../components/buttons/ActionButton.vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const navigateToAddOfficePage = () => {
  router.push({
    name: "AddOrEditOfficePage",
    query: { mode: "add" },
  });
};

const store = useStore();
const isOpen = ref(false);

// Map state and actions
const offices = computed(() => store.state.offices);
const fetchOffices = store.dispatch;

onMounted(() => {
  fetchOffices("fetchOffices");
});
</script>

<style scoped>
.home-page {
  padding: 1rem;
}
</style>

<template>
  <div class="home-page">
    <h1 class="text-2xl font-bold mb-4">All Offices</h1>
    <OfficeDetailsList :offices="offices" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import OfficeDetailsList from "../components/OfficeDetailsList.vue";

const store = useStore();

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

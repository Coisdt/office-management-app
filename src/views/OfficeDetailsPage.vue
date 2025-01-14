<template>
  <div class="office-details-page">
    <!-- navigation -->
    <!-- //TODO: Add navigation here -->
    <p>Navigation</p>

    <!-- office details card-->
    <OfficeDetailsCard :office="office" />

    <!-- search -->
    <!-- //TODO: Add search here -->
    <p>Search feature</p>

    <!-- staff members -->
    <!-- //TODO: Add staff members here -->
    <p>Staff members</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import OfficeDetailsCard from "../components/OfficeDetailsCard.vue";

// TODO: Replace this with your actual data or a Vuex store
const officeList = [
  {
    id: 1,
    name: "Main Office",
    description: "Headquarters",
    occupants: 10,
    selectedColor: "blue",
    phoneNumber: "123 456 7890",
    address: "123 Main St, Cityville, Country",
    email: "mainoffice@company.com",
    capacity: 20,
  },
  {
    id: 2,
    name: "Branch A",
    description: "Downtown office",
    occupants: 5,
    selectedColor: "green",
    phoneNumber: "234 567 8901",
    address: "456 Elm St, Downtown, Country",
    email: "brancha@company.com",
    capacity: 10,
  },
  {
    id: 3,
    name: "Branch B",
    description: "Suburban office",
    occupants: 8,
    selectedColor: "purple",
    phoneNumber: "345 678 9012",
    address: "789 Oak St, Suburbia, Country",
    email: "branchb@company.com",
    capacity: 8,
  },
  {
    id: 4,
    name: "Branch C",
    description: "Rural office",
    occupants: 3,
    selectedColor: "orange",
    phoneNumber: "456 789 0123",
    address: "101 Pine St, Countryside, Country",
    email: "branchc@company.com",
    capacity: 15,
  },
];

const route = useRoute();
const office = ref(null);

// Watch for route changes
watchEffect(() => {
  const officeId = parseInt(route.params.id); // Get the id from the URL
  office.value = officeList.find((office) => office.id === officeId); // Find the matching office
});
</script>

<style lang="css" scoped>
.office-details-page {
  padding: 1rem;
}
</style>

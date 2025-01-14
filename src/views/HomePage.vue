<template>
  <div class="home-page">
    <h1 class="text-2xl font-bold mb-4">All Offices</h1>
    <OfficeDetailsList :offices="officeList" />
  </div>
</template>

<script setup>
import OfficeDetailsList from "../components/OfficeDetailsList.vue";

//TODO: Replace this with getter from Vuex store
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
</script>

<style scoped>
.home-page {
  padding: 1rem;
}
</style>

<template>
  <div class="office-details-page">
    <!-- navigation -->
    <!-- //TODO: Add navigation here -->
    <span class="navigation relative">
      <font-awesome-icon
        @click="navigateToHome"
        class="absolute"
        icon="arrow-left"
      />
    </span>
    <span class="grid justify-center">Offices</span>

    <!-- office details card-->
    <OfficeDetailsCard :office="office" />

    <!-- search -->
    <!-- //TODO: Add search here -->
    <!-- <Searchbar class="my-4" /> -->

    <!-- staff members -->
    <!-- //TODO: Add staff members here -->
    <StaffInOfficeList :office="office" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import OfficeDetailsCard from "../components/OfficeDetailsCard.vue";
import Searchbar from "../components/Searchbar.vue";
import StaffInOfficeList from "../components/StaffInOfficeList.vue";

const router = useRouter();

// Navigate to the office page
const navigateToHome = () => {
  router.push("/");
};

// TODO: Replace this with your actual data or a Vuex store
const officeList = [
  {
    id: 1,
    name: "Main Office",
    description: "Headquarters",
    occupants: 10,
    selectedColor: "#489DDA",
    phoneNumber: "123 456 7890",
    address: "123 Main St, Cityville, Country",
    email: "mainoffice@company.com",
    capacity: 20,
    staffMembersInOffice: [
      {
        id: 1,
        name: "John Doe",
        position: "Manager",
        email: "john.doe@company.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Administrator",
        email: "jane.smith@company.com",
      },
      {
        id: 3,
        name: "Emily Johnson",
        position: "Accountant",
        email: "emily.johnson@company.com",
      },
    ],
  },
  {
    id: 2,
    name: "Branch A",
    description: "Downtown office",
    occupants: 5,
    selectedColor: "#FF9B71",
    phoneNumber: "234 567 8901",
    address: "456 Elm St, Downtown, Country",
    email: "brancha@company.com",
    capacity: 10,
    staffMembersInOffice: [
      {
        id: 4,
        name: "Alice Brown",
        position: "Team Lead",
        email: "alice.brown@company.com",
      },
      {
        id: 5,
        name: "Bob White",
        position: "Developer",
        email: "bob.white@company.com",
      },
    ],
  },
  {
    id: 3,
    name: "Branch B",
    description: "Suburban office",
    occupants: 8,
    selectedColor: "#DBBADD",
    phoneNumber: "345 678 9012",
    address: "789 Oak St, Suburbia, Country",
    email: "branchb@company.com",
    capacity: 8,
    staffMembersInOffice: [
      {
        id: 6,
        name: "Catherine Green",
        position: "Designer",
        email: "catherine.green@company.com",
      },
      {
        id: 7,
        name: "David Black",
        position: "Engineer",
        email: "david.black@company.com",
      },
    ],
  },
  {
    id: 4,
    name: "Branch C",
    description: "Rural office",
    occupants: 3,
    selectedColor: "#A9F0D1",
    phoneNumber: "456 789 0123",
    address: "101 Pine St, Countryside, Country",
    email: "branchc@company.com",
    capacity: 15,
    staffMembersInOffice: [
      // {
      //   id: 8,
      //   name: "Evelyn Gray",
      //   position: "Supervisor",
      //   email: "evelyn.gray@company.com",
      // },
      // {
      //   id: 9,
      //   name: "Frank Blue",
      //   position: "Assistant",
      //   email: "frank.blue@company.com",
      // },
    ],
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

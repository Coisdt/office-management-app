<template>
  <div
    class="office-card bg-white shadow rounded-lg p-4 flex flex-col border-l-[12px]"
    :style="{ borderColor: office.selectedColor }"
  >
    <!-- header -->
    <div class="flex gap-3 items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">{{ office.name }}</h2>
      <font-awesome-icon icon="pencil" />
    </div>

    <!-- office occupants -->
    <div>
      <font-awesome-icon :icon="['fas', 'users']" />
      <span class="text-sm text-gray-600 mb-4 ml-2 font-bold">
        {{ office.staffMembersInOffice.length || 0 }}
      </span>
      <span class="text-sm text-gray-600 mb-4 ml-2"
        >Staff Members in Office</span
      >
    </div>

    <!-- Divider line -->
    <hr class="border-gray-400 my-4" />

    <!-- More Info Toggle -->
    <div class="grid items-center mt-2">
      <div class="flex justify-center">
        <button
          class="text-xs justify-self-center"
          @click.stop="toggleMoreInfo = !toggleMoreInfo"
        >
          {{ toggleMoreInfo ? "Hide Info" : "More Info" }}
        </button>
        <font-awesome-icon
          :icon="toggleMoreInfo ? 'chevron-up' : 'chevron-down'"
          class="ml-2 text-gray-500"
        />
      </div>

      <transition name="fade">
        <div v-if="toggleMoreInfo" class="grid gap-4 text-sm mt-4">
          <div class="grid grid-cols-1 gap-4 text-xs">
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="phone" class="mr-2 text-gray-600" />
              {{ office.phoneNumber || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="envelope" class="mr-2 text-gray-600" />
              {{ office.email || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="building" class="mr-2 text-gray-600" />
              Capacity: {{ office.capacity || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon
                icon="map-marker-alt"
                class="mr-2 text-gray-600"
              />
              {{ office.address || "N/A" }}
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!--  -->
  </div>
</template>

<script setup>
import { ref } from "vue";

//TODO: add color picker to create office screen and save selected color
defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const toggleMoreInfo = ref(false);
</script>

<style scoped>
.office-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.office-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>

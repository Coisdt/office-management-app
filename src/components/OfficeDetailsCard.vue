<template>
  <div
    class="office-card bg-white shadow rounded-lg p-3 flex flex-col border-l-[12px] md:max-w-[18rem]"
    :style="{ borderColor: getColorById(office.selectedColor) }"
  >
    <!-- header -->
    <div class="flex gap-3 items-center justify-between mb-2">
      <h2 class="text-xl font-semibold">{{ office.name }}</h2>
      <font-awesome-icon
        icon="pencil"
        @click.stop="navigateToEditOfficePage(office.id)"
        class="hover:scale-125 cursor-pointer"
      />
    </div>

    <!-- office occupants -->
    <div>
      <font-awesome-icon :icon="['fas', 'users']" />
      <span class="text-sm text-gray-600 mb-2 ml-2 font-bold">
        {{ office.staffMembersInOffice.length || 0 }}
      </span>
      <span class="text-sm text-gray-600 mb-2 ml-2"
        >Staff Members in Office</span
      >
    </div>

    <!-- Divider line -->
    <hr class="border-gray-400 my-2" />

    <!-- More Info Toggle button -->
    <div class="grid items-center mt-1">
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
      <!-- more info container -->
      <transition name="fade">
        <div v-if="toggleMoreInfo" class="grid gap-4 text-sm mt-4">
          <div class="grid grid-cols-1 gap-4 text-xs">
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="phone" class="icon mr-2" />
              {{ office.phoneNumber || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="envelope" class="icon mr-2" />
              {{ office.email || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="building" class="icon mr-2" />
              Capacity: {{ office.capacity || "N/A" }}
            </div>
            <div class="grid grid-cols-[20px_1fr] items-center">
              <font-awesome-icon icon="map-marker-alt" class="icon mr-2" />
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
import { colorsPickerColors } from "../assets/colors/colorsPickerColors";
import { useRouter } from "vue-router";

const props = defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const toggleMoreInfo = ref(false);
const router = useRouter();

//methods
const getColorById = (colorId) => {
  const colorObject = colorsPickerColors.find((color) => color.id === colorId);
  return colorObject ? colorObject.color : null;
};

const navigateToEditOfficePage = (officeId) => {
  router.push({
    name: "AddOrEditOfficePage",
    params: { id: officeId },
    query: { mode: "edit" },
  });
};
</script>

<style scoped>
.office-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.office-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.icon {
  color: var(--primary);
}
</style>

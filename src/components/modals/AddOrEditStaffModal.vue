<template>
  <div v-if="nextSlide">
    <h2 class="font-bold text-xl">
      {{ props.staffMember ? "Edit Staff Member" : "New Staff Member" }}
    </h2>

    <!-- Form Slide -->
    <form
      @submit.prevent="handleSubmit"
      class="md:w-[70%] lg:w-[70%] items-center my-0 mx-auto p-3"
    >
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2 w-[90%]"
          type="text"
          id="firstName"
          required
          v-model="firstName"
          placeholder="First name"
        />
      </div>
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2 w-[90%]"
          type="text"
          id="lastName"
          required
          v-model="lastName"
          placeholder="Last name"
        />
      </div>
    </form>
    <div class="carousel-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
    </div>

    <!-- Next Slide -->
    <div class="modal-actions mt-4">
      <FormButton
        :text="'NEXT'"
        :backgroundColor="'#489DDA'"
        @click="toggleNextSlide"
      />
    </div>
  </div>
  <!-- Choose Avatar Slide -->
  <div v-else>
    <span class="navigation grid grid-cols-[auto_1fr] items-center gap-2">
      <font-awesome-icon
        class="cursor-pointer"
        @click="navigateBack"
        icon="arrow-left"
      />
      <h2 class="font-bold text-xl">
        {{ props.staffMember ? "Edit Staff Member" : "New Staff Member" }}
      </h2>
    </span>

    <div
      class="avatars-container p-4 grid grid-cols-2 items-center my-0 mx-auto"
    >
      <div
        v-for="avatar in avatars"
        :key="avatar.id"
        :class="['avatar', { selected: imageId === avatar.id - 1 }]"
      >
        <img
          :src="avatar.src"
          :alt="'Avatar ' + avatar.id"
          @click="imageId = avatar.id - 1"
        />
      </div>
    </div>

    <!-- carousel icons -->
    <div class="carousel-dots mb-4">
      <span class="dot"></span>
      <span class="dot active"></span>
    </div>

    <!-- show Empty Fields Error -->
    <div class="text-red-500 text-center" v-show="showEmptyFieldsError">
      Please complete all required fields
    </div>

    <!-- action buttons -->
    <FormButton
      :text="props.staffMember ? 'UPDATE STAFF MEMBER' : 'ADD STAFF MEMBER'"
      :backgroundColor="'#489DDA'"
      @click="submitForm"
    />
  </div>
</template>
<script setup>
import { defineEmits, ref, watch, computed } from "vue";
import FormButton from "../buttons/FormButton.vue";
import { useStore } from "vuex";
import avatars from "../../assets/avatars/avatars.js";

const emit = defineEmits(["close"]);

// Props
const props = defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  staffMember: {
    type: Object,
    default: null, // null if creating a new staff member
  },
});

// Data
const nextSlide = ref(true);
const firstName = ref("");
const lastName = ref("");
const imageId = ref("");
const showEmptyFieldsError = ref(false);

const store = useStore();

const isFormValid = computed(() => {
  return (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    imageId.value !== ""
  );
});

watch(
  () => props.staffMember,
  (newVal) => {
    if (newVal) {
      firstName.value = newVal.firstName || "";
      lastName.value = newVal.lastName || "";
      imageId.value = newVal.imageId || "";
    } else {
      firstName.value = "";
      lastName.value = "";
      imageId.value = "";
    }
  },
  { immediate: true }
);

// Methods
function navigateBack() {
  nextSlide.value = !nextSlide.value;
}

function toggleNextSlide() {
  nextSlide.value = !nextSlide.value;
}

async function submitForm() {
  if (!isFormValid.value) {
    showEmptyFieldsError.value = true;
    return;
  }

  const staffMemberData = {
    firstName: firstName.value,
    lastName: lastName.value,
    imageId: imageId.value,
  };

  try {
    if (props.staffMember) {
      // Editing existing staff member
      store.dispatch("editStaffMember", {
        officeId: props.office.id,
        staffMemberId: props.staffMember.id,
        staffMember: staffMemberData,
      });
    } else {
      // Creating a new staff member
      store.dispatch("addStaffMember", {
        officeId: props.office.id,
        staffMember: staffMemberData,
      });
      await store.dispatch("fetchOffices");
    }

    emit("close");
  } catch (error) {
    console.error("Failed to submit form", error);
  }
}
</script>
<style lang="css" scoped>
.avatars-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.avatar img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.avatar img:hover,
.avatar img:active {
  border: 1px solid #489dda !important;
  scale: 1.1 !important;
}
.avatar.selected img {
  border: 1px solid #489dda;
  scale: 1.1;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #489dda;
}
</style>

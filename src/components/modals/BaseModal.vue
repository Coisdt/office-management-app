<template>
  <Teleport to="#modals">
    <div class="modal">
      <div
        class="modal-content w-[90%] sm:w-[80%] md:w-[60%] lg:w-[30%] xl:w-[30%] max-h-[90vh] overflow-auto grid grid-cols-1 relative"
      >
        <span
          v-if="props.showCloseButton"
          class="float-right close absolute right-2 top-2 border border-black rounded-full shadow-lg size-6"
          @click="closeModal"
        >
          <font-awesome-icon
            class="absolute top-[5px] right-[5px] size-3 cursor-pointer"
            :icon="['fas', 'times']"
          />
        </span>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  showCloseButton: {
    type: Boolean,
    default: true,
  },
});

function closeModal() {
  emit("close");
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #f8fafc;
  padding: 10px;
  border-radius: 5px;
}
</style>

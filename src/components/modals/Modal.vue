<template>
  <Teleport to="#modals">
    <div class="modal">
      <div class="modal-content w-[90%] md:w-[50%] lg:w-[50%]">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup></script>

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
  background: white;
  padding: 10px;
  border-radius: 5px;
}
</style>

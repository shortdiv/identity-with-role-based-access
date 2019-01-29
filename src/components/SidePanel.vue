<template>
  <div>
    <button @click="openModal">Account</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SidePanel",
  methods: {
    ...mapActions("auth", ["openIdentityModal"]),
    openModal() {
      this.openIdentityModal();
    }
  }
};
</script>

<style scoped></style>

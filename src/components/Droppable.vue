<template>
  <div @drop="onDrop">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(event) {
      this.$emit("dropped", JSON.parse(event.dataTransfer.getData("payload")));
    },
  },
};
</script>

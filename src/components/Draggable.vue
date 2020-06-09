<template>
  <div draggable @dragover.prevent @dragenter.prevent @dragstart.self="onDrag">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    dataTransfer: {
      required: true,
      type: Object,
    },
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.dropEffect = "move";
      dataTransfer.effectAllowed = "move";
      dataTransfer.setData("payload", JSON.stringify(this.dataTransfer));
    },
  },
};
</script>

<template>
  <div
    class="shadow p-2 rounded bg-white"
    draggable
    @dragstart="onDragStart"
    @click="onClick"
  >
    <div class="font-semibold">{{ item.name }}</div>
    <p v-if="item.description" class="text-sm mt-1">
      {{ item.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
    column: {
      required: true,
      type: Object,
    },
  },
  methods: {
    onClick() {
      this.$router.push({ name: "item", params: { id: this.item.id } });
    },
    onDragStart({ dataTransfer }) {
      dataTransfer.dropEffect = "move";
      dataTransfer.effectAllowed = "move";
      dataTransfer.setData("itemId", this.item.id);
      dataTransfer.setData("columnId", this.column.id);
      dataTransfer.setData("type", "item");
    },
  },
};
</script>

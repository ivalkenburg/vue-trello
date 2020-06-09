<template>
  <Draggable
    :dataTransfer="{ type: 'item', itemId: item.id, columnId: column.id }"
    @click="onClick"
    class="shadow p-2 rounded bg-white"
  >
    <div class="font-semibold">{{ item.name }}</div>
    <p v-if="item.description" class="text-sm mt-1">
      {{ item.description }}
    </p>
  </Draggable>
</template>

<script>
import Draggable from "./Draggable";

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
  components: {
    Draggable,
  },
  methods: {
    onClick() {
      this.$router.push({ name: "item", params: { id: this.item.id } });
    },
  },
};
</script>

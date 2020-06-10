<template>
  <Droppable @dropped="onDrop">
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
  </Droppable>
</template>

<script>
import Draggable from "./Draggable.vue";
import Droppable from "./Droppable.vue";
import { mapGetters } from "vuex";

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
    itemIndex: {
      required: true,
      type: Number,
    },
  },
  components: {
    Draggable,
    Droppable,
  },
  computed: {
    ...mapGetters(["getColumn", "getItem"]),
  },
  methods: {
    onClick() {
      this.$router.push({ name: "item", params: { id: this.item.id } });
    },
    onDrop({ type, itemId, columnId }) {
      if (type !== "item") {
        return;
      }

      this.$store.commit("MOVE_ITEM", {
        item: this.getItem(itemId),
        sourceColumn: this.getColumn(columnId),
        targetColumn: this.column,
        targetIndex: this.itemIndex,
      });
    },
  },
};
</script>

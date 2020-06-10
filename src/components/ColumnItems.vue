<template>
  <Droppable @dropped="onDrop" class="space-y-2">
    <ColumnItem
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      :itemIndex="index"
      :column="column"
    />
    <input
      type="text"
      class="block bg-transparent w-full p-2 outline-none"
      placeholder="+ Add a new item"
      @keyup.enter="add"
    />
  </Droppable>
</template>

<script>
import { mapGetters } from "vuex";
import ColumnItem from "./ColumnItem.vue";
import Droppable from "./Droppable.vue";

export default {
  props: {
    column: {
      required: true,
      type: Object,
    },
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    ColumnItem,
    Droppable,
  },
  computed: {
    ...mapGetters(["getItem", "getColumn"]),
  },
  methods: {
    onDrop({ type, columnId, itemId }) {
      if (type !== "item" || this.items.length > 0) {
        return;
      }

      this.$store.commit("MOVE_ITEM", {
        item: this.getItem(itemId),
        sourceColumn: this.getColumn(columnId),
        targetColumn: this.column,
      });
    },
    add({ target }) {
      this.$store.commit("ADD_ITEM", {
        name: target.value,
        column: this.column,
      });

      target.value = "";
    },
  },
};
</script>

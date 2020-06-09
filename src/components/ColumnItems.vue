<template>
  <div class="space-y-2" @drop="onDrop" @dragover.prevent @dragenter.prevent>
    <ColumnItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :column="column"
    />
    <input
      type="text"
      class="block bg-transparent w-full p-2 outline-none"
      placeholder="+ Add a new item"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ColumnItem from "./ColumnItem.vue";

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
  },
  computed: {
    ...mapGetters(["getItem", "getColumn"]),
  },
  methods: {
    onDrop({ dataTransfer }) {
      if (dataTransfer.getData("type") !== "item") {
        return;
      }

      const item = this.getItem(dataTransfer.getData("itemId"));
      const sourceColumn = this.getColumn(dataTransfer.getData("columnId"));

      this.$store.commit("MOVE_ITEM", {
        item,
        sourceColumn,
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

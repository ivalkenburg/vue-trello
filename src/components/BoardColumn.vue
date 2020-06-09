<template>
  <div
    class="bg-gray-200 p-2 text-left shadow rounded"
    style="min-width: 330px;"
    draggable
    @dragstart.self="onDragStart"
    @drop="onDrop"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="mb-2 mx-2 font-bold">
      {{ column.name }}
    </div>
    <ColumnItems :items="column.items" :column="column" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ColumnItems from "../components/ColumnItems.vue";

export default {
  props: {
    column: {
      required: true,
      type: Object,
    },
  },
  components: {
    ColumnItems,
  },
  computed: {
    ...mapGetters(["getColumn"]),
  },
  methods: {
    onDragStart({ dataTransfer }) {
      dataTransfer.dropEffect = "move";
      dataTransfer.effectAllowed = "move";
      dataTransfer.setData("columnId", this.column.id);
      dataTransfer.setData("type", "column");
    },
    onDrop({ dataTransfer }) {
      if (dataTransfer.getData("type") !== "column") {
        return;
      }

      this.$store.commit("MOVE_COLUMN", {
        column: this.getColumn(dataTransfer.getData("columnId")),
        targetColumn: this.column,
      });
    },
  },
};
</script>

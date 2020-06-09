<template>
  <Droppable @dropped="onDropped">
    <Draggable
      :dataTransfer="{ columnId: column.id, type: 'column' }"
      class="bg-gray-200 p-2 text-left shadow rounded"
      style="min-width: 330px;"
    >
      <div class="mb-2 mx-2 font-bold">
        {{ column.name }}
      </div>
      <ColumnItems :items="column.items" :column="column" />
    </Draggable>
  </Droppable>
</template>

<script>
import { mapGetters } from "vuex";
import ColumnItems from "./ColumnItems.vue";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

export default {
  props: {
    column: {
      required: true,
      type: Object,
    },
  },
  components: {
    ColumnItems,
    Draggable,
    Droppable,
  },
  computed: {
    ...mapGetters(["getColumn"]),
  },
  methods: {
    onDropped({ type, columnId }) {
      if (type !== "column") {
        return;
      }

      this.$store.commit("MOVE_COLUMN", {
        column: this.getColumn(columnId),
        targetColumn: this.column,
      });
    },
  },
};
</script>

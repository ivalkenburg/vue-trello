<template>
  <div class="p-4 bg-teal-600 h-full overflow-auto">
    <div class="inline-flex flex-row items-start space-x-2">
      <BoardColumn
        v-for="column in board.columns"
        :key="column.id"
        :column="column"
      />
      <AddBoardColumn />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoardColumn from "../components/BoardColumn.vue";
import AddBoardColumn from "../components/AddBoardColumn.vue";

export default {
  name: "Board",
  components: {
    BoardColumn,
    AddBoardColumn,
  },
  computed: {
    ...mapState(["board"]),
  },
};
</script>

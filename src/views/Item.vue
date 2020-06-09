<template>
  <div class="absolute inset-0 bg-black bg-opacity-25" @click.self="close">
    <div
      class="bg-white m-32 mx-auto p-4 rounded shadow-lg"
      style="max-width: 600px;"
    >
      <input
        class="block w-full border border-gray-200 outline-none p-2 mb-2 font-semibold rounded"
        type="text"
        name="name"
        :value="item.name"
        @change="onChange"
      />
      <textarea
        class="block w-full border border-gray-200 outline-none p-2 h-48 text-sm rounded"
        name="description"
        :value="item.description"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    close() {
      this.$router.push({ name: "board" });
    },
    onKeyDown(event) {
      if (event.code === "Escape") {
        document.activeElement.blur(); // to fire input change state before destroy
        this.close();
      }
    },
    onChange(event) {
      this.$store.commit("UPDATE_ITEM", {
        item: this.item,
        field: event.target.name,
        value: event.target.value,
      });
    },
  },
  computed: {
    ...mapGetters(["getItem"]),
    item() {
      return this.getItem(this.$route.params.id);
    },
  },
  mounted() {
    addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    removeEventListener("keydown", this.onKeyDown);
  },
};
</script>

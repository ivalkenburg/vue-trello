<template>
  <div
    class="bg-gray-200 p-2 text-left shadow rounded"
    style="min-width: 330px;"
  >
    <input
      class="px-2 outline-none font-bold bg-transparent block w-full"
      type="text"
      @keyup.enter="add"
      placeholder="+ Add a new column"
    />
  </div>
</template>

<script>
export default {
  methods: {
    add({ target }) {
      this.$store.commit("ADD_COLUMN", { name: target.value });
      target.value = "";
    },
  },
};
</script>

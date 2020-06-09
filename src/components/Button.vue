<template>
  <button
    :type="submit ? 'submit' : 'button'"
    class="inline-flex px-4 py-2 text-white font-bold rounded items-center"
    :class="[danger ? 'bg-red-500' : 'bg-teal-500']"
  >
    <slot />
  </button>
</template>

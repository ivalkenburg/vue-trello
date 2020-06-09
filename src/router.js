import Vue from "vue";
import VueRouter from "vue-router";
import Board from "./views/Board.vue";
import Item from "./views/Item.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "board",
      component: Board,
      children: [
        {
          path: ":id",
          name: "item",
          component: Item,
        },
      ],
    },
  ],
});

export default router;

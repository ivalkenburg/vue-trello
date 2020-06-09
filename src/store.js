import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "./default";
import { nanoid } from "nanoid";

Vue.use(Vuex);

const saveState = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("board", JSON.stringify(state.board));
  });
};

const state = {
  board: JSON.parse(localStorage.getItem("board")) || defaultBoard,
};

const mutations = {
  ADD_ITEM(state, { name, column }) {
    column.items.push({ id: nanoid(), name, description: null, user: null });
  },
  UPDATE_ITEM(state, { item, field, value }) {
    item[field] = value;
  },
  MOVE_ITEM(state, { item, sourceColumn, targetColumn }) {
    const itemIndex = sourceColumn.items.indexOf(item);

    sourceColumn.items.splice(itemIndex, 1);
    targetColumn.items.push(item);
  },
  ADD_COLUMN(state, { name }) {
    state.board.columns.push({ id: nanoid(), name, items: [] });
  },
  MOVE_COLUMN(state, { column, targetColumn }) {
    const columnIndex = state.board.columns.indexOf(column);
    const targetIndex = state.board.columns.indexOf(targetColumn);

    state.board.columns.splice(columnIndex, 1);
    state.board.columns.splice(targetIndex, 0, column);
  },
};

const getters = {
  getItem(state) {
    return (id) => {
      if (!id) {
        return null;
      }

      for (const column of state.board.columns) {
        for (const item of column.items) {
          if (item.id === id) {
            return item;
          }
        }
      }

      return null;
    };
  },
  getColumn(state) {
    return (id) => {
      if (!id) {
        return null;
      }

      return state.board.columns.find((column) => column.id === id);
    };
  },
};

export default new Vuex.Store({
  plugins: [saveState],
  state,
  mutations,
  getters,
});

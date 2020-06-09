import { nanoid } from "nanoid";

export default {
  id: nanoid(),
  name: "workshop",
  columns: [
    {
      id: nanoid(),
      name: "todo",
      items: [
        {
          id: nanoid(),
          name: "first task",
          description: "this is the first task yoo",
          user: null,
        },
        {
          id: nanoid(),
          name: "second task",
          description: null,
          user: null,
        },
        {
          id: nanoid(),
          name: "and thrid",
          description: null,
          user: null,
        },
      ],
    },
    {
      id: nanoid(),
      name: "in-progress",
      items: [
        {
          id: nanoid(),
          name: "first task",
          description: null,
          user: null,
        },
      ],
    },
    {
      id: nanoid(),
      name: "done",
      items: [
        {
          id: nanoid(),
          name: "first task",
          description: null,
          user: null,
        },
      ],
    },
  ],
};

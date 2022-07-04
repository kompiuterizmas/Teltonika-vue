import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        firstname: "petras",
        lastname: "petraitis",
        email: "patras@mail.com",
        password: "123456",
        birthdate: "1990-10-10",
        gender: "male",
        category: "cat1",
        subcat: "sub1",
        subsubcat: "subsub1",
      },
      {
        firstname: "jonas",
        lastname: "jonaitis",
        email: "jonas@mail.com",
        password: "123456",
        birthdate: "1990-12-12",
        gender: "male",
        category: "cat1",
        subcat: "sub1",
        subsubcat: "subsub1",
      },
      {
        firstname: "ona",
        lastname: "onaite",
        email: "ona@mail.com",
        password: "123456",
        birthdate: "1990-05-02",
        gender: "female",
        category: "cat1",
        subcat: "sub1",
        subsubcat: "subsub1",
      },
      {
        firstname: "maryte",
        lastname: "petraite",
        email: "maryte@mail.com",
        password: "123456",
        birthdate: "1990-04-07",
        gender: "female",
        category: "cat1",
        subcat: "sub1",
        subsubcat: "subsub1",
      },
    ],
    categories: [
      {
        id: "cat1",
        title: "category 1",
      },
      {
        id: "cat2",
        title: "category 2",
      },
      {
        id: "cat3",
        title: "category 3",
      },
    ],
    subcategories: [
      {
        id: "sub1",
        subtitle: "sub category 1",
      },
      {
        id: "sub2",
        subtitle: "sub category 2",
      },
      {
        id: "sub3",
        subtitle: "sub category 3",
      },
    ],
    subsubcategories: [
      {
        id: "subsub1",
        subsubtitle: "subsubcat1",
      },
      {
        id: "subsub2",
        subsubtitle: "subsubcat2",
      },
      {
        id: "subsub3",
        subsubtitle: "subsubcat3",
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user);
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
  },
  actions: {},
  modules: {},
});

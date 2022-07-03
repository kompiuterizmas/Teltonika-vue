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
        category: {},
      },
      {
        firstname: "jonas",
        lastname: "jonaitis",
        email: "jonas@mail.com",
        password: "123456",
        birthdate: "1990-12-12",
        gender: "male",
        category: {},
      },
      {
        firstname: "ona",
        lastname: "onaite",
        email: "ona@mail.com",
        password: "123456",
        birthdate: "1990-05-02",
        gender: "female",
        category: {},
      },
      {
        firstname: "maryte",
        lastname: "petraite",
        email: "maryte@mail.com",
        password: "123456",
        birthdate: "1990-04-07",
        gender: "female",
        category: {},
      },
    ],
    categories: [
      {
        id: 'cat1',
        title: "category 1",
        subcat: [
          {
            id: 'sub1',
            subtitle: 'sub category 1',
            subsubcat: [
              {
                id: 'subsub25',
                subsubtitle: "subsubcat25",
              },
              {
                id: 'subsub26',
                subsubtitle: "subsubcat26",
              },
              {
                id: 'subsub27',
                subsubtitle: "subsubcat27",
              }
            ]
          },
          {
            id: 'sub2',
            subtitle: 'sub category 2',
            subsubcat: [
              {
                id: 'subsub22',
                subsubtitle: "subsubcat22",
              },
              {
                id: 'subsub23',
                subsubtitle: "subsubcat23",
              },
              {
                id: 'subsub24',
                subsubtitle: "subsubcat24",
              }
            ]
          },
          {
            id: 'sub3',
            subtitle: 'sub category 3',
            subsubcat: [
              {
                id: 'subsub19',
                subsubtitle: "subsubcat19",
              },
              {
                id: 'subsub20',
                subsubtitle: "subsubcat20",
              },
              {
                id: 'subsub21',
                subsubtitle: "subsubcat21",
              }
            ]
          },
        ],
      },
      {
        id: 'cat2',
        title: "category 2",
        subcat: [
          {
            id: 'sub4',
            subtitle: 'sub category 1',
            subsubcat: [
              {
                id: 'subsub16',
                subsubtitle: "subsubcat16",
              },
              {
                id: 'subsub17',
                subsubtitle: "subsubcat17",
              },
              {
                id: 'subsub18',
                subsubtitle: "subsubcat18",
              }
            ]
          },
          {
            id: 'sub5',
            subtitle: 'sub category 2',
            subsubcat: [
              {
                id: 'subsub13',
                subsubtitle: "subsubcat13",
              },
              {
                id: 'subsub14',
                subsubtitle: "subsubcat14",
              },
              {
                id: 'subsub15',
                subsubtitle: "subsubcat15",
              }
            ]
          },
          {
            id: 'sub6',
            subtitle: 'sub category 3',
            subsubcat: [
              {
                id: 'subsub10',
                subsubtitle: "subsubcat10",
              },
              {
                id: 'subsub11',
                subsubtitle: "subsubcat11",
              },
              {
                id: 'subsub12',
                subsubtitle: "subsubcat12",
              }
            ]
          },
        ],
      },
      {
        id: 'cat3',
        title: "category 3",
        subcat: [
          {
            id: 'sub7',
            subtitle: 'sub category 7',
            subsubcat: [
              {
                id: 'subsub7',
                subsubtitle: "subsubcat7",
              },
              {
                id: 'subsub8',
                subsubtitle: "subsubcat8",
              },
              {
                id: 'subsub9',
                subsubtitle: "subsubcat9",
              }
            ]
          },
          {
            id: 'sub8',
            subtitle: 'sub category 8',
            subsubcat: [
              {
                id: 'subsub4',
                subsubtitle: "subsubcat4",
              },
              {
                id: 'subsub5',
                subsubtitle: "subsubcat5",
              },
              {
                id: 'subsub6',
                subsubtitle: "subsubcat6",
              }
            ]
          },
          {
            id: 'sub9',
            subtitle: 'sub category 9',
            subsubcat: [
              {
                id: 'subsub1',
                subsubtitle: "subsubcat1",
              },
              {
                id: 'subsub2',
                subsubtitle: "subsubcat2",
              },
              {
                id: 'subsub3',
                subsubtitle: "subsubcat3",
              }
            ]
          },
        ],
      }
    ]
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

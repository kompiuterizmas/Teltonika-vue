<template>
  <div class="user-form">
    <div><h1>Add new user</h1></div>
    <form @submit.prevent="addNewUser" id="userform">
      <label>enter new user first name:</label>
      <input type="text" placeholder="first name" v-model="newUser.firstname" />
      <label>enter new user last name:</label>
      <input type="text" placeholder="last name" v-model="newUser.lastname"/>
      <label>enter new user email address:</label>
      <input type="email" placeholder="e-mail" v-model="newUser.email"/>
      <label>create new user password:</label>
      <input type="password" placeholder="password" v-model="newUser.password.password"/>
      <label>create new user password:</label>
      <input type="password" placeholder="repeat password" v-model="newUser.password.confirm"/>
      <label>select new user birth date:</label>
      <input type="date" v-model="newUser.date"/>
      <label>select new user gender:</label>
      <select v-model="newUser.gender">
        <option selected="true" disabled="disabled">select gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <label>select new user category:</label>
      <select v-model="newUser.category">
        <option
          v-for="category in $store.state.categories"
          :value="category.id"
          :key="category.id"
        >
          {{ category.title }}
        </option>
      </select>
      <select v-model="newUser.subcat">
        <option
          v-for="subcat in $store.state.categories.subcat"
          :value="subcat.id"
          :key="subcat.id"
        >
          {{ subcat.title }}
        </option>
      </select>
      <select v-model="newUser.subsubcat">
        <option
          v-for="subsubcat in $store.state.subsubcat"
          :value="subsubcat.id"
          :key="subsubcat.id"
        >
          {{ subsubcat.title }}
        </option>
      </select>
      <button>Add user</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddUserForm",
  setup() {
    const newUser = ref({
      firstname: "",
      lastname: "",
      password: {
        password: "",
        confirm: "",
      },
      email: "",
      date: "",
      gender: "",
      category: "",
      subcat: "",
      subsubcat: "",
    });
    const store = useStore();
    const addNewUser = () => {
      store.commit('ADD_USER', {...newUser.value})
    };

    return { newUser, addNewUser, store };
  },
  // methods: {
  //   submitForm() {
  //     alert("submit happen");
  //   },
  // },
};
</script>
<style>
/* .user-form {
  width: 100%;
} */
form * {
  margin: 5px;
}
form {
  display: flex;
  flex-direction: column;
}
input,
select {
  border: 1px solid gray;
  border-radius: 5px;
  height: 1.6rem;
  line-height: 1.4rem;
  background-color: lightgray;
}
button {
  width: 100px;
  background-color: aquamarine;
  /* border: none; */
  padding: 5px;
  border-radius: 5px;
}
</style>

<template>
  <div class="user-form">
    <div><h1>Add new user</h1></div>
    <Form @submit.prevent="addNewUser" id="userform">
      <label>enter new user first name:</label>
      <field
        name="firstname"
        type="text"
        placeholder="first name"
        rules="required|alpha_spaces"
        v-model="newUser.firstname"
      />
      <ErrorMessage name="alpha_spaces" />
      <label>enter new user last name:</label>
      <field
        name="lastname"
        type="text"
        placeholder="last name"
        rules="required|alpha_spaces"
        v-model="newUser.lastname"
      />
      <ErrorMessage name="alpha_spaces" />
      <label>enter new user email address:</label>
      <field
        id="email"
        name="email"
        type="email"
        placeholder="e-mail"
        rules="required|email"
        v-model="newUser.email"
      />
      <ErrorMessage name="email" />
      <label>create new user password:</label>
      <field
        id="password"
        name="password"
        type="password"
        placeholder="password"
        rules="required|min:5"
        v-model="newUser.password"
      />
      <ErrorMessage name="password" />
      <label>repeat password:</label>
      <field
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        placeholder="repeat password"
        rules="required|confirmed:@password"
      />
      <ErrorMessage name="passwordConfirmation" />
      <label>select new user birth date:</label>
      <input type="date" v-model="newUser.birthdate" />
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
      <label>select new user sub category:</label>
      <select v-model="newUser.subcat">
        <option
          v-for="subcat in $store.state.subcategories"
          :value="subcat.id"
          :key="subcat.id"
        >
          {{ subcat.subtitle }}
        </option>
      </select>
      <label>select new user sub sub category:</label>
      <select v-model="newUser.subsubcat">
        <option
          v-for="subsubcat in $store.state.subsubcategories"
          :value="subsubcat.id"
          :key="subsubcat.id"
        >
          {{ subsubcat.subsubtitle }}
        </option>
      </select>
      <button type="submit">Add user</button>
    </Form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { Field, Form, ErrorMessage, defineRule } from "vee-validate";
import { required, email, alpha_spaces } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("alpha_spaces", alpha_spaces);

defineRule("min", (value, [min]) => {
  if (value && value.length < min) {
    return `Should be at least ${min} characters`;
  }
  return true;
});

defineRule("confirmed", (value, [other]) => {
  if (value !== other) {
    return `Passwords do not match`;
  }
  return true;
});

export default {
  name: "AddUserForm",
  setup() {
    const newUser = ref({
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      birthdate: "",
      gender: "",
      category: "",
      subcat: "",
      subsubcat: "",
    });

    const store = useStore();
    const addNewUser = () => {
      console.log(newUser);
      store.commit("ADD_USER", { ...newUser.value });
    };

    return {
      newUser,
      addNewUser,
      store,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {},
};
</script>
<style>
/* .user-form {
  width: 100%;
} */
span[role="alert"] {
  color: red;
  margin-bottom: 5px;
}
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

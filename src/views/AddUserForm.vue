<template>
<div class="user-form">
<div><h1>Add new user</h1></div>
  <form @submit.prevent="" id="userform" action="">
    <label for="firstname">enter new user first name:</label>
    <input type="text" name="firstname" v-model="firstname" placeholder="first name"/>
    <label for="lastname">enter new user last name:</label>
    <input type="text" name="lastname" v-model="lastname" placeholder="last name"/>
    <label for="email">enter new user email address:</label>
    <input type="email" name="email" v-model="email" placeholder="e-mail"/>
    <label for="password">create new user password:</label>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <label for="birthdate">select new user birth date:</label>
    <input type="date" name="birthdate" v-model="birthdate"/>
    <label for="gender">select new user gender:</label>
    <select name="gender" id="gender" form="gender" v-model="gender">
    <option selected="true" disabled="disabled">select gender</option>
    <option value="male">male</option>
    <option value="female">female</option>
    </select>
    <label for="category">select new user category:</label>
    <select name="category" id="category" v-model="category">
    <option v-for="category in $store.state.categories" :value="category.id" :key="category.id">{{category.title}}</option>
    </select>
    <select name="subcat" id="subcat" v-model="subcat">
    <option v-for="subcat in $store.state.categories.subcat" :value="subcat.id" :key="subcat.id">{{subcat.title}}</option>
    </select>
    <select name="subsubcat" id="subsubcat" v-model="subsubcat">
    <option v-for="subsubcat in $store.state.subsubcat" :value="subsubcat.id" :key="subsubcat.id">{{subsubcat.title}}</option>
    </select>
    <button>Add user</button>
  </form>
  </div>
</template>
<script>
import {ref} from 'vue';
export default {
  name: "AddUserForm",
  setup(){
    const newUser = ref({
      firstname: '',
      lastname: '',
      email: '',
      date: '',
      gender: '',
      category: '',
      subcat: '',
      subsubcat: '',
    })
    return newUser
  }
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
input, select {
  border: 1px solid gray;
  border-radius: 5px;
  height: 1.6rem;
  line-height: 1.4rem;
  background-color: lightgray;
}
button {
  width: 100px;
  background-color: aquamarine;
  border: none;
  padding: 5px;
  border-radius: 5px;
}
</style>
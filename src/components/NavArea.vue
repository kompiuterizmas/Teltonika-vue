<template>
  <div class="side-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/adduser">Add user</router-link>
    <router-link to="/addcategory">Add category</router-link>
    <form @submit.prevent="filterUsers">
    <div class="categories">select category:</div>
    <select v-model="user.category">
      <option v-for="category in $store.state.categories" :key="category.id">
        {{ category.title }}
      </option>
    </select><div class="categories">select subcategory:</div>
    <select v-model="user.subcat">
      <option v-for="subcat in $store.state.subcategories" :key="subcat.id">
        {{ subcat.subtitle }}
      </option>
    </select>
    <div class="categories">select subsubcategory:</div>
    <select v-model="user.subsubcat">
      <option v-for="subsubcat in $store.state.subsubcategories" :key="subsubcat.id">
        {{ subsubcat.subsubtitle }}
      </option>
    </select>
    <button>Filter users</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "NavArea",
  data() {
    return {};
  }
};
</script>
<style>
.side-menu * {
  white-space: nowrap;
  text-decoration: none;
  color: black;
  margin: 5px;
  cursor: pointer;
}
.side-menu {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  font-weight: 700;
}
button {
  width: 100px;
  background-color: aquamarine;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
}
</style>

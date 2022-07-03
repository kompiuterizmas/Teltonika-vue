<template>
  <div class="side-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/adduser">Add user</router-link>
    <router-link to="/addcategory">Add category</router-link>
    <div class="categories">Categories:</div>
    <div v-for="category in $store.state.categories" :key="category.title">
      <details>
        <summary>{{ category.title }}</summary>
        <div
          class="subcat"
          v-for="subcat in category.subcat"
          :key="subcat.subtitle"
        >
          <details>
            <summary>{{ subcat.subtitle }}</summary>
            <div
              class="subsubtitle"
              v-for="subsubcat in subcat.subsubcat"
              :key="subsubcat.id"
            >
              <router-link
                :to="{
                  path: '/' + category.id + '/' + subcat.id + '/' + subsubcat.id,
                }"
              >
                {{ subsubcat.subsubtitle }}
              </router-link>
            </div>
          </details>
        </div>
      </details>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavArea",
  data() {
    return {};
  },
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
</style>

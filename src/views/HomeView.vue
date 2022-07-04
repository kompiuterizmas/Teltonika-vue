<template>
  <div class="home">
<div>It is entire user list,<br> you can filter users in left side menu</div>

  <div class="usercard">
    <div v-for="user in $store.state.users" :key="user.email">
    <span>first name: {{user.firstname}}</span>
    <span>last name:{{user.lastname}}</span>
    <span>e-mail: {{user.email}}</span>
    <span>age: {{getAge(user.birthdate)}}</span>
    <span>gender: {{user.gender}}</span>
    <span>birth date: {{user.birthdate}}</span>
    </div>
  </div>
  </div>
</template>
<script>

export default {
  name: "HomeView",
    methods: {
      getAge(date){
      let x = parseInt(date.substring(0, 4));
      let t = new Date();
      let y = t.getFullYear();
      return y-x;
    },
    onSubmit() {
      console.log('Submitted');
    },
  },
};
</script>
<style>
.usercard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.usercard div {
  text-align: left;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid grey;
}
.home {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
  width: 80vw;
  max-width: 80%;
}
</style>
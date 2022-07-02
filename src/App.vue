<template>
  <HeaderArea />
  <div class="output-area">
    <div class="nav-area">
      <NavArea />
    </div>
    <div class="router-area">
      <ul id="users">
    <li v-for="person in user" v-bind:key="person.content">{{person.content}}</li>
  </ul>
      <router-view />
    </div>
  </div>
  <FooterArea />
</template>
<script>
import HeaderArea from "./components/HeaderArea.vue";
import FooterArea from "./components/FooterArea.vue";
import NavArea from "./components/NavArea.vue";
export default {
  name: "App",
  data(){
    return {
      user:[]
    }
  },
  created(){
    fetch("/api/users")
    .then(res=>res.json())
    .then(json => {
      this.user = json.user
    })
  },
  components: {
    HeaderArea,
    FooterArea,
    NavArea,
  },
};
</script>
<style>
.nav-area {
  background-color: aquamarine;
  /* min-width: 20%; */
  height: 100%;
  /* border: 1px solid blue; */
}
.router-area {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.output-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin: 50px auto 20px; */
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
}
</style>

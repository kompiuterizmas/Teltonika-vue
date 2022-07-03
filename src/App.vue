<template>
  <HeaderArea />
  <div class="output-area">
    <div class="nav-area">
      <NavArea />
    </div>
    <div class="router-area">
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
  height: 100%;
  /* width: 200px; */
}
.router-area {
  display: flex;
  align-items: center;
  /* margin: auto; */
  width: 100%;
  justify-content: center;
}
.output-area {
  display: flex;
  align-items: baseline;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* width: 100%; */
  /* height: 100%; */
}
</style>

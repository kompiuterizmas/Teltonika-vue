<template>
  <div class="home">Please select action on left side menu</div>

    <!-- <div id="home">
    <form @submit.prevent="onSubmit">
      <input type="email" name="email" />

      <button>Sign up for newsletter</button>
    </form>
  </div> -->
</template>
<script>
// import { defineRule } from 'vee-validate';

export default {
  name: "HomeView",
    methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
};
</script>
<style>
.home {
  font-size: 1.5rem;
  text-align: center;
  width: 80vw;
  max-width: 80%;
}
</style>
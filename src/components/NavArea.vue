<template>
    <div class="side-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/adduser">Add user</router-link>
    <router-link to="/addcategory">Add category</router-link>
    <div class="categories">Categories:</div>

    </div>
</template>
<script></script>
<style>
.side-menu * {
    text-decoration: none;
    color: black;
    margin: 5px;
}
.side-menu {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    font-weight: 700;
}
</style>
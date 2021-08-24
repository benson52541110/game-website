<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script> 
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./assets/all";
html, body {
  font-family: 'Noto Sans TC', sans-serif;
}

#app {
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
      font-family: 'Noto Sans TC', sans-serif;

  }
</style>

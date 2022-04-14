<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/scss/all.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
html,
body {
  font-family: 'Roboto', sans-serif;
  background-color: #eae7dc;
}

#app {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
}
</style>

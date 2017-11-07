<template>
  <div id="app">
    <h1>This is a poc on vue-i18n</h1>
    <h2>Objective</h2>
    <h4>importing .json and .yml file inside .vue file using i18n tag</h4>
    <h4>internationalization and localization with reactivity</h4>
    <h4>get dynamic text in you application instead of static content inside tepmplate</h4>
    <input type="button" @click="toggleLang" value="Toggle Language" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      locale: 'en',
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  methods: {
    toggleLang() {
      this.locale = this.locale === 'en' ? 'ja' : 'en';
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

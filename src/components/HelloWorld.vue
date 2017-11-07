<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <div class="card">
      <p>message: {{ $t('hello') }}</p>
      <p>{{ $t('message.hello') }}</p>
      <p>message: {{ $t('message.appMessage') }}</p>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://kazupon.github.io/vue-i18n/en/sfc.html#multiple-custom-blocks" target="_blank">Multiple custom blocks</a></li>
      <li><a href="https://github.com/kazupon/vue-i18n" target="_blank">kazupon/vue-i18n</a></li>
      <li><a href="https://github.com/arun9483/vue-i18n-example" target="_blank">Github link for this poc</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">vuejs</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    </ul>
    
  </div>
</template>
<i18n src="./mytext.json">
</i18n>
<i18n src="./mytext.yml">
</i18n>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Demo: HelloWorld.vue file is used for below demo',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 5px;
}

a {
  color: #42b983;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 2px 10px 5px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>

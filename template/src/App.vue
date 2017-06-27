<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import axios from 'axios'
export default {
  name: 'app',
  created: function () {
    axios.get('/api/test').then((data) => {
      console.log(data)
    })
  },
  components: {
    Hello
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
@media screen and (min-width: 320px) {html{font-size:266.667%;}}
@media screen and (min-width: 360px) {html{font-size:300%;}}
@media screen and (min-width: 375px) {html{font-size:312.5%;}}
@media screen and (min-width: 400px) {html{font-size:333.333%;}}
@media screen and (min-width: 414px) {html{font-size:345%;}}
@media screen and (min-width: 440px) {html{font-size:366.667%;}}
@media screen and (min-width: 480px) {html{font-size:400%;}}
@media screen and (min-width: 520px) {html{font-size:433.333%;}}
@media screen and (min-width: 560px) {html{font-size:466.667%;}}
@media screen and (min-width: 600px) {html{font-size:500%;}}
@media screen and (min-width: 640px) {html{font-size:533.333%;}}
@media screen and (min-width: 680px) {html{font-size:566.667%;}}
@media screen and (min-width: 720px) {html{font-size:600%;}}
@media screen and (min-width: 760px) {html{font-size:633.333%;}}
@media screen and (min-width: 800px) {html{font-size:666.667%;}}

</style>

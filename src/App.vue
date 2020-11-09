<template>
  <div id="app">
    <Input type="text" placeholder="Search City Name..." @search="search" />
  </div>
</template>

<script>
import Input from "./components/Input";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      city: "",
      token: "&appid=4252325bf546b68207faac814e9fb3d2",
      url: "http://api.openweathermap.org/data/2.5/weather",
    };
  },
  components: {
    Input,
  },
  methods: {
    search($event) {
      this.city = $event;
      axios
        .get(`${this.url}?q=${this.city}${this.token}`)
        .then((response) => {
          if(response.status == "200"){
            return response.data;
          }else{
            return;
          }
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url("./assets/bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 3rem 4rem;
}
</style>

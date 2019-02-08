<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Ecosystem</h3>
    <div ref="authModal" id="auth--modal"></div>
    <SidePanel />
    <button @click="getUserData">Get User Data</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SidePanel from "./SidePanel.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    SidePanel
  },
  mounted() {
    this.initializeIdentity("#auth--modal");
  },
  computed: {
    ...mapState("user", {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions("auth", ["initializeIdentity"]),
    ...mapActions("user", ["getUserData"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

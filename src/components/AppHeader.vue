<template>
  <div class="ui secondary pointing menu">
    <router-link :to="basicUrl" class="active item">Image Storage</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizonal">
        <router-link :to="basicUrl" class="item">Galleries</router-link>
        <router-link :to="uploadUrl" class="item">Upload</router-link>
        <a class="item" @click="logout">logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import PATH from '../constants/path';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    basicUrl: () => PATH.BASIC_URL,
    uploadUrl: () => PATH.UPLOAD,
    ...mapGetters(['isLoggedIn']),
  }
};
</script>

<style scoped>
.horizonal {
  display: flex;
  flex-direction: row;
}
</style>
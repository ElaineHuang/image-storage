<template>
  <div>
    <h2 v-if="isUploading">Files Uploading...</h2>
    <div v-else class="dropper">
      <input
        type="file"
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*"
      />
      <span>Drag files here!</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages']),
  computed: mapGetters(['isUploading']),
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
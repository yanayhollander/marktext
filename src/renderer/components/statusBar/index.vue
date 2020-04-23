<template>
  <div class="status-bar">
    <div class="status-bar-left">
      <div class="status-bar-item">
        <a class="inline-block">6:25</a>
      </div>
    </div>
    <div class="status-bar-right"></div>
  </div>
</template>

<script>
// import { ipcRenderer, remote } from 'electron'
// import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  created () {

  },
  props: {

  },
  computed: {

  },
  watch: {

  },
  methods: {
  }
}
</script>

<style scoped>
.status-bar {
  height: var(--statusBarHeight);
  background-color: var(--themeColor);
  color: var(--sideBarColor);
  line-height: var(--statusBarHeight);
  font-size: 12px;
  padding-inline: 10px;
  border-top: 1px solid var(--editorColor140);
}
.status-bar-item a {
  margin: 0;
  padding: 0 0.75em;
  vertical-align: top;
  color: var(--sideBarColor);
}
.status-bar-item :hover {
  background: red;
}
</style>

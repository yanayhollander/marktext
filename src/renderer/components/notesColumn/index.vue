<template>
  <div class="notes-column" ref="notes-column">
    <div class="notes-column-header">
      Notebook Title
    </div>
    <div class="notes-list">
      <ul>
        <li v-for="note in notes" v-bind:key="note">{{ note }}</li>
      </ul>
    </div>
    <div class="drag-bar" ref="dragBar"></div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data () {
    return {
      notes: ['Fake Note 1', 'Fake Note 2', 'Fake Note 2']
    }
  },
  components: {

  },
  methods: {
    handleLeftIconClick (name) {
      if (this.rightColumn === name) {
        this.$store.commit('SET_LAYOUT', { rightColumn: '' })
      } else {
        this.$store.commit('SET_LAYOUT', { rightColumn: name })
        this.sideBarViewWidth = +this.sideBarWidth
      }
    },
    handleLeftBottomClick (name) {
      if (name === 'settings') {
        this.$store.dispatch('OPEN_SETTING_WINDOW')
      }
    }
  }
}
</script>

<style scoped>
.notes-column {
  min-width: 220px;
  color: var(--sideBarColor);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: var(--sideBarBgColor);
  border-right: 1px solid var(--itemBgColor);
}
.notes-column-header {
  border-bottom: 1px solid var(--itemBgColor);
  padding: 8px;
  text-align: center;
}
.notes-list ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.notes-list ul > li {
  margin: 0;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid var(--itemBgColor);
}
.notes-list ul > li.active {
  background: var(--floatBgColor) !important;
}
</style>

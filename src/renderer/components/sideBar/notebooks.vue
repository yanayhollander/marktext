<template>
  <div
    class="side-bar-notebooks"
    :class="[
      {
        'side-bar-notebooks-overflow': !wordWrapInToc,
        'side-bar-notebooks-wordwrap': wordWrapInToc
      }
    ]"
  >
    <div class="title">Notebooks</div>
    <el-tree
      v-if="true"
      :data="notebooks"
      :default-expand-all="false"
      :props="defaultProps"
      @node-click="handleClick"
      :expand-on-click-node="true"
      :indent="10"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      draggable
      accordion
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    ></el-tree>
    <div class="no-data" v-else>
      <svg aria-hidden="true" :viewBox="EmptyIcon.viewBox">
        <use :xlink:href="EmptyIcon.url"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../bus'
import EmptyIcon from '@/assets/icons/undraw_toc_empty.svg'

export default {
  data () {
    this.EmptyIcon = EmptyIcon
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapState({
      notebooks: state => state.editor.notebooks,
      wordWrapInToc: state => state.preferences.wordWrapInToc
    })
  },
  methods: {
    handleClick ({ slug }) {
      bus.$emit('scroll-to-header', slug)
    },
    handleDragStart (node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop (draggingNode, dropNode, type) {
      if (dropNode.data.label === 'Level two 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag (draggingNode) {
      return draggingNode.data.label.indexOf('Level three 3-1-1') === -1
    }
  }
}
</script>

<style>
.side-bar-notebooks {
  height: calc(100% - 35px);
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  & .title {
    color: var(--sideBarTitleColor);
    font-weight: 600;
    font-size: 14px;
    margin: 37px 0 10px 0;
    padding-left: 10px;
  }
  & .el-tree {
    background: transparent;
    color: var(--sideBarColor);
  }
  & .el-tree-node:focus > .el-tree-node__content {
    background-color: var(--sideBarItemHoverBgColor);
  }
  & .el-tree-node__content:hover {
    background: var(--sideBarItemHoverBgColor);
  }
  & > li {
    font-size: 13px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  & .no-data {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
    & svg {
      width: 120px;
      fill: var(--themeColor);
    }
  }
}
.side-bar-notebooks-overflow {
  overflow: auto;
}
.side-bar-notebooks-wordwrap {
  overflow-x: hidden;
  overflow-y: auto;
  & .el-tree-node__content {
    white-space: normal;
    height: auto;
    min-height: 14px;
  }
}
</style>

<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open" >
      {{ selected }}      
      <em class="select-arrow"></em>
    </div>
    <ul class="select-box" :class="{ selectHide: !open }">
      <li v-for="(option, index) in options" :key="index" :data-value="option.value"
        @click="selected = option.label; open = false;">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Select',
  components: {},
  props: {
    options: {
      type: Object,
      default: {},
    },
    default: {
      type: String,
      required: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default:'',
    },
    value: {
      type: String,
      default:'',
    },
  },

  data() {
    return {      
      selected: this.default
        ? this.default
        : this.options.length > 1
        ? this.options[0]
        : null,
      open: false,
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style>
</style>

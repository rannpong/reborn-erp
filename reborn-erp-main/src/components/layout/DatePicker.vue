<template>
  <div class="datePicker">
    <slot name="datepickerOnly">
      <VueDatePicker
        v-model="date"
        auto-apply
        locale="ko"
        :format="format"
        :alt-position="customPosition"
        :enable-time-picker="false"
        :format-locale="locale"
        :placeholder="placeholder"
      >
        <template #input-icon>
          <img
            class="slot-ico-calendar"
            src="../../assets/img/common/ico_calendar.png"
          />
        </template>
        <template #arrow-left>
          <img
            class="slot-ico-prev"
            src="../../assets/img/common/ico_prev_arrow.png"
          />
        </template>
        <template #arrow-right>
          <img
            class="slot-icon-next"
            src="../../assets/img/common/ico_next_arrow.png"
          />
        </template>
      </VueDatePicker>
    </slot>
  </div>
</template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ko } from 'date-fns/locale'
import { ref, reactive } from 'vue'

//npm install @vuepic/vue-datepicker
//VueDatePicker에 disabled 및 readonly 추가 가능

export default {
  name: 'DatePicker',
  components: {
    VueDatePicker,
  },
  watch: {
    date() {
      this.$emit('input', this.date);
    },
    chgSelect(newValue) {
      this.date = newValue;
    },
  },
  data() {
    return {
      date: new Date(),
      placeholder: '',
      format: '',
    }
  },
  props: {
    date: {
      type: Array,
    },
    tabindex: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
    },
    format: {
      type: String,
    },
    chgSelect: {
      type: String,
      default: '',
    },
  },
  mounted() {},
  unmounted() {},
  methods: {},
  setup() {
    const date = ref(new Date())

    const locale = reactive(ko)
    // const inputFormat = ref({
    //   format: 'yyyy-MM-dd (E)',
    // })

    const customPosition = () => ({ top: 40, left: 0 })

    return {
      date,
      locale,
      //inputFormat,
      customPosition,
    }
  },
}
</script>

<style scoped></style>

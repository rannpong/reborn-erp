<template>
  <div class="datePicker">
    <slot name="datepicker02">
      <VueDatePicker
        v-model="date"
        class="calendarTy02"
        format="yyyy-MM-dd (E) HH:mm"
        locale="ko"
        selectText="적용"
        :alt-position="customPosition"
        :format-locale="locale"
        :placeholder="placeholder"
        :text-input-options="inputFormat"
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
        <template #time-picker="{time, updateTime}">
          <div class="custom-time-picker-component">
            <!-- HH 시간 -->
            <div class="select">
              <div
                class="selected selectSet01"
                :tabindex="0"
                :class="[isOpen01 === 'open' ? 'open' : '']"
                @click="changeClass01"
                :value="time.hours"
              >
                {{ selected01 }}
                <em class="select-arrow"></em>
              </div>
              <ul class="select-box" :class="{ selectHide: !isOpen01 }">
                <li
                  v-for="h in hoursArray"
                  :key="h.value"
                  :data-value="h.value"
                  :value="h.value"
                  @click="
                    ;(selected01 = h.text),
                      updateTime($event.target.value, true),
                      (isOpen01 = false)
                  "
                >
                  {{ h.text }}
                </li>
              </ul>
            </div>
            <!-- mm 분 -->
            <div class="select">
              <div
                class="selected selectSet02"
                :tabindex="1"
                :class="[isOpen02 === 'open' ? 'open' : '']"
                @click="changeClass02"
                :value="time.minutes"
              >
                {{ selected02 }}
                <em class="select-arrow"></em>
              </div>
              <ul class="select-box" :class="{ selectHide: !isOpen02 }">
                <li
                  v-for="m in minutesArray"
                  :key="m.value"
                  :data-value="m.value"
                  :value="m.value"
                  @click="
                    ;(selected02 = m.text),
                      updateTime(+$event.target.value, false),
                      (isOpen02 = false)
                  "
                >
                  {{ m.text }}
                </li>
              </ul>
            </div>
          </div>
        </template>
      </VueDatePicker>
    </slot>
  </div>
</template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ko } from 'date-fns/locale'
import { ref, reactive, computed, onMounted } from 'vue'

//npm install @vuepic/vue-datepicker
//VueDatePicker에 disabled 및 readonly 추가 가능

export default {
  name: 'DateTimePicker',
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: '',
      isOpen01: '',
      isOpen02: '',
      selected01: '',
      selected02: '',
      placeholder: '',
    }
  },
  props: {
    data: {
      type: Array,
    },
    tabindex: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
    },
  },
  mounted() {},
  unmounted() {},
  methods: {
    changeClass01() {
      if (this.isOpen01 === 'open') {
        this.isOpen01 = ''
      } else {
        this.isOpen01 = 'open'
      }
    },
    changeClass02() {
      if (this.isOpen02 === 'open') {
        this.isOpen02 = ''
      } else {
        this.isOpen02 = 'open'
      }
    },
  },
  setup() {
    const date = ref(new Date())

    const locale = reactive(ko)
    const inputFormat = ref({
      format: 'yyyy.MM.dd (E)',
    })

    const time = ref({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    })

    onMounted(() => {
      const startDate = new Date()
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
      date.value = [startDate, endDate]
    })

    const hoursArray = computed(() => {
      const arr = []
      for (let i = 0; i < 24; i++) {
        arr.push({ text: i < 10 ? `0${i}` : i, value: i })
      }
      return arr
    })

    const minutesArray = computed(() => {
      const arr = []
      for (let i = 0; i < 60; i++) {
        arr.push({ text: i < 10 ? `0${i}` : i, value: i })
      }
      return arr
    })

    const customPosition = () => ({ top: 40, left: 0 })

    return {
      locale,
      inputFormat,
      time,
      hoursArray,
      minutesArray,
      customPosition,
    }
  },
}
</script>

<style scoped></style>

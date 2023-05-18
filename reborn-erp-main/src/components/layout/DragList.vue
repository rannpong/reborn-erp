<template>
    <div class="drag_list_wrap">        
        <draggable tag="ul" class="drag_list" :list="list" @end="dragEnd">
            <li v-for="(item, id) in list" :key="id">
                <span class="label">{{ item.label }}</span>
                <span class="count">{{ item.count }}</span>
            </li>
        </draggable>
    </div>
</template>

<script lang="ts">
// **draggable 아래 install 필수**
// npm install vue-draggable-next 
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
    name: 'DragList',
    components: {
        defineComponent,
        draggable: VueDraggableNext,
    },
    props: {
        list: {
            type: Array,
            default: {},
        },
        id: {
            type: Number,
            default: '',
        },
        label: {
            type: String,
        },
        count: {
            type: Number,
        },
    },
    data() {
        return {}
    },
    methods: {
        dragEnd() {
            console.log(this.list);
        },
    },
}
</script>

<style scoped></style>

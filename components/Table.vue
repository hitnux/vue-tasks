<template>
    <ul class="border">
        <li v-for="(item, ind) in items" :key="ind" class="px-4 py-1 border-b last:border-b-0"> 
            <div class="flex justify-between">
                <div> {{ item.id }} </div>
                <div> {{ item.name }} </div>
                <div> {{ getUserName(item.assigned) }} </div>
                <div class="flex items-center gap-1"> <span :class="statusClass(item.state) + ' block rounded-full w-8 h-8' "></span> {{ item.state }} </div>
                <div> {{ getDate(item.date) }} </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props: {
        items: {
            type: Array,
            default: () => {
                return []
            },
            //required: true
        }
    },
    methods: {
        getUserName(id) {
            return this.$store.state.users.find( (u) => u.id === id ).name;
        },
        getDate(date) {
            return date.toLocaleDateString("tr-TR") + ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        },
        statusClass(state) {
            switch(state) {
                case 'new':
                    return 'bg-yellow-500'
                case 'development':
                    return 'bg-sky-500'
                case 'complate':
                    return 'bg-green-600'
                default:
                    return 'bg-gray-400'
            }
        }
    }
})
</script>
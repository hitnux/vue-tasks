<template>
    <div>
        <ul class="border flex flex-col">
            <li class="px-4 py-1 border-b last:border-b-0"> 
                <div class="flex justify-between">
                    <div class="w-1/6">
                        ID 
                        <button
                            @click="() => {
                                clickSort(sorted);
                                sorted = !sorted;
                            }"
                            :class="(sorted ? 'rotate-270' : 'rotate-90')">
                            >
                        </button> 
                    </div>
                    <div class="w-2/6"> Title </div>
                    <div class="w-1/6"> Assigned </div>
                    <div class="w-1/6"> State </div>
                    <div class="w-1/6"> Created Date </div>
                </div>
            </li>
            <li v-for="(item, ind) in items" :key="ind" class="px-4 py-1 border-b last:border-b-0"> 
                <div class="flex justify-between items-center">
                    <div class="w-1/6"> {{ item.id }} </div>
                    <div class="w-2/6"> {{ item.name }} </div>
                    <div class="w-1/6"> {{ getUserName(item.assigned) }} </div>
                    <div class="w-1/6 flex items-center gap-1"> <span :class="statusClass(item.state) + ' block rounded-full w-8 h-8' "></span> {{ item.state }} </div>
                    <div class="w-1/6"> {{ getDate(item.date) }} </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            sorted: false
        }
    },
    props: {
        items: {
            type: Array,
            default: () => {
                return []
            },
            //required: true
        },
        clickSort: {
            type: Function
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
                case 'New':
                    return 'bg-yellow-500'
                case 'Development':
                    return 'bg-blue-500'
                case 'Completed':
                    return 'bg-green-600'
                default:
                    return 'bg-gray-400'
            }
        }
    }
})
</script>
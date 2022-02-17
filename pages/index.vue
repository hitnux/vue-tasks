<template>
  <main class="min-h-87vh max-w-75 m-auto">
    <div>
      <input type="text" v-model="search" placeholder="Filter By Keyword" class="border-b mb-3" />
      <button 
      @click="() => {
        tasks.push( {
          id: Math.floor(Math.random() * 10 + 6),
          name: `new item ${Math.floor(Math.random() * 10)}`,
          state: 'New',
          assigned: 2,
          date: new Date()
        } )
      }">
        + New Task
      </button>
    </div>
    <Table 
      :items="tasks.filter( t => t.name.includes(search) )" 
      :clickSort="(active) => {
        if (active) tasks.sort( (a,b) => {return a.id - b.id} )
        else tasks.sort( (a,b) => {return b.id - a.id} )
      }" 
      />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Table from '@/components/Table.vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
  components: {
    Table
  },
  data() {
    return {
      search: '',
      tasks: [...Array(5)].map((_, ind) => {
        return {
          id: ind+1,
          name: `test-${ind+1}`,
          state: ind == 2 ? 'Development' : ind == 4 ? 'Completed' : 'New',
          assigned: 2,
          date: new Date()
        }
      })
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
})
</script>

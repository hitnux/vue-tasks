<template>
  <main class="min-h-87vh max-w-75 m-auto">
    <Table :items="tasks" />
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
      tasks: [...Array(5)].map((_, ind) => {
        return {
          id: ind,
          name: `test${ind}`,
          state: ind == 3 ? 'Development' : 'New',
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

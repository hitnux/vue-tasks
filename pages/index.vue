<template>
  <main class="min-h-87vh max-w-75 m-auto">
    Test
    <Table :items="tasks" />
    <div> {{users}} </div>
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
          state: 'new',
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

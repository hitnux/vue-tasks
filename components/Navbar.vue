<template>
    <nav class="flex justify-between max-w-75 m-auto py-4">
        <a href="#" class="text-xl">Logo</a>
        <div class="flex justify-center items-center bg-black text-white rounded-full w-32 h-32">
            {{ userAvatar }}
        </div>
    </nav>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    computed: {
        userAvatar() {
            const nameList = this.$store.state.users.find( u => u.id === this.$store.state.user).name.split(' ');
            return nameList[0][0].toUpperCase() + nameList[nameList.length - 1][0].toUpperCase()
        }
    }
})
</script>
<template>
    <div class="app">
        <Navs></Navs>
        <News></News>
    </div>
</template>


<script>

import Navs from './views/navigation/Navs'
import News from './views/news/News'
export default {
    name: 'App',
    components: {
        Navs,
        News
    },
    data() {
        return {

        }
    },
    methods: {

    }
} 
</script>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #F6F8FC;
}
</style>
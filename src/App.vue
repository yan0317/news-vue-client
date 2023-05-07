<template>
    <div class="app">
        <Navs></Navs>
        <div class="test"></div>
    </div>
</template>

<script>
import Navs from './views/navigation/Navs'
export default {
    name: 'App',
    components: {
        Navs
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
}

.test {
    margin-top: 110px;
    width: 100%;
    height: 5000px;
    background-color: red;
}
</style>
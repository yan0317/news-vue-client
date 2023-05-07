<template>
    <div class="News">
        <ul>
            <li v-for="items in arr" :key="items.key">
                <span class="classify">[{{ items.classify }}] </span>
                <span class="title"> <a href="#">{{ items.title }} </a></span>
                <span class="date">{{ items.date }}</span>
                <span class="page_view">{{ items.page_view }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'News',
    data() {
        return {
            classify: '',
            title: '',
            page_view: '',
            date: '',
            baseURL: 'http://localhost:8181/news/',
            arr: [{}]
        }
    },
    methods: {
        news(type) {
            var _this = this;
            axios({
                method: 'get',  //请求方法
                url: `${_this.baseURL}${type}`,  //请求url
                params: { //get 请求带参数
                    // 在这里添加 GET 请求的查询参数
                }
            }).then(response => {
                _this.arr = response.data;
            }, error => {
                alert("网络出小差了")
            });
        },
    }, mounted() {
        this.$bus.$on('sendURLS', this.news)
        this.news('recommend')
    },
    beforeDestroy() {
        this.$bus.$off('sendURLS', this.news)
    },
}
</script>

<style scoped>
.News {
    width: 60%;
    height: 500px;
    margin: 170px auto;
    background-color: #FFFFFF;
    border-radius: 20px;
}

.News ul {
    display: flex;
    flex-direction: column;
}

.News ul li {
    margin-top: 10px;
    font-size: 15px;
}

.News ul li .classify {
    float: left;
    margin-left: 15px;
}

.News ul li .title {
    float: left;
    margin-left: 30px;
}

.News ul li .date {
    float: right;
    margin-right: 45px;
}

.News ul li .page_view {
    float: right;
    margin-right: 100px;
}
</style>
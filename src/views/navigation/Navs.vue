<template>
    <div class="head">

        <div class="upnav">

            <div class="leftnav">
                <span class="logs">
                    <img src="./images/guge.png" alt="">
                </span>
                <span class="newstitle">新闻</span>
            </div>

            <div class="search">
                <input type="text">
            </div>

            <div class="users">
                <div>
                    <button @click="showLoginDialog">登录</button>
                    <div v-if="isLoginDialogVisible" class="login-dialog">
                        <div class="login-dialog-container">

                            <div class="log w">
                                <div class="headlog">
                                    <div class="headimg">
                                        <img src="./images/quxiao.png" @click="cancel" alt="">
                                    </div>
                                    <h2 class="te w">|用户登录</h2>
                                </div>
                                <div class="in">
                                    <div class="user"><label for=""> 用户名</label>：<input type="text" placeholder="请输入用户名"
                                            v-model="username">
                                    </div>
                                    <div class="password"><label for=""> 密码</label>：<input type="password"
                                            placeholder="请输入密码" v-model="password"></div>
                                </div>
                                <div class="end">
                                    <button @click="loguser">登录</button>
                                    <button @click="enteruser">注册</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <nav class="downnav">
            <ul class="nav-links">
                <li><a href="#1" @click="sendURL('recommend')">推荐</a></li>
                <li><a href="#2" @click="sendURL('science')">科技</a></li>
                <li><a href="#3" @click="sendURL('health')">健康</a></li>
                <li><a href="#4" @click="sendURL('business')">商业</a></li>
                <li><a href="#5" @click="sendURL('happy')">娱乐</a></li>
                <li><a href="#6" @click="sendURL('sports')">体育</a></li>
            </ul>
        </nav>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Navs',
    data() {
        return {
            isLoginDialogVisible: false,
            username: '',
            password: '',
            baseURL: 'http://localhost:8181/users'
        }
    },
    methods: {
        sendURL(type) {
            this.$bus.$emit('sendURLS', type);
        },
        showLoginDialog() {
            this.isLoginDialogVisible = true
        },
        cancel() {
            this.isLoginDialogVisible = false
        },
        loguser() {
            var _this = this;
            axios({
                method: 'get',
                url: _this.baseURL,
                params: {
                    username: _this.username,
                    password: _this.password
                }
            }).then(repos => {
                if (repos.data == true) {
                    alert("登录成功！")
                } else {
                    alert("登录失败！请检查密码或用户名是否正确")
                }
            }, error => {
                alert("网络开小差了!")
            })
        },
        enteruser() {
            var _this = this;
            axios({
                method: 'post',
                url: _this.baseURL,
                data: {
                    username: _this.username,
                    password: _this.password
                }
            }).then(repos => {
                if (repos.data == true) {
                    alert("注册成功！")
                } else {
                    alert("用户名已存在！")
                }
            }, error => {
                alert("网络开小差了!")
            })
        }
    }
}
</script>

<style scoped>
.head {
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 110px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #DADCE0;
}

.head .upnav {
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 100%;
    align-items: center;
}

.head .upnav .leftnav {
    display: flex;
    align-items: center;
    height: 50px;
    width: 125px;
    margin-left: 20px;
    font-size: 20px;
}



.head .upnav .leftnav .logs {
    display: flex;
    align-items: center;
    height: 40px;
    margin-right: 3px;
}

.head .upnav .leftnav .logs img {
    height: 25px;
}

.head .upnav .search {
    display: flex;
    align-items: center;
    width: 0;
    flex-grow: 1;
    /* margin-left: 235px; */
    margin-left: calc(max(10px, (100% - 700px - 150px - 235px) / 2));
}

.head .upnav .search input {
    display: inline-block;
    flex-grow: 1;
    height: 45px;
    border: none;
    background-color: #F1F3F4;
    border-radius: 8px;
    font-size: 15px;
}

.head .upnav .search input:focus {
    outline: none;
    border: 1px solid grey;
}

.head .upnav .users {
    display: flex;
    height: 60px;
    width: 50px;
    /* margin-left: 300px; */
    margin-left: calc(max(5px, (100% - 50px - 700px - 100px) / 2));
    align-items: center;
}

.head .upnav .users .login {
    font-size: 15px;
}

.downnav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}

.nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    height: 50px;
}

.nav-links li {
    flex-grow: 1;
    height: 50px;
}

.nav-links li a {
    display: inline-block;
    margin-top: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 30px;
    text-decoration: none;
    font-size: 15px;
}

.nav-links li a:hover {
    color: #1A73E8;
    border-bottom: 3px solid #1A73E8;
}

@media (min-width: 700px) {
    .nav-links li {
        flex: 1 1 auto;
        margin: 0 1rem;
    }
}



.login-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
}

.login-dialog-container {
    position: absolute;
    top: 120px;
    left: calc(100%-500px);
    max-width: 400px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: login-dialog 0.3s ease-out both;
}

@keyframes login-dialog {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}



/* 登录 */

.w {
    width: 400px;
}

.log {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 324px;
}

.headlog {
    height: 100px;
}

.headimg {
    height: 20px;
}

.headimg img {
    display: inline-block;
    float: right;
    height: 20px;
    margin-right: 10px;
}

.te {
    height: 80px;
    text-align: center;
    line-height: 80px;
}

.in {
    width: 305px;
    height: 124px;
}

.log .in label {
    display: inline-block;
    width: 68px;
    text-align-last: justify;
    margin-left: 15px;
}

.log .in .user,
.password {
    display: flex;
    align-items: center;
    height: 55px;
    width: 305px;
    text-align: center;
    background-color: rgb(247, 248, 250);
    border: 2px solid rgb(212, 214, 217);
    opacity: 0.5;
    border-radius: 50px;
}

.log .in .user {
    margin-bottom: 10px;
}

.log .in input {
    display: inline-block;
    width: 200px;
    height: 25px;
    line-height: 55px;
    border: none;
    background-color: rgb(247, 248, 250);
    font-size: 15px;
}

.log .in input:focus {
    outline: none;
}

.log .end {
    width: 305px;
    height: 100px;
    text-align: center;
    line-height: 100px;
}

.log .end button {
    width: 80px;
    height: 35px;
    border: none;
    font-size: 20px;
    background-color: rgb(212, 214, 217);
    color: black;
    border-radius: 15px;
    opacity: 0.5;
}

.log .end button:first-child {
    margin-top: 10px;
    margin-right: 25px;
}

.log .end button:hover {
    background-color: #f5f5f5;
    opacity: 0.7;
}
</style>
 
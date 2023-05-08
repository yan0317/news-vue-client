<template>
    <div class="head">

        <div class="upnav">

            <div class="leftnav">
                <span class="logs">
                    <img src="./images/guge.png" alt="">
                </span>
                <span class="newstitle">新闻</span>
            </div>

            <div class="search" ref="box">
                <div class="searchimg">
                    <span class="searchimgs">
                        <a href="#" @focus="putcolor" @blur="removecolor"><img src="./images/search.png" alt="" /></a>
                    </span>
                </div>
                <input type="text" @focus="putcolor" @blur="removecolor" :style="{ backgroundColor: inputBgColor }">
                <div class="searchingimg">
                    <a href="#" @click="cliserimg" @focus="putcolor" @blur="removecolor">
                        <img v-bind:src="serimg" alt="" />
                    </a>
                    <!-- 固定定位 -->
                    <div v-if="issearching" class="searchingfixed">
                        <!-- 绝对定位 -->
                        <div class="searchingabso" :style="{ width: `${boxWidth}px` }">

                            <div class="classify" @click="putcolor">
                                <div class="classtitle" @click="putcolor">
                                    <span>分类</span>
                                </div>

                                <div class="classifybox" @click="putcolor">
                                    <div class="classifyone" @click="putcolor">
                                        <button>推荐</button>
                                        <button>科技</button>
                                        <button>健康</button>
                                    </div>
                                    <div class="classifytwo" @click="putcolor">
                                        <button>商业</button>
                                        <button>娱乐</button>
                                        <button>体育</button>
                                    </div>
                                </div>
                            </div>

                            <div class="keyword" @click="putcolor">
                                <div class="keytitle" @click="putcolor">
                                    <span>关键词</span>
                                </div>
                                <div class="inputkey" @click="putcolor">
                                    <input type="text" @focus="putcolor" @blur="removecolor" placeholder="请输入关键词" />
                                </div>

                            </div>

                            <div class="eventdate" @click="putcolor">
                                <div class="timetitle">
                                    <span>时间</span>
                                </div>
                                <div class="pulldown">

                                    <div class="sb">
                                        <span>年:</span>
                                        <select>
                                            <option value="option1">1999</option>
                                            <option value="option2">2000</option>
                                            <option value="option3">2001</option>
                                            <option value="option1">2002</option>
                                            <option value="option2">2003</option>
                                            <option value="option3">2004</option>
                                            <option value="option1">2005</option>
                                            <option value="option2">2006</option>
                                            <option value="option3">2007</option>
                                            <option value="option1">2008</option>
                                            <option value="option2">2009</option>
                                            <option value="option3">2010</option>
                                            <option value="option1">2011</option>
                                            <option value="option2">2012</option>
                                            <option value="option3">2013</option>
                                            <option value="option1">2014</option>
                                            <option value="option2">2015</option>
                                            <option value="option3">2016</option>
                                            <option value="option1">2017</option>
                                            <option value="option2">2018</option>
                                            <option value="option3">2019</option>
                                            <option value="option1">2020</option>
                                            <option value="option2">2021</option>
                                            <option value="option3">2022</option>
                                            <option value="option1">2023</option>
                                        </select>
                                        <span>月:</span>
                                        <select>
                                            <option value="option1">1</option>
                                            <option value="option2">2</option>
                                            <option value="option3">3</option>
                                            <option value="option1">4</option>
                                            <option value="option2">5</option>
                                            <option value="option3">6</option>
                                            <option value="option1">7</option>
                                            <option value="option2">8</option>
                                            <option value="option3">9</option>
                                            <option value="option1">10</option>
                                            <option value="option2">11</option>
                                            <option value="option2">12</option>
                                        </select>
                                        <span>日:</span>
                                        <select>
                                            <option value="option1">1</option>
                                            <option value="option2">2</option>
                                            <option value="option3">3</option>
                                            <option value="option1">4</option>
                                            <option value="option2">5</option>
                                            <option value="option3">6</option>
                                            <option value="option1">7</option>
                                            <option value="option2">8</option>
                                            <option value="option3">9</option>
                                            <option value="option1">10</option>
                                            <option value="option2">11</option>
                                            <option value="option2">12</option>
                                            <option value="option3">13</option>
                                            <option value="option1">14</option>
                                            <option value="option2">15</option>
                                            <option value="option3">16</option>
                                            <option value="option1">17</option>
                                            <option value="option2">18</option>
                                            <option value="option3">19</option>
                                            <option value="option1">20</option>
                                            <option value="option2">21</option>
                                            <option value="option3">22</option>
                                            <option value="option1">23</option>
                                            <option value="option2">24</option>
                                            <option value="option3">25</option>
                                            <option value="option1">26</option>
                                            <option value="option2">27</option>
                                            <option value="option3">28</option>
                                            <option value="option3">29</option>
                                            <option value="option1">30</option>
                                            <option value="option2">31</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div class="sezrchend" @click="putcolor">
                                <button>查询</button>
                                <button>重置</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="users">
                <div>
                    <button class="logtitle" @click="showLoginDialog">登录</button>
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
import triangleup from './images/triangleup.png'
import triangledown from './images/triangledown.png'
export default {
    name: 'Navs',
    data() {
        return {
            counts: 0,
            boxWidth: 0,
            inputBgColor: '#F1F3F4',
            serimg: triangleup,
            isLoginDialogVisible: false,
            issearching: false,
            username: '',
            password: '',
            baseURL: 'http://localhost:8181/users'
        }
    },
    methods: {
        putcolor() {
            this.inputBgColor = '#FFFFFF';
        },
        removecolor() {
            this.inputBgColor = '#F1F3F4';
        },
        sendURL(type) {
            this.$bus.$emit('sendURLS', type);
        },
        showLoginDialog() {
            this.isLoginDialogVisible = true
        },
        cancel() {
            this.isLoginDialogVisible = false
        },
        cliserimg() {
            this.counts = this.counts + 1;
            if (this.counts % 2 == 0) {
                this.serimg = triangleup
                this.issearching = false;
            } else {
                this.serimg = triangledown
                this.issearching = true
            }
        },
        searchingabsoremo() {
            this.inputBgColor = '#F1F3F4';
            this.serimg = triangleup
            this.issearching = false;
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
        },
        updateBoxWidth() {
            if (this.$refs.box) {
                this.boxWidth = this.$refs.box.clientWidth;
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateBoxWidth);
        this.$nextTick(this.updateBoxWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateBoxWidth);
    },
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
    border-radius: 10px;
    /* margin-left: 235px; */
    background-color: #F1F3F4;
    margin-left: calc(max(10px, (100% - 700px - 150px - 235px) / 2));
}

.head .upnav .search .searchimg {
    height: 35px;
    width: 35px;
    padding: 5px;
}

.head .upnav .search .searchimg .searchimgs {
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.head .upnav .search .searchimg .searchimgs img {
    height: 20px;
}

.head .upnav .search .searchimg .searchimgs:hover {
    background-color: #E3E5E6;
    width: 35px;
    height: 35px;
    border-radius: 100%;
}

.head .upnav .search input {
    display: inline-block;
    flex-grow: 1;
    height: 45px;
    border: none;
    font-size: 15px;
    background-color: #F1F3F4;
}

.head .upnav .search input:focus {
    outline: none;
}

.head .upnav .search:focus-within {
    background-color: #FFFFFF !important;
    border: 1px solid #E0E0E1;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #E0E0E1;
}

.head .upnav .search .searchingimg {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    width: 45px;
    height: 45px;
}

.head .upnav .search .searchingimg a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
}

.head .upnav .search .searchingimg img {
    height: 32px;
}

.searchingfixed {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
}

.searchingabso {
    position: absolute;
    top: 0;
    left: calc(max(150px, (100% - 700px - 100px) / 2));
    height: 400px;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #D0D2D5;
    box-shadow: 0px 4px 4px 0px #E0E0E1;
    animation: searchingfixed 0.2s ease-out both;
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

.users .logtitle {
    display: inline-block;
    border: none;
    background-color: #fff;
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

@keyframes searchingfixed {
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
    height: 30px;
}

.headimg img {
    display: inline-block;
    float: right;
    height: 20px;
    margin-right: 15px;
    margin-top: 10px;
}

.te {
    height: 70px;
    text-align: center;
    line-height: 45px;
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

.searchingfixed .searchingabso .classify {
    display: flex;
    width: calc(100%-20px);
    height: 130px;
    padding: 10px;
}

.searchingfixed .searchingabso .classify .classtitle {
    display: flex;
    flex-grow: 0.2;
    height: 130px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}

.searchingfixed .searchingabso .classify .classifybox {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 0.8;
    height: 110px;
    padding: 10px 0px 10px 0px;
    border: 1px solid #E0E0E1;
    border-radius: 10px;
}



.searchingfixed .searchingabso .classify .classifybox .classifyone {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 55px;
}

.searchingfixed .searchingabso .classify .classifybox .classifyone button {
    font-size: 15px;
    border: none;
    background-color: #fff;
}

.searchingfixed .searchingabso .classify .classifybox .classifytwo {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 55px;
}

.searchingfixed .searchingabso .classify .classifybox .classifytwo button {
    font-size: 15px;
    border: none;
    background-color: #fff;
}

.keyword {
    display: flex;
    width: calc(100%-20px);
    height: 60px;
    padding: 10px;
}

.keytitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.2;
    height: 80px;
    font-size: 16px;
}

.inputkey {
    display: flex;
    align-items: center;
    height: 60px;
    flex-grow: 0.8;
    padding: 10px 0px 10px 0px;
}

.searchingfixed .searchingabso .keyword .inputkey input {
    display: inline-block;
    flex-grow: 1;
    height: 30px;
    border: none;
    background-color: #fff;
    border-bottom: 5px solid #E0E0E0;
}

.keyword .inputkey input:focus {
    outline: none;
}


.searchingfixed .searchingabso .eventdate {
    display: flex;
    width: calc(100%-20px);
    height: 70px;
    padding: 10px;
}

.searchingfixed .searchingabso .eventdate .timetitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.2;
    height: 70px;
    font-size: 16px;
}

.searchingfixed .searchingabso .eventdate .pulldown {
    display: flex;
    align-items: center;
    height: 50px;
    flex-grow: 0.8;
    padding: 10px 0px 10px 0px;
}

.searchingfixed .searchingabso .eventdate .pulldown .sb {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 50px;
}

.searchingfixed .searchingabso .eventdate .pulldown .sb span {
    margin-right: 2%;
}

.eventdate .pulldown .sb select {
    display: inline-block;
    width: 20%;
    height: 30px;
    margin-right: 15%;
}

.searchingfixed .searchingabso .sezrchend {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 80px;
}

.searchingfixed .searchingabso .sezrchend button {
    width: 70px;
    height: 40px;
    border: none;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid gray;
}

.searchingfixed .searchingabso .sezrchend button:nth-child(1) {
    margin-right: 3%;
    box-shadow: 0px 4px 4px 0px #E0E0E1;
}

.searchingfixed .searchingabso .sezrchend button:nth-child(2) {
    margin-right: 3%;
    box-shadow: 0px 4px 4px 0px #E0E0E1;
}
</style>
 
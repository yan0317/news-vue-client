<template>
    <div class="head">

        <div class="upnav">

            <div class="leftnav">
                <span class="log">
                    <img src="./images/guge.png" alt="">
                </span>
                <span class="newstitle">新闻</span>
            </div>

            <div class="search">
                <input type="text">
            </div>

            <div class="user">
                <span class="login"><a href="">登录</a></span>
            </div>

        </div>
        <nav class="downnav">
            <ul class="nav-links">
                <li><a href="#">推荐</a></li>
                <li><a href="#">科技</a></li>
                <li><a href="#">健康</a></li>
                <li><a href="#">商业</a></li>
                <li><a href="#">娱乐</a></li>
                <li><a href="#">体育</a></li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'Navs'
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



.head .upnav .leftnav .log {
    display: flex;
    align-items: center;
    height: 40px;
    margin-right: 3px;
}

.head .upnav .leftnav .log img {
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

.head .upnav .user {
    display: flex;
    height: 60px;
    width: 50px;
    /* margin-left: 300px; */
    margin-left: calc(max(5px, (100% - 50px - 700px - 100px) / 2));
    align-items: center;
}

.head .upnav .user .login {
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
    padding-left: 1rem;
    padding-right: 1rem;
    height: 30px;
    text-decoration: none;
    font-size: 15px;
}

.nav-links li a:hover {
    border-bottom: 3px solid green;
}

@media (min-width: 700px) {
    .nav-links li {
        flex: 1 1 auto;
        margin: 0 1rem;
    }
}
</style>>

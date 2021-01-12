<template>
<div class="nav-pages">
    <div class="nav-list">
        <div class="nav-item flx-clm-sta re-after-line clm-nav"
             v-for="(item,index) in pageList"
             :key="index"
             @click="goPages(item.path)">
            <div>{{item.name}}</div>
            <span class="nav-link">{{host+item.path}}</span>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'navigation',
    data () {
        return {
            host: '',
            pageList: [
                { name: '首页', path: '/home' }]
        };
    },
    mounted () {
        this.host = location.href.split('#/')[0] + '#';
    },
    methods: {
        goPages (path) {
            this.$router.push({
                path: path
            });
        }
    }
});
</script>

<style lang="scss" scoped>
.nav-pages {
    width: 100%;

    .nav-link {
        font-size: 26px;
        color: #999;
    }

    .nav-list {
        width: 100%;

        .nav-item {
            // height: 88px;
            color: #2480FC;
            font-size: 32px;
            padding: 10px 30px;
        }
    }
}
</style>

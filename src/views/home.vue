<template>
<div>
    <div class="font">545555</div>
    <Loading :loading="true" :absolute="false" tip="加载中..."  />
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Loading} from '../components/loading'
export default defineComponent({
    components:{
        Loading
    }

})
</script>

<style>
.font{
    font-size: .16rem;
}
</style>
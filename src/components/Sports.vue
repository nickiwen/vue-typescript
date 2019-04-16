<template>
    <div>
        Sports:{{ sportData }}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
export default class News extends Vue{
    sportData:string = '体育新闻'
    @Prop(String) readonly Sports!:string
}


</script>
<style>

</style>

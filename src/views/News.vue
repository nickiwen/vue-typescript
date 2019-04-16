<template>
  <div>
    News:{{ newsData }}-{{ message }} -{{ messageComputed }}
    <Sports/>
    <button @click="clickHandler('参数')">按钮</button>
    <ul>
      <li v-for="(item,index) in blueberry.chengpinInfo" :key="index">
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
    <div>
      Vuex: {{ city }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit, Provide } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from 'vuex-class'
import Sports from "@/components/Sports.vue";

// 引入组件
@Component({
  components: {
    Sports
  }
})
export default class News extends Vue {
  // data
  @Provide() newsData: string = "国内新闻";
  @Provide() message: number = 100;
  @Provide() blueberry: Object = {};

  // vuex
  @Getter city:any;
  // @Mutation SET_CITY:any;
  @Action SET_CITY:any;
  // props
  @Prop(String) readonly NewsData!: string;

  // 事件
  @Emit()
  clickHandler(msg: string) {
    console.log(msg);
  }

  // 生命周期
  mounted() {
    this.axios
      .get("http://wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
      .then(res => {
        console.log(res.data);
        this.blueberry = res.data;
      })
      .catch(error => {
        console.log(error);
      });

      // 设置vuex数据
      this.SET_CITY('上海');
  }

  // computed
  get messageComputed() {
    return this.message + 10;
  }

}
</script>
<style>
</style>

# Vue+TypeScript从零开始
typescript来编写Vue的好处不言而喻了，我们也静静的期待vue3版本的到来，会有更好的ts支持

## 脚手架工具与开发工具和插件
Vue CLI 3 可以使用 TypeScript 生成新工程。创建方式：
(```)
    # 1. 如果没有安装 Vue CLI 就先安装
    npm install --global @vue/cli

    # 2. 创建一个新工程，并选择 "Manually select features (手动选择特性)" 选项
    vue create my-project-name
(```)

要使用 TypeScript 开发 Vue 应用程序，我们强烈建议您使用 Visual Studio Code，它为 TypeScript 提供了极好的“开箱即用”支持。如果你正在使用单文件组件 (SFC), 可以安装提供 SFC 支持以及其他更多实用功能的 Vetur 插件。

## 改变写法部分
下面介绍每个点的使用

### 组件引入
(```)
    <script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    
    // 引入组件
    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {}
    </script>

(```)

### data
(```)
    <script lang="ts">
    import { Component, Vue,Provide } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    
    export default class News extends Vue {
    // data写法
        @Provide() newsData: string = "国内新闻";
        @Provide() message: number = 100;
        @Provide() blueberry: Object = {};
    }
    </script>

(```)

### props
(```)
    <script lang="ts">
    import { Component, Prop, Vue, Emit, Provide } from "vue-property-decorator";

    export default class News extends Vue {
    // props
    @Prop(String) readonly NewsData!: string;
    }
    </script>
(```)

### 事件
(```)
    <script lang="ts">
    import { Component, Prop, Vue, Emit, Provide } from "vue-property-decorator";

    export default class News extends Vue {
    // 事件写法
    @Emit()
    clickHandler(msg: string) {
        console.log(msg);
    }
    </script>
(```)

### 生命周期
    此处无变化

### 计算属性
(```)
    <script lang="ts">
    import { Component, Prop, Vue, Emit, Provide } from "vue-property-decorator";

    export default class News extends Vue {
    // computed写法
    get messageComputed() {
        return this.message + 10;
    }
    </script>
(```)


## 集成Axios
这里其实和之前没变化，但是在挂载的时候会有变化
(```)
    import axios from "axios"
    import Vueaxios from 'vue-axios'
    // axios ts中不支持挂在到原型，可以这样来实现
    Vue.use(Vueaxios, axios)
(```)

## 集成Element-UI
此处无变化

## 集成VueX
首先在`src/`根目录下创建`/src/store`文件夹，并且创建对应的文件如下
> types.ts
(```)
    export interface RootStateTypes {
        city: string;
    }
(```)

> actions.ts
(```)
    import state from './state'
    import { RootStateTypes } from './types'
    import { ActionTree } from 'vuex'

    const actions: ActionTree<RootStateTypes, any> = {
    SET_CITY({ commit, state: RootStateTypes}, data: string) {
        commit('SET_CITY', data);
    }
    }

    export default actions
(```)


> mutations.ts
(```)
    import state from './state'
    import { RootStateTypes } from './types'
    import { MutationTree  } from 'vuex'

    const mutations: MutationTree<RootStateTypes> = {
    SET_CITY(state: RootStateTypes, data: string) {
        state.city = data;
    }
    }

    export default mutations
(```)

> state.ts
(```)
    import { RootStateTypes } from './types'
    const state: RootStateTypes = {
    city: '北京'
    }

    export default state
(```)

> getters.ts
(```)
    import state from './state'
    import { RootStateTypes } from './types'
    import { GetterTree } from 'vuex'

    const getters: GetterTree<RootStateTypes, any> = {
        city: (state: RootStateTypes) => state.city
    }

    export default getters
(```)

> index.ts
(```)
    import Vue from 'vue'
    import Vuex, { Store } from 'vuex'
    import actions from './actions'
    import mutations from './mutations'
    import state from './state'
    import getters from './getters'

    Vue.use(Vuex)

    const store: Store<any> = new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
    modules: {
        //添加自定义模块
    }
    })

    export default store
(```)

使用的时候如下：
> News.vue
(```)
import { State, Getter, Mutation, Action } from 'vuex-class'
    // vuex
    @Getter city:any;
    // @Mutation SET_CITY:any;
    @Action SET_CITY:any;
(```)
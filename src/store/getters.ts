import state from './state'
import { RootStateTypes } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<RootStateTypes, any> = {
    city: (state: RootStateTypes) => state.city
}

export default getters
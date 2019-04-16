import state from './state'
import { RootStateTypes } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<RootStateTypes, any> = {
  SET_CITY({ commit, state: RootStateTypes}, data: string) {
    commit('SET_CITY', data);
  }
}

export default actions
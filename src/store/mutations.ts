import state from './state'
import { RootStateTypes } from './types'
import { MutationTree  } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
  SET_CITY(state: RootStateTypes, data: string) {
    state.city = data;
  }
}

export default mutations
import { getModule, Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

import store from '@/store'
import api from '@/services/api'
import { PartnerCreationData } from '@/types/partners'

@Module({ stateFactory: true, dynamic: true, namespaced: true, name: 'partners:new-partner', store })
export class NewPartner extends VuexModule {
  public isLoading = false;

  @Mutation
  public setIsLoading (newState: boolean) {
    this.isLoading = newState
  }

  @Action
  public async createNewPartner (data: PartnerCreationData) {
    this.context.commit('setIsLoading', true)
    const res = await api.partners.create(data)
    this.context.commit('setIsLoading', false)
    return res
  }
}

export default getModule(NewPartner)

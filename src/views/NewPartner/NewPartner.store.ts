import { getModule, Module, VuexModule, Action } from 'vuex-module-decorators'

import store from '@/store'
import api from '@/services/api'
import { PartnerCreationData } from '@/types/partners'

@Module({ stateFactory: true, dynamic: true, namespaced: true, name: 'partners:new-partner', store })
export class NewPartner extends VuexModule {
  @Action
  public async createNewPartner (data: PartnerCreationData) {
    return await api.partners.create(data)
  }
}

export default getModule(NewPartner)

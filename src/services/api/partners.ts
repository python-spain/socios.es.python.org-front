import { AxiosInstance } from 'axios'

import { PartnerCreationData } from '@/types/partners'

export default (client: AxiosInstance) => ({
  baseUrl: '/partners/',

  create (data: PartnerCreationData) {
    return client
      .post(this.baseUrl, data)
  }
})

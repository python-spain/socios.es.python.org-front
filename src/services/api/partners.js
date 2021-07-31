export default (client) => ({
  baseUrl: '/partners/',

  create (data) {
    return client
      .post(this.baseUrl, data,
            {headers: {'Content-Type': 'multipart/form-data'}})
  }
})

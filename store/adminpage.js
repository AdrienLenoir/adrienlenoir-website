export const state = () => ({
  page_name: "",
})

export const mutations = {
  SET_NAME(state, pageName) {
    state.page_name = pageName
  },
}

import jwtDecode from "jwt-decode"

export default async function({ app, redirect, $axios, store }) {
  if(!process.server) return

  const tokenCookie = app.$cookies.get('token')
  const decoded = tokenCookie != null ? jwtDecode(tokenCookie) : false

  if (tokenCookie != null || decoded) {
    const result = await $axios.get('/auth/access')

    if (!result.data.logged) {
      redirect('/admin/auth/signin')
    }
  } else {
    redirect('/admin/auth/signin')
  }
};

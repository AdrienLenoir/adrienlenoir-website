import Vue from "vue"

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-inview")
    }
  })
}
const observer03 = new IntersectionObserver(observerCallback, {
  threshold: 0.3,
})
const observer = new IntersectionObserver(observerCallback)

Vue.directive("on-screenview-0-3", (el) => {
  observer03.observe(el)
})

Vue.directive("on-screenview", (el) => {
  observer.observe(el)
})

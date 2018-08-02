import componentExamples from './entry'
import RouterConfig from '../config/router.config'

const mergeRoute = (isDemo) => {
  // const route = [{
  //   path: '*',
  //   redirect: to => '/'
  // }]
  const route = []
  const navs = RouterConfig.nav || []

  navs.forEach(nav => {
    if (nav.childrens) {
      nav.childrens.forEach(children => {
        children.list.forEach(page => addRoute(page))
      })
    }
  })
  function addRoute (page) {
    let { path, title } = page
    if (path) {
      let component = componentExamples[path]
      if (!component) {
        return
      }
      route.push({
        name: path,
        component,
        path: '/' + path,
        meta: {
          path,
          name: title
        }
      })
    }
  }
  return route
}

export default mergeRoute

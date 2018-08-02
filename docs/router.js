import componentDocs from './config/doc-entry'
import componentExamples from './config/example-entry'
import ExamplePages from './components/ExamplePages'
import RouterConfig from './config/router.config'

const mergeRoute = () => {
  const route = [{
    path: '*',
    redirect: to => '/'
  }]
  const navs = RouterConfig.nav || []

  navs.forEach(nav => {
    if (nav.childrens) {
      nav.childrens.forEach(children => {
        children.list.forEach(page => addRoute(page))
      })
    }
  })
  function addRoute (page, lang) {
    let { path } = page
    if (path) {
      let component
      if (path === 'demo') {
        component = ExamplePages
      } else {
        component = isDemo ? componentExamples[path] : componentDocs[path]
      }

      if (!component) {
        return
      }

      route.push({
        name: '/' + path,
        component,
        path: `/${lang}/${path}`,
        meta: {
          path,
          name: page.title
        }
      })
    }
  }
  return route
}

export default mergeRoute

require('./turbolinks')
views = require('./views')

onLoad = ->
  shared = window._sharedData
  view_name = shared?.view
  view = views[view_name] or views['base']
  new view() if view

$(document).on('page:change', onLoad)

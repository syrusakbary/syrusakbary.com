express = require("express")
slash   = require('express-slash')
serveStatic = require("serve-static")
favicon = require('serve-favicon')
subdomain = require('subdomain')
compression = require('compression')
i18n = require("i18n")

getApp = ->
  app = express()
  
  app.use(subdomain(base:'syrusakbary.com', removeWWW:true))
  app.use(compression())

  LANGUAGES = [
    "es"
    "en"
  ]

  # use filesys
  i18n.configure
    # setup some locales - other locales default to en silently
    locales: LANGUAGES
    # where to store json files - defaults to './locales'
    directory: __dirname + "/locales"

  app.locals.pretty = true

  app.set "view engine", "jade"
  app.set "views", __dirname + "/src/pages/"

  app.use(i18n.init)

  locale_all = (req, res, next) ->
    # set locale
    locale = req.params.locale
    # console.log locale
    if locale in LANGUAGES
      req.setLocale locale
    # else
    # res.redirect('/');
    # i18n.setLocale('de');
    next()
    return

  # app.all "/:locale/", locale_all
  app.use "/:locale/", locale_all

  get_i18n = (path, f) ->
    for lang in LANGUAGES
      i18n.setLocale(lang)
      locale_path = i18n.__("#{path}")
      app.get locale_path, f

  renderPage = (page) ->
    (req, res) ->
      res.render page,
        layout: false
        locale: req.getLocale()
        STATIC_URL: "/static/"

  get_i18n "/", renderPage("index")
  get_i18n "/projects", renderPage("projects")
  get_i18n "/profile", renderPage("profile")

  app.use "/static/", serveStatic(__dirname + "/public/static/")
  app.get '/', (req, res) ->
    locale = req.getLocale()
    res.redirect("/#{locale}/")
  app.use(favicon(__dirname + '/public/static/images/favicon.ico'));

  # app.use(slash())
  app

module.exports = {
  getApp
}
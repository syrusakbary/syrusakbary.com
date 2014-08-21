express = require("express")
slash   = require('express-slash')
serveStatic = require("serve-static")
favicon = require('serve-favicon')
subdomain = require('subdomain')
compression = require('compression')
i18n = require("i18n")

getApp = ->
  app = express()
  
  app.use((req, res, next) ->
    if req.hostname != "localhost" and req.hostname.indexOf("www.") != 0
      res.redirect(301, req.protocol + "://www." + req.hostname + req.originalUrl)
    else
      next()
  )

  # app.use(subdomain(base:'syrusakbary.com', removeWWW:true))
  app.use(compression())

  LANGUAGES = [
    "es"
    "en"
  ]

  MAX_AGE = 60*60*2
  SURROGATE_MAX_AGE = 60*60*24

  # use filesys
  i18n.configure
    # setup some locales - other locales default to en silently
    locales: LANGUAGES
    defaultLocale: 'en'
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

  setHeaders = (res) ->
    res.setHeader("Cache-Control", "public, maxage=#{MAX_AGE}")
    res.setHeader("Surrogate-Control", "maxage=#{SURROGATE_MAX_AGE}")

  app.use "/static/", serveStatic(__dirname + "/public/static/", setHeaders: setHeaders)
  app.get '/', (req, res) ->
    locale = req.getLocale()
    res.redirect("/#{locale}/")
  app.use(favicon(__dirname + '/public/static/images/favicon.ico'));
  # app.use (req, res, next) ->
  #   if '/robots.txt' is req.url
  #     res.type('text/plain')
  #     res.send("User-agent: *\nAllow: /")
  #   else 
  #     next()

  # app.use(slash())
  app

module.exports = {
  getApp
}
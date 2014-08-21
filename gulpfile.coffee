gulp = require("gulp")
gutil = require("gulp-util")
es = require("event-stream")
coffee = require("gulp-coffee")
concat = require("gulp-concat")
uglify = require("gulp-uglify")
imagemin = require("gulp-imagemin")
stylus = require("gulp-stylus")
jade = require("gulp-jade")
bower = require("gulp-bower")
plumber = require("gulp-plumber")
serve = require("gulp-serve")
browserify = require("gulp-browserify")
beautify = require("gulp-beautify")
livereload = require("gulp-livereload")
connect = require("connect")
nib = require("nib")
svgmin = require("gulp-svgmin")
uglify = require("gulp-uglify")
size = require("gulp-size")
csso = require("gulp-csso")
gulpFilter = require("gulp-filter")
app_server = require("./server")

# var svgstore = require('gulp-svgstore');
# betterfonts = require("gulp-betterfonts")
SOURCES =
  vendorscripts: "src/vendor/*.js"
  coffeescripts: "src/scripts/**/*.coffee"
  styles: "src/styles/**/*.styl"
  templates: "src/pages/**/*.jade"
  fonts: "src/fonts/**"
  # assets: "src/assets/**"
  images: "src/images/**"
  icons: "src/icons/**"

switch gutil.env._[0] or gutil.env.build
  when '' then
  else
    DESTS =
      scripts: "public/static/scripts/"
      styles: "public/static/styles/"
      templates: "public/"
      templatesjs: "public/static/scripts/templates/"
      fonts: "public/static/fonts/"
      # assets: "public/static/assets/"
      images: "public/static/images/"
      icons: "public/static/icons/"
      vendor: "public/static/vendor/"

    STATIC_URL = "/static/"

gulp.task "fonts", ->
  return gulp.src(SOURCES.fonts)
    .pipe(gulp.dest(DESTS.fonts))

gulp.task "scripts", ->
  gulp.src("src/scripts/app.coffee",
    read: false
  ).pipe(plumber()).pipe(browserify(
    transform: ["coffeeify"]
    extensions: [".coffee"]
  )).pipe(size()).pipe(uglify({})).pipe(concat("app.js")).pipe(size()).pipe gulp.dest(DESTS.scripts)

gulp.task "styles", ->
  # .pipe(csso())
  gulp.src([
    SOURCES.styles
    "!src/styles/**/_*.styl"
  ]).pipe(plumber()).pipe(stylus(
    paths: ["src/styles/"]
    use: [nib()]
    define:
      STATIC_URL: STATIC_URL
  )).pipe gulp.dest(DESTS.styles)

gulp.task "templates", ->
  
  # Minify and copy all JavaScript (except vendor scripts)
  gulp.src([
    SOURCES.templates
    "!**/_*.jade"
  ]).pipe(plumber()).pipe(jade(
    locals:
      STATIC_URL: STATIC_URL

    pretty: true
  )).pipe gulp.dest(DESTS.templates)

# gulp.task "assets", ->
#   gulp.src(SOURCES.assets).pipe gulp.dest(DESTS.assets)

# gulp.task "icons", ->
#   # .pipe(svgmin())
#   # required
#   # fixedWidth: true,
#   # recommanded option
#   # .pipe(svgstore('allfonts.svg'))
#   # .pipe(gulp.dest(DESTS.icons));
#   gulp.src(SOURCES.icons).pipe(betterfonts(
#     fontName: "syrusakbary"
#     fontHeight: 64
#     height: 64
#     width: 64
#     appendCodepoints: true
#   )).pipe gulp.dest(DESTS.fonts)


# Copy all static images
gulp.task "images", ->
  
  # Pass in options to the task
  gulp.src(SOURCES.images).pipe(plumber()).pipe(imagemin(optimizationLevel: 2)).pipe gulp.dest(DESTS.images)

# gulp.task "serve", ["autoreload"], serve(
#   root: __dirname + "/public"
#   middleware: connect.directory(__dirname + "/public")
# )

gulp.task "serve", ["build"], ->
  app = app_server.getApp()
  port = Number(process.env.PORT || 5000);
  app.listen port, ->
    console.log "Listening on port #{port}"


gulp.task "autoreload", ->
  liveserver = livereload()
  gulp.watch("public/**").on "change", (file) ->
    liveserver.changed file.path
    return

  return


# Rerun the task when a file changes
gulp.task "watch", ->
  # gulp.watch SOURCES.templates, ["templates"]
  gulp.watch SOURCES.coffeescripts, ["scripts"]
  gulp.watch SOURCES.vendorscripts, ["scripts"]
  gulp.watch SOURCES.styles, ["styles"]
  gulp.watch SOURCES.images, ["images"]
  
  # gulp.watch(SOURCES.fonts, ['fonts']);
  # gulp.watch SOURCES.assets, ["assets"]
  # gulp.watch SOURCES.icons, [
  #   "icons"
  #   "styles"
  # ]
  gulp.watch "bower.json", ["bower"]
  return

gulp.task "bower", ->
  filter = gulpFilter("**/jquery.min.js")
  
  # return bower()
  gulp.src("bower_components/**/*").pipe(filter).pipe gulp.dest(DESTS.vendor)
  return

gulp.task "build", [
  "bower"
  "images"
  # "templates"
  "scripts"
  # "assets"
  "fonts"
  "styles"
  
  # "icons"
], ->

# The default task (called when you run `gulp` from cli)
gulp.task "default", [
  "build"
  "autoreload"
  "serve"
  "watch"
]
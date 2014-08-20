diffdom = require('./diffdom')
turbolinks = require('./turbolinks').Turbolinks

diffDOM = diffdom.diffDOM

pageAnimation = (title, body, is_back, doFinish) ->
  $body = $(body)
  $_body = $(document.body)
  $_body.css({scrollTop:0})

  $_body.addClass('page-turbolinks')
  $page = $body.find('.page')
  $_page = $_body.find('.page')

  $pages = $('#pages')

  dd = new diffDOM()

  $_page.removeClass('page--in').addClass('page--out')
  $page.removeClass('page--out').addClass('page--in')
  $pages.append($page)

  setTimeout ->
    $_body.toggleClass('pages-animation--back', !!is_back).addClass('pages-animation')
  , 1

  setTimeout ->
    $body.find('.turbo-replace').each(->
      $this = $(@)
      id = $this.attr('id')
      old_this = $_body.find("##{id}.turbo-replace")
      old = old_this.get(0)
      # dif = dd.diff(old, @)
      dd.apply(old, dd.diff(old, @))
      # old_this.replaceWith($this)
    )
  , 200

  setTimeout ->
    # console.log 'a'
    $_page.remove()
    $page.removeClass('page--in page--out')
    $_body.removeClass('pages-animation pages-animation--back')

    # 
    doFinish()
  , 820

turbolinks.changePageAnimation pageAnimation
nav = $('#nav')
$(document).ready( ->
  $('#menu, #menu-close').click( (e) ->
    nav.toggleClass('nav--active')
    e.preventDefault()
    e.stopPropagation()
    false
)

)

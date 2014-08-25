diffdom = require('./diffdom')
diffDOM = diffdom.diffDOM

animation = (title, body, is_back, doFinish) ->
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
      if $this.hasClass('turbo-replace--diff')
        old = old_this.get(0)
        dd.apply(old, dd.diff(old, @))
      else
        old_this.replaceWith($this)
    )
  , 200

  setTimeout ->
    # console.log 'a'
    $_page.remove()
    $page.removeClass('page--in page--out')
    $_body.removeClass('pages-animation pages-animation--back')

    # 
    doFinish()
  , 900


module.exports = animation

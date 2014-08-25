turbolinks = require('../turbolinks').Turbolinks
pageAnimation = require('../animation')

class BaseView
	constructor: ->
		@initPage()

	@once: (f) ->
		->
			return if f._initiated
			do f
			f._initiated = true

	initPage: @once( ->
		turbolinks.changePageAnimation pageAnimation
		nav = $('#nav')
		$('#menu, #menu-close').click( (e) ->
			nav.toggleClass('nav--active')
			action = if nav.hasClass('nav--active') then 'Open' else 'Close'
			ga 'send', 'event', 'Header', action, 'Navigation'
			e.preventDefault()
			e.stopPropagation()
			false
		)
		$('#header__connect').click ->
			href = $(@).attr('href')
			ga 'send', 'event', 'Header', 'click', 'Contact'
				hitCallback: ->
					document.location = href
			false
	)

module.exports = BaseView

BaseView = require('./base')

class MainView extends BaseView
	constructor: ->
		super
		@trackSocial()

	trackSocial: ->
		doTrackSocial = (id, name) ->
			$(id).click(->
				ga 'send', 'event', 'Social', 'Open', name
			)
		doTrackSocial '#social__twitter', 'Twitter'
		doTrackSocial '#social__instagram', 'Instagram'
		doTrackSocial '#social__facebook', 'Facebook'
		doTrackSocial '#social__github', 'Github'
		doTrackSocial '#social__linkedin', 'Linked In'

module.exports = MainView

BaseView = require('./base')

class ProjectsView extends BaseView
	constructor: ->
		super
		@trackProjects()

	trackProjects: ->
		$('.project__item a').click( ->
			project_name = $(@).text()
			ga 'send', 'event', 'Project', 'Open', project_name
		)

module.exports = ProjectsView

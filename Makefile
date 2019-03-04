.PHONY: serve

# Common variables
SRC_FOLDER=src
DIST_FOLDER=dist
JAVASCRIPTS_LOC=src/javascripts
STYLESHEETS_LOC=src/stylesheets
ICONS_LOC=src/icons

# Launches a local server
serve:
	@node server.js

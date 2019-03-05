.PHONY: serve babel

# Common variables
SRC_FOLDER=src
DIST_FOLDER=dist
JAVASCRIPTS_LOC=src/javascripts
STYLESHEETS_LOC=src/stylesheets
ICONS_LOC=src/icons

# Node module variables
BABEL=$(NODE_MODULES)/.bin/babel
BROWSERIFY=$(NODE_MODULES)/.bin/browserify
NODE_MODULES=./node_modules
NODE_SASS=$(NODE_MODULES)/.bin/node-sass
POSTCSS=$(NODE_MODULES)/.bin/postcss

# Deletes the dist folder
clean:
	@rm -rf $(DIST_FOLDER)

# Watches project files for changes
watch:
	@node scripts/watch.js $(STYLESHEETS_LOC)=css $(JAVASCRIPTS_LOC)=js $(SRC_FOLDER)/index.html=html

# Launches a local server
serve: clean build
	@node server.js

# Compiles sass to css
css:
	@mkdir -p $(DIST_FOLDER)/stylesheets
	@$(NODE_SASS) --output-style compressed -o $(DIST_FOLDER)/stylesheets $(STYLESHEETS_LOC)
	@$(POSTCSS) -r $(DIST_FOLDER)/stylesheets/* --no-map

# Build js
js:
	@mkdir -p $(DIST_FOLDER)/javascripts
	@$(BABEL) $(JAVASCRIPTS_LOC) -d $(DIST_FOLDER)/javascripts/
	@$(BROWSERIFY) $(DIST_FOLDER)/javascripts/index.js  -o $(DIST_FOLDER)/javascripts/index.js --presets @babel/preset-es2015

# Copies and potential to minify html file
html:
	@mkdir $(DIST_FOLDER)
	@cp $(SRC_FOLDER)/index.html $(DIST_FOLDER)/

# Builds application
build: html css js
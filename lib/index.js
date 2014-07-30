/**
 * sails-generate-frontend
 *
 * Usage:
 * `sails generate frontend`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {

		// default assets folder and contents
		'./assets': { folder: {} },
		'./assets/favicon.ico': { copy: 'assets/favicon.ico' },
		'./assets/robots.txt': { template: 'assets/robots.txt' },
		'./assets/images': { folder: {} },
		'./assets/styles': { folder: {} },
		'./assets/styles/importer.less': { template: 'assets/styles/importer.less' },
		'./assets/templates': { folder: {} },
		'./assets/js': { folder: {} },
		'./assets/js/dependencies': { folder: {} },
		'./assets/js/dependencies/sails.io.js': { template: 'assets/js/dependencies/sails.io.js' },

		'./assets/images/.gitkeep': { copy: '.gitkeep'},
		'./assets/templates/.gitkeep': { copy: '.gitkeep'},
		// optional - inject other dependencies
		'./assets/js/dependencies/angular.min.js': { exec: function (scope, cb) {
				if (scope.frontend !== 'angular') return cb();
				var src = require('path').resolve(__dirname,'../templates/assets/js/dependencies/angular.min.js');
				require('fs-extra').copy(src, scope.rootPath, cb);
		} },

		// default asset pipeline config
		'./tasks/pipeline.iced.md': { template: 'tasks/pipeline.iced.md' },

		// grunt task configurations (`tasks/config`)
		'./tasks/config/clean.iced.md': { template: 'tasks/config/clean.iced.md' },
		'./tasks/config/coffee.iced.md': { template: 'tasks/config/coffee.iced.md' },
		'./tasks/config/concat.iced.md': { template: 'tasks/config/concat.iced.md' },
		'./tasks/config/copy.iced.md': { template: 'tasks/config/copy.iced.md' },
		'./tasks/config/cssmin.iced.md': { template: 'tasks/config/cssmin.iced.md' },
		'./tasks/config/jst.iced.md': { template: 'tasks/config/jst.iced.md' },
		'./tasks/config/less.iced.md': { template: 'tasks/config/less.iced.md' },
		'./tasks/config/sails-linker.iced.md': { template: 'tasks/config/sails-linker.iced.md' },
		'./tasks/config/sync.iced.md': { template: 'tasks/config/sync.iced.md' },
		'./tasks/config/uglify.iced.md': { template: 'tasks/config/uglify.iced.md' },
		'./tasks/config/watch.iced.md': { template: 'tasks/config/watch.iced.md' },

		// built-in grunt tasks which are automatically called by Sails (`tasks/register`)
		'./tasks/register/build.iced.md': { template: 'tasks/register/build.iced.md' },
		'./tasks/register/buildProd.iced.md': { template: 'tasks/register/buildProd.iced.md' },
		'./tasks/register/compileAssets.iced.md': { template: 'tasks/register/compileAssets.iced.md' },
		'./tasks/register/default.iced.md': { template: 'tasks/register/default.iced.md' },
		'./tasks/register/linkAssets.iced.md': { template: 'tasks/register/linkAssets.iced.md' },
		'./tasks/register/linkAssetsBuild.iced.md': { template: 'tasks/register/linkAssetsBuild.iced.md' },
		'./tasks/register/linkAssetsBuildProd.iced.md': { template: 'tasks/register/linkAssetsBuildProd.iced.md' },
		'./tasks/register/prod.iced.md': { template: 'tasks/register/prod.iced.md' },
		'./tasks/register/syncAssets.iced.md': { template: 'tasks/register/syncAssets.iced.md' }
	}
};


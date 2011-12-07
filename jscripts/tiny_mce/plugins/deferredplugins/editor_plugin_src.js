/**
 * editor_plugin_src.js
 *
 * Copyright 2011, Wesley Walser
 */

(function() {
	tinymce.create('tinymce.plugins.DeferredPluginsPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		
		init : function(ed, url) {
			var deferredPlugins = ed.settings.deferred_plugins,
				each = tinymce.each;

			if (!deferredPlugins) {
				return;
			}

			
		},

		/**
		* Returns information about the plugin as a name/value array.
		* The current keys are longname, author, authorurl, infourl and version.
		*
		* @return {Object} Name/value array containing information about the plugin.
		*/
		getInfo : function() {
			return {
				longname : 'DeferredPlugins',
				author : 'Wesley Walser',
				authorurl : 'http://github.com/wwalser',
				infourl : 'http://github.com/wwalser/tinymce',
				version : 0
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('deferredplugins', tinymce.plugins.DeferredPluginsPlugin);
})();

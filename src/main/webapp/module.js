/* jshint unused: false */
/*global define*/
define(function(require) {

    var Application = require('js/application'),
        SourceView = require('/sources/view/Source.view.js'),
        Source = require('/sources/model/Source.js');

    Application.App.module('Sources', function(SourceModule, App, Backbone, Marionette, $, _) {

        var sourceResponse = new Source.Response({model: Application.ServiceModel});

        var sourcePage = new SourceView.SourcePage({model: sourceResponse});

        // Define a controller to run this module
        // --------------------------------------

        var Controller = Marionette.Controller.extend({

            initialize: function(options){
                this.region = options.region;
            },

            show: function(){
                this.region.show(sourcePage);
            }

        });

        // Initialize this module when the app starts
        // ------------------------------------------

        SourceModule.addInitializer(function(){
            SourceModule.contentController = new Controller({
                region: App.sources
            });
            SourceModule.contentController.show();
        });


    });
});
(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Collection.prototype;
    
    MNKY.GHE.ReposCollection = Backbone.Collection.extend({
            url:"https://api.github.com/users/cirsteve/repos", 
            model: MNKY.GHE.RepoModel
    });
}(window.Backbone, window._, window.jQuery));

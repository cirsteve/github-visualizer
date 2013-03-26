(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Collection.prototype;
    
    MNKY.GHE.ReposCollection = Backbone.Collection.extend({
            url:"https://api.github.com/users/", 
            model: MNKY.GHE.RepoModel,
            initialize: function (options) {
                var user = options.user || "cirsteve";
                this.url = this.url + user + "/repos";
                return this;
            }
    });
}(window.Backbone, window._, window.jQuery));

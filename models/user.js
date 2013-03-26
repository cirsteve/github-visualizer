(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Model.prototype;

    MNKY.GHE.UserModel = Backbone.Model.extend({
        url: "https://api.github.com/users/",
        
        initialize: function (options) {
            var user = options.user || "cirsteve";
            this.url = this.url + user;
        }
    });
}(window.Backbone, window._, window.jQuery));

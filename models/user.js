(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Model.prototype;

    MNKY.GHE.UserModel = Backbone.Model.extend({
        url: "https://api.github.com/users/cirsteve"
    });
}(window.Backbone, window._, window.jQuery));

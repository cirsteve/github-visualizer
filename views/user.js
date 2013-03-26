(function (Backbone, _, $, undefined){
    var __super__ = Backbone.View.prototype;

    MNKY.GHE.UserView = Backbone.View.extend({
        template: MNKY.TMPL.github_user,

        className: "row github-user",

        initialize: function (options) {
            this.render();
            return this;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
}(window.Backbone, window._, window.jQuery));

(function (Backbone, _, $, undefined){
    var __super__ = Backbone.View.prototype;

    MNKY.GHE.RepoView = Backbone.View.extend({
        template: MNKY.TMPL.github_repo,

        initialize: function (options) {
            this.render();
            return this;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
}(window.Backbone, window._, window.jQuery));

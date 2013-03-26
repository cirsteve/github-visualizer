(function (Backbone, _, $, undefined) {
    var __super__ = MNKY.PageView.prototype;
    
    MNKY.GHE.IndexPageView = MNKY.PageView.extend({
        template: MNKY.TMPL.github_index,

        render: function () {
            __super__.render.call(this, arguments);
            this.user = new MNKY.GHE.UserModel({});
            this.repos = new MNKY.GHE.ReposCollection({});
            var userView, reposView, that = this;
            //user.on('change', this.renderUser)
            this.user.fetch({success: _.bind(this.renderUser, this)});
            this.repos.fetch({success: _.bind(this.renderRepos, this)});

        },
        
        initUser: function (user) {
            this.user = new MNKY.GHE.UserModel({user:user});
            this.user.fetch({success: _.bind(this.renderUser, this)});

        },

        initRepos: function (user) {
            this.repos = new MNKY.GHE.ReposCollection({user:user});
            this.repos.fetch({success: _.bind(this.renderRepos, this)});

        },

        renderRepos: function () {
            repos = this.repos.models,
            $repoTarget = this.$('#repos-target');

            _.each(repos, function (repo) {
                var view = new MNKY.GHE.RepoView({model:repo});
                $repoTarget.append(view.el); 
            });
        },

        renderUser: function () {

            userView = new MNKY.GHE.UserView({model:this.user});

            this.$('#user-target').html(userView.el);
        }
    });
}(window.Backbone, window._, window.jQuery));

(function (Backbone, _, $, undefined) {
    var __super__ = MNKY.PageView.prototype;
    
    MNKY.GHE.IndexPageView = MNKY.PageView.extend({
        template: MNKY.TMPL.github_index,
        
        events: {
            "click #new-user":"toggleForm",
            "click #fetch-user":"fetchUser"        
        },

        render: function () {
            __super__.render.call(this, arguments);
            this.initUser();
        },

        fetchUser: function (e) {
            var value = this.$('#github-user').val(); 
            this.initUser(value);
        },
        
        initUser: function (user) {
            this.userName = user || "cirsteve";
            this.user = new MNKY.GHE.UserModel({user:user});
            this.user.fetch({success: _.bind(this.renderUser, this)});

        },

        initRepos: function () {
            this.repos = new MNKY.GHE.ReposCollection({user:this.userName});
            this.repos.fetch({success: _.bind(this.renderRepos, this)});

        },

        renderRepos: function () {
            console.log('render reposs', this);
            var repos = this.repos.models,
                $repoTarget = $('#repos-target'),
                $vizTarget = $('#viz-target'),
                pie = new MNKY.GHE.PieChartModel({repos:this.repos});

            $repoTarget.empty();
            $vizTarget.empty();
            new MNKY.GHE.PieChartView({model: pie, el:$("#viz-wrapper")});
            

            _.each(repos, function (repo) {
                var view = new MNKY.GHE.RepoView({model:repo});
                $repoTarget.append(view.el); 
            });
        },

        renderUser: function () {
            this.initRepos();
            userView = new MNKY.GHE.UserView({model:this.user});

            this.$('#user-target').html(userView.el);
        },

        toggleForm: function () {
            this.$('.github-content, .github-form').toggle();
        }
    });
}(window.Backbone, window._, window.jQuery));

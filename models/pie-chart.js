(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Model.prototype;

    MNKY.GHE.PieChartModel = Backbone.Model.extend({

        initialize: function (options) {
            console.log('init pcm ', options);
            var height = options.height || 400,
                width = options.width || 400;
            this.set({
                    color: d3.scale.ordinal()
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]),
                    repos: options.repos,
                    height: height,
                    width: width
            });
            this.addCustomData();
        },

        addCustomData: function () {
            var workingData = {},
                models = this.get("repos").models;
            this.set("repoData",[]);

            _.each(models,function(repo) {
                var language = repo.get("language");
                if (workingData.hasOwnProperty(repo.get("language"))) {
                    workingData[language].count += 1;
                    workingData[language].size += repo.get("size");
                } else {
                    workingData[language] = {count: 1,size: repo.get("size"), language: language};
                }
            });

            workingData.unknown = _.clone(workingData["null"]);
            delete workingData["null"];

            for (var lang in workingData) {
                this.get("repoData").push(workingData[lang]);
            }
            
        }
    });
}(window.Backbone, window._, window.jQuery));

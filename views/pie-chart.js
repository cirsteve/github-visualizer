(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.View.prototype;

    MNKY.GHE.PieChartView = Backbone.View.extend({
        events: {
            'click .bycount':'pieByCount',
            'click .bysize': 'pieBySize'
        },

        initialize: function (options) {
            console.log('init pcv ', options);

            this.render();
        },

        render: function () {
            var models = this.model.get("repoData");
            this.renderDataPoint(models);
            return this;
        },

        pieByCount: function () {
            console.log('by count called');

        },

        pieBySize: function (e) {
            console.log('pie size');
            var data = this.model.get("repoData");
            var width = 600,
                    height = 500,
                        radius = Math.min(width, height) / 2;

            var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                        .innerRadius(0);

            var zarc = d3.svg.arc()
                    .outerRadius(0)
                        .innerRadius(0);

            var pieSize = d3.layout.pie()
                    .sort(function(d){return d.language;})
                        .value(function(d) { return d.size; });

            var pieStart = d3.layout.pie()
                    .sort(function(d){return d.language;})
                        .value(function(d) { return 1; });

            var g = this.svg.selectAll(".arc")
                .data(pieSize(data), function(d){return d.data.language;});

            //g = svg.selectAll(".arc").transition().duration(1000)
            //        .data(pieSize(data), function(d){return d.data.language;})
            //        .enter().append("g")
            //        .attr("class", "arc");


            g.append("path")
                .attr("d", zarc)
                .style("fill", function(d) { return color(d.data.language); })
                    .transition().duration(500)
                    .attr("d", arc);

            g.append("text")
                .transition().duration(1500)
                .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("dy", ".35em").style("text-anchor", "middle")
                .text(function(d) { return d.data.language; });
        },

        renderDataPoint: function (data) {
            console.log('rdp ', data);
            var width = 600,
                    height = 500,
                        radius = Math.min(width, height) / 2;

            var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                        .innerRadius(0);

            var zarc = d3.svg.arc()
                    .outerRadius(0)
                        .innerRadius(0);

            var pie = d3.layout.pie()
                    .sort(function(d){return d.language;})
                        .value(function(d) { return d.count; });

            var pieSize = d3.layout.pie()
                    .sort(function(d){return d.language;})
                        .value(function(d) { return d.size; });

            var pieStart = d3.layout.pie()
                    .sort(function(d){return d.language;})
                        .value(function(d) { return 1; });

            this.svg = d3.select("#viz-target").append("svg")
                    .attr("width", width)
                        .attr("height", height)
                          .append("g")
                              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var g = this.svg.selectAll(".arc")
                .data(pie(data), function(d){return d.data.language;})
                    .enter().append("g")
                    .attr("class", "arc");

            //g = svg.selectAll(".arc").transition().duration(1000)
            //        .data(pieSize(data), function(d){return d.data.language;})
            //        .enter().append("g")
            //        .attr("class", "arc");


            g.append("path")
                .attr("d", zarc)
                .style("fill", function(d) { return color(d.data.language); })
                    .transition().duration(500)
                    .attr("d", arc);

            g.append("text")
                .transition().duration(1500)
                .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("dy", ".35em").style("text-anchor", "middle")
                .text(function(d) { return d.data.language; });


        }
    });
}(window.Backbone, window._, window.jQuery));

var wave_choice = 2;
const total_height = 200;
const total_width = 800;
const margin = {top: 10, left: 50, bottom: 10, right: 50};
var height = total_height - margin.top - margin.bottom;
var width = total_width - margin.left - margin.right;
var svg_axis;

function peetwo(button) {

    if (button) {
        onPressButton();
        return;
    }

    const importance = ["not important at all", "not very important", "rather important", "very important"];
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important is religion to you?").attr('transform', 'translate(0 20)');
    var uc_religion = importance[0];
    var religion_user = d3
        .select('body')
        .append('select')
        .on('change', chooseReligion)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important are politics to you?").attr('transform', 'translate(0 20)');
    var uc_politics = importance[0];
    var politics_user = d3
        .select('body')
        .append('select')
        .on('change', choosePolitics)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important are friends to you?").attr('transform', 'translate(0 20)');
    var uc_friends = importance[0];
    var friends_user = d3
        .select('body')
        .append('select')
        .on('change', chooseFriends)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important is family to you?").attr('transform', 'translate(0 20)');
    var uc_family = importance[0];
    var family_user = d3
        .select('body')
        .append('select')
        .on('change', chooseFamily)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important is work to you?").attr('transform', 'translate(0 20)');
    var uc_work = importance[0];
    var work_user = d3
        .select('body')
        .append('select')
        .on('change', chooseWork)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How important is leisure time to you?").attr('transform', 'translate(0 20)');
    var uc_leisure = importance[0];
    var leisure_time_user = d3
        .select('body')
        .append('select')
        .on('change', chooseLeisureTime)
        .selectAll('option')
        .data(importance)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    const trustfulness = ["you can't be too careful", "most people can be trusted"];
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("How much do you trust the people around you?").attr('transform', 'translate(0 20)');
    var uc_trust = trustfulness[0];
    var trust_user = d3
        .select('body')
        .append('select')
        .on('change', chooseTrust)
        .selectAll('option')
        .data(trustfulness)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    const children_qualities = ["not important", "important"];
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is independence an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_independence = children_qualities[0];
    var independence_user = d3
        .select('body')
        .append('select')
        .selectAll('option')
        .on('change', chooseChildrenIndependence)
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is hard work an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_hardwork = children_qualities[0];
    var hard_work_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenHardwork)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is responsibility an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_responsibility = children_qualities[0];
    var feeling_of_responsibility_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenResponsibility)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is imagination an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_imagination = children_qualities[0];
    var imagination_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenImagination)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Are tolerance and resistance important qualities for children?").attr('transform', 'translate(0 20)');
    var uc_c_tolerance = children_qualities[0];
    var tolerance_and_resistance_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenResponsibility)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Are determination and perseverance important qualities for children?").attr('transform', 'translate(0 20)');
    var uc_c_determination = children_qualities[0];
    var determination_and_perseverance_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenDetermination)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is religious faith an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_faith = children_qualities[0];
    var religious_faith_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenFaith)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is unselfishness an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_unselfishness = children_qualities[0];
    var unselfishness_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenUnselfishness)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Is obedience an important quality for children?").attr('transform', 'translate(0 20)');
    var uc_c_obedience = children_qualities[0];
    var obedience_user = d3
        .select('body')
        .append('select')
        .on('change', chooseChildrenObedience)
        .selectAll('option')
        .data(children_qualities)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });

    //dropdown for waves
    const waves = [2, 3, 4, 5, 6];
    d3.select('body').append('svg').attr('height', 25).attr('width', 500).append('text').text("Choose a wave: ").attr('transform', 'translate(0 20)');
    var wave_selection = d3
        .select('body')
        .append('select')
        .on('change', onChangeWave)
        .selectAll('option')
        .data(waves)
        .enter()
        .append('option')
        .text(function (d) {
            return d;
        });

    var wave_data = [];

    d3.csv('./data.csv').then(function (data) {

        svg_axis = d3
            .select('body')
            .append('svg')
            .attr('height', total_height)
            .attr('width', total_width);

        svg_axis
            .append('line')
            .attr('x1', margin.left)
            .attr('y1', height / 2)
            .attr('x2', margin.left + width)
            .attr('y2', height / 2)
            .style('stroke', 'black')
            .style('stroke-width', 2);

        svg_axis
            .append('text')
            .text("not religious")
            .attr('transform', 'translate(0 ' + height + ')');

        svg_axis
            .append('text')
            .text("very religious")
            .attr('transform', 'translate(' + width + ' ' + height + ')');

        drawGraph();

        //get Data for chosen wave
        /*for (let i = 0; i < data.length; i++) {
            if (data[i].Wave === wave_choice.toString()) {
                wave_data.push(data[i]);
            }
        }

        const dataHasFetched = wave_data !== undefined && wave_data.length !== 0;

        if (dataHasFetched) {

            const default_radius = margin.left;
            const color_scale = d3.scaleLinear()
                .domain([0, 0.25, 0.5, 0.75, 1])
                .range(['blue', 'lightskyblue', 'white', 'lightyellow', 'yellow']);

            var children_data = [];
            var ranges =
                [{min: 4, max: 1}, {min: 4, max: 1},
                    {min: 2, max: 1},
                    {min: 4, max: 1}, {min: 4, max: 1},
                    {min: 4, max: 1}, {min: 4, max: 1},
                    {min: 4, max: 1}];

            for (let i = 0; i < wave_data.length; i++) {
                if (wave_data[i].religion_importance !== "NA") {
                    if (wave_data[i].religion_importance < ranges[0].min) {
                        ranges[0].min = wave_data[i].religion_importance;
                    }
                    if (wave_data[i].religion_importance > ranges[0].max) {
                        ranges[0].max = wave_data[i].religion_importance;
                    }
                }

                if (wave_data[i].trust !== "NA") {
                    if (wave_data[i].trust < ranges[2].min) {
                        ranges[2].min = wave_data[i].trust;
                    }
                    if (wave_data[i].trust > ranges[2].max) {
                        ranges[2].max = wave_data[i].trust;
                    }
                }

                if (wave_data[i].family_importance !== "NA") {
                    if (wave_data[i].family_importance < ranges[3].min) {
                        ranges[3].min = wave_data[i].family_importance;
                    }
                    if (wave_data[i].family_importance > ranges[3].max) {
                        ranges[3].max = wave_data[i].family_importance;
                    }
                }

                if (wave_data[i].friends_importance !== "NA") {
                    if (wave_data[i].friends_importance < ranges[4].min) {
                        ranges[4].min = wave_data[4].friends_importance;
                    }
                    if (wave_data[i].friends_importance > ranges[4].max) {
                        ranges[4].max = wave_data[i].friends_importance;
                    }
                }

                if (wave_data[i].leisure_time_importance !== "NA") {
                    if (wave_data[i].leisure_time_importance < ranges[5].min) {
                        ranges[5].min = wave_data[i].leisure_time_importance;
                    }
                    if (wave_data[i].leisure_time_importance > ranges[5].max) {
                        ranges[5].max = wave_data[i].leisure_time_importance;
                    }
                }

                if (wave_data[i].work_importance !== "NA") {
                    if (wave_data[i].work_importance < ranges[6].min) {
                        ranges[6].min = wave_data[i].work_importance;
                    }
                    if (wave_data[i].work_importance > ranges[6].max) {
                        ranges[6].max = wave_data[i].work_importance;
                    }
                }

                if (wave_data[i].politics_importance !== "NA") {
                    if (wave_data[i].politics_importance < ranges[7].min) {
                        ranges[7].min = wave_data[i].politics_importance;
                    }
                    if (wave_data[i].politics_importance > ranges[7].max) {
                        ranges[7].max = wave_data[i].politics_importance;
                    }
                }

                var children_value = 0;
                // independence: blue
                // hard work: aqua
                // feeling of responsibility: lightgreen
                // imagination: yellow
                // tolerance and resistance: orange
                // determination and perseverance: red
                // religious faith: pink
                // unselfishness: purple
                // obedience: brown
                var children_value_color = 'white';
                if (wave_data[i].children_independence > children_value) {
                    children_value = wave_data[i].children_independence;
                    children_value_color = 'blue'
                }
                if (wave_data[i].children_hard_work > children_value) {
                    children_value = wave_data[i].children_hard_work;
                    children_value_color = 'aqua'
                }
                if (wave_data[i].children_feeling_of_responsibility > children_value) {
                    children_value = wave_data[i].children_feeling_of_responsibility;
                    children_value_color = 'lightgreen'
                }
                if (wave_data[i].children_imagination > children_value) {
                    children_value = wave_data[i].children_imagination;
                    children_value_color = 'yellow'
                }
                if (wave_data[i].children_tolerance_and_resistance > children_value) {
                    children_value = wave_data[i].children_tolerance_and_resistance;
                    children_value_color = 'orange'
                }
                if (wave_data[i].children_determination_and_perseverance > children_value) {
                    children_value = wave_data[i].children_determination_and_perseverance;
                    children_value_color = 'red'
                }
                if (wave_data[i].children_religious_faith > children_value) {
                    children_value = wave_data[i].children_religious_faith;
                    children_value_color = 'pink'
                }
                if (wave_data[i].children_unselfishness > children_value) {
                    children_value = wave_data[i].children_unselfishness;
                    children_value_color = 'purple'
                }
                if (wave_data[i].children_obedience > children_value) {
                    children_value = wave_data[i].children_obedience;
                    children_value_color = 'brown'
                }
                children_data.push({color: children_value_color, value: children_value});

            }

            var circleData = [];
            for (let i = 0; i < wave_data.length; i++) {

                var politics_radius;
                if (wave_data[i].religion_importance !== "NA") {

                    //normalized and scaled to min/max
                    var cx = ((ranges[0].max - wave_data[i].religion_importance) / (ranges[0].max - ranges[0].min));
                    cx = margin.left + ((cx * width) - ((cx * width > width / 2) ? default_radius : -default_radius));

                    var opacity = ((ranges[2].max - wave_data[i].trust) / (ranges[2].max - ranges[2].min));

                    var family_value = ((ranges[3].max - wave_data[i].family_importance) / (ranges[3].max - ranges[3].min));
                    var friends_value = ((ranges[4].max - wave_data[i].friends_importance) / (ranges[4].max - ranges[4].min));
                    var leisure_time_value = ((ranges[5].max - wave_data[i].leisure_time_importance) / (ranges[5].max - ranges[5].min));
                    var work_value = ((ranges[6].max - wave_data[i].work_importance) / (ranges[6].max - ranges[6].min));

                    politics_radius = (((ranges[7].max - wave_data[i].politics_importance) / (ranges[7].max - ranges[7].min)) * 40) + 10;

                    var pie = d3.pie()
                        .value(function (d) {
                            return d.value;
                        });
                    var data_ready = pie(d3.entries({
                        a: family_value,
                        b: friends_value,
                        c: leisure_time_value,
                        d: work_value
                    }));

                    circleData.push({
                        "cx": cx,
                        "cy": height / 2,
                        "outer_radius": politics_radius,
                        "inner_radius": 5,
                        "outer_color": 'white',
                        "inner_color": children_data[i].color,
                        "opacity": opacity
                    });

                }

                var circles = svg_axis.selectAll("g")
                    .data(circleData)
                    .enter()
                    .append("g");

                var pies = svg_axis.selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path');

                svg_axis.selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(5)
                        .outerRadius(politics_radius)
                        .startAngle(0)
                        .endAngle(Math.PI / 2)
                    )
                    .style('fill', color_scale(family_value))
                    .style('stroke', 'white')
                    .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                    .append('title')
                    .text("family: " + family_value);
                svg_axis.selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(5)
                        .outerRadius(politics_radius)
                        .startAngle(Math.PI / 2)
                        .endAngle(Math.PI)
                    )
                    .style('fill', color_scale(friends_value))
                    .style('stroke', 'white')
                    .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                    .append('title')
                    .text("friends: " + friends_value);
                svg_axis.selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(5)
                        .outerRadius(politics_radius)
                        .startAngle(Math.PI)
                        .endAngle(3 * Math.PI / 2)
                    )
                    .style('fill', color_scale(leisure_time_value))
                    .style('stroke', 'white')
                    .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                    .append('title')
                    .text("leisure time: " + leisure_time_value);
                svg_axis.selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(5)
                        .outerRadius(politics_radius)
                        .startAngle(3 * Math.PI / 2)
                        .endAngle(2 * Math.PI)
                    )
                    .style('fill', color_scale(work_value))
                    .style('stroke', 'white')
                    .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                    .append('title')
                    .text("work: " + work_value);

                circles
                    .append("circle")
                    .attr("cx", function (d) {
                        return d.cx;
                    })
                    .attr("cy", function (d) {
                        return d.cy;
                    })
                    .attr("r", function (d) {
                        return d.outer_radius + 4;
                    })
                    .style('opacity', function (d) {
                        return d.opacity;
                    })
                    .append('title')
                    .text(function (d) {
                        return "politics: " + d.opacity;
                    });

                circles
                    .append("circle")
                    .attr("cx", function (d) {
                        return d.cx;
                    })
                    .attr("cy", function (d) {
                        return d.cy;
                    })
                    .attr("r", function (d) {
                        return d.inner_radius;
                    })
                    .style("fill", function (d) {
                        return d.inner_color;
                    })
                    .append('title')
                    .text(function (d) {
                        return "most important children quality: " + getQuality(d.inner_color);
                    });
                circles
                    .append('text')
                    .attr('x', function (d) {
                        return d.cx;
                    })
                    .attr('y', height - 20)
                    .style("text-anchor", "middle")
                    .style("font-size", 15)
                    .text(wave_data[i].Country.substring(0, 3).toUpperCase());

            }
        }*/

    });

    d3.select('body').append('svg').attr('height', 25).attr('width', 800).append('text').text("Link to discovery process: https://docs.google.com/document/d/1fAWx_XumdvlArUtNF6AYgaziNKptfMygTKuv80sHGkg/edit?usp=sharing").attr('transform', 'translate(0 20)');
    function drawGraph() {
        d3.csv('./data.csv').then(function (data) {
            //get Data for chosen wave
            for (let i = 0; i < data.length; i++) {
                if (data[i].Wave === wave_choice.toString()) {
                    wave_data.push(data[i]);
                }
            }

            const dataHasFetched = wave_data !== undefined && wave_data.length !== 0;

            if (dataHasFetched) {

                const default_radius = margin.left;
                const color_scale = d3.scaleLinear()
                    .domain([0, 0.25, 0.5, 0.75, 1])
                    .range(['blue', 'lightskyblue', 'white', 'lightyellow', 'yellow']);

                var children_data = [];
                var ranges =
                    [{min: 4, max: 1}, {min: 4, max: 1},
                        {min: 2, max: 1},
                        {min: 4, max: 1}, {min: 4, max: 1},
                        {min: 4, max: 1}, {min: 4, max: 1},
                        {min: 4, max: 1}];

                for (let i = 0; i < wave_data.length; i++) {
                    if (wave_data[i].religion_importance !== "NA") {
                        if (wave_data[i].religion_importance < ranges[0].min) {
                            ranges[0].min = wave_data[i].religion_importance;
                        }
                        if (wave_data[i].religion_importance > ranges[0].max) {
                            ranges[0].max = wave_data[i].religion_importance;
                        }
                    }

                    if (wave_data[i].trust !== "NA") {
                        if (wave_data[i].trust < ranges[2].min) {
                            ranges[2].min = wave_data[i].trust;
                        }
                        if (wave_data[i].trust > ranges[2].max) {
                            ranges[2].max = wave_data[i].trust;
                        }
                    }

                    if (wave_data[i].family_importance !== "NA") {
                        if (wave_data[i].family_importance < ranges[3].min) {
                            ranges[3].min = wave_data[i].family_importance;
                        }
                        if (wave_data[i].family_importance > ranges[3].max) {
                            ranges[3].max = wave_data[i].family_importance;
                        }
                    }

                    if (wave_data[i].friends_importance !== "NA") {
                        if (wave_data[i].friends_importance < ranges[4].min) {
                            ranges[4].min = wave_data[4].friends_importance;
                        }
                        if (wave_data[i].friends_importance > ranges[4].max) {
                            ranges[4].max = wave_data[i].friends_importance;
                        }
                    }

                    if (wave_data[i].leisure_time_importance !== "NA") {
                        if (wave_data[i].leisure_time_importance < ranges[5].min) {
                            ranges[5].min = wave_data[i].leisure_time_importance;
                        }
                        if (wave_data[i].leisure_time_importance > ranges[5].max) {
                            ranges[5].max = wave_data[i].leisure_time_importance;
                        }
                    }

                    if (wave_data[i].work_importance !== "NA") {
                        if (wave_data[i].work_importance < ranges[6].min) {
                            ranges[6].min = wave_data[i].work_importance;
                        }
                        if (wave_data[i].work_importance > ranges[6].max) {
                            ranges[6].max = wave_data[i].work_importance;
                        }
                    }

                    if (wave_data[i].politics_importance !== "NA") {
                        if (wave_data[i].politics_importance < ranges[7].min) {
                            ranges[7].min = wave_data[i].politics_importance;
                        }
                        if (wave_data[i].politics_importance > ranges[7].max) {
                            ranges[7].max = wave_data[i].politics_importance;
                        }
                    }

                    var children_value = 0;
                    // independence: blue
                    // hard work: aqua
                    // feeling of responsibility: lightgreen
                    // imagination: yellow
                    // tolerance and resistance: orange
                    // determination and perseverance: red
                    // religious faith: pink
                    // unselfishness: purple
                    // obedience: brown
                    var children_value_color = 'white';
                    if (wave_data[i].children_independence > children_value) {
                        children_value = wave_data[i].children_independence;
                        children_value_color = 'blue'
                    }
                    if (wave_data[i].children_hard_work > children_value) {
                        children_value = wave_data[i].children_hard_work;
                        children_value_color = 'aqua'
                    }
                    if (wave_data[i].children_feeling_of_responsibility > children_value) {
                        children_value = wave_data[i].children_feeling_of_responsibility;
                        children_value_color = 'lightgreen'
                    }
                    if (wave_data[i].children_imagination > children_value) {
                        children_value = wave_data[i].children_imagination;
                        children_value_color = 'yellow'
                    }
                    if (wave_data[i].children_tolerance_and_resistance > children_value) {
                        children_value = wave_data[i].children_tolerance_and_resistance;
                        children_value_color = 'orange'
                    }
                    if (wave_data[i].children_determination_and_perseverance > children_value) {
                        children_value = wave_data[i].children_determination_and_perseverance;
                        children_value_color = 'red'
                    }
                    if (wave_data[i].children_religious_faith > children_value) {
                        children_value = wave_data[i].children_religious_faith;
                        children_value_color = 'pink'
                    }
                    if (wave_data[i].children_unselfishness > children_value) {
                        children_value = wave_data[i].children_unselfishness;
                        children_value_color = 'purple'
                    }
                    if (wave_data[i].children_obedience > children_value) {
                        children_value = wave_data[i].children_obedience;
                        children_value_color = 'brown'
                    }
                    children_data.push({color: children_value_color, value: children_value});

                }

                var circleData = [];
                for (let i = 0; i < wave_data.length; i++) {

                    var politics_radius;
                    if (wave_data[i].religion_importance !== "NA") {

                        //normalized and scaled to min/max
                        var cx = ((ranges[0].max - wave_data[i].religion_importance) / (ranges[0].max - ranges[0].min));
                        cx = margin.left + ((cx * width) - ((cx * width > width / 2) ? default_radius : -default_radius));

                        var opacity = ((ranges[2].max - wave_data[i].trust) / (ranges[2].max - ranges[2].min));

                        var family_value = ((ranges[3].max - wave_data[i].family_importance) / (ranges[3].max - ranges[3].min));
                        var friends_value = ((ranges[4].max - wave_data[i].friends_importance) / (ranges[4].max - ranges[4].min));
                        var leisure_time_value = ((ranges[5].max - wave_data[i].leisure_time_importance) / (ranges[5].max - ranges[5].min));
                        var work_value = ((ranges[6].max - wave_data[i].work_importance) / (ranges[6].max - ranges[6].min));

                        politics_radius = (((ranges[7].max - wave_data[i].politics_importance) / (ranges[7].max - ranges[7].min)) * 40) + 10;

                        var pie = d3.pie()
                            .value(function (d) {
                                return d.value;
                            });
                        var data_ready = pie(d3.entries({
                            a: family_value,
                            b: friends_value,
                            c: leisure_time_value,
                            d: work_value
                        }));

                        circleData.push({
                            "cx": cx,
                            "cy": height / 2,
                            "outer_radius": politics_radius,
                            "inner_radius": 5,
                            "outer_color": 'white',
                            "inner_color": children_data[i].color,
                            "opacity": opacity
                        });

                    }

                    var circles = svg_axis.selectAll("g")
                        .data(circleData)
                        .enter()
                        .append("g");

                    var pies = svg_axis.selectAll('whatever')
                        .data(data_ready)
                        .enter()
                        .append('path');

                    svg_axis.selectAll('whatever')
                        .data(data_ready)
                        .enter()
                        .append('path')
                        .attr('d', d3.arc()
                            .innerRadius(5)
                            .outerRadius(politics_radius)
                            .startAngle(0)
                            .endAngle(Math.PI / 2)
                        )
                        .style('fill', color_scale(family_value))
                        .style('stroke', 'white')
                        .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                        .append('title')
                        .text("family: " + family_value);
                    svg_axis.selectAll('whatever')
                        .data(data_ready)
                        .enter()
                        .append('path')
                        .attr('d', d3.arc()
                            .innerRadius(5)
                            .outerRadius(politics_radius)
                            .startAngle(Math.PI / 2)
                            .endAngle(Math.PI)
                        )
                        .style('fill', color_scale(friends_value))
                        .style('stroke', 'white')
                        .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                        .append('title')
                        .text("friends: " + friends_value);
                    svg_axis.selectAll('whatever')
                        .data(data_ready)
                        .enter()
                        .append('path')
                        .attr('d', d3.arc()
                            .innerRadius(5)
                            .outerRadius(politics_radius)
                            .startAngle(Math.PI)
                            .endAngle(3 * Math.PI / 2)
                        )
                        .style('fill', color_scale(leisure_time_value))
                        .style('stroke', 'white')
                        .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                        .append('title')
                        .text("leisure time: " + leisure_time_value);
                    svg_axis.selectAll('whatever')
                        .data(data_ready)
                        .enter()
                        .append('path')
                        .attr('d', d3.arc()
                            .innerRadius(5)
                            .outerRadius(politics_radius)
                            .startAngle(3 * Math.PI / 2)
                            .endAngle(2 * Math.PI)
                        )
                        .style('fill', color_scale(work_value))
                        .style('stroke', 'white')
                        .attr('transform', 'translate(' + cx + ' ' + height / 2 + ')')
                        .append('title')
                        .text("work: " + work_value);

                    circles
                        .append("circle")
                        .attr("cx", function (d) {
                            return d.cx;
                        })
                        .attr("cy", function (d) {
                            return d.cy;
                        })
                        .attr("r", function (d) {
                            return d.outer_radius + 4;
                        })
                        .style('opacity', function (d) {
                            return d.opacity;
                        })
                        .append('title')
                        .text(function (d) {
                            return "politics: " + d.opacity;
                        });

                    circles
                        .append("circle")
                        .attr("cx", function (d) {
                            return d.cx;
                        })
                        .attr("cy", function (d) {
                            return d.cy;
                        })
                        .attr("r", function (d) {
                            return d.inner_radius;
                        })
                        .style("fill", function (d) {
                            return d.inner_color;
                        })
                        .append('title')
                        .text(function (d) {
                            return "most important children quality: " + getQuality(d.inner_color);
                        });
                    circles
                        .append('text')
                        .attr('x', function (d) {
                            return d.cx;
                        })
                        .attr('y', height - 20)
                        .style("text-anchor", "middle")
                        .style("font-size", 15)
                        .text(wave_data[i].Country.substring(0, 3).toUpperCase());

                }
            }

        });
    }

    function onChangeWave() {
        wave_choice = d3.select(this).property('value');
        svg_axis.selectAll('*').remove();
        drawGraph();
    }

    function chooseReligion() {
        uc_religion = d3.select(this).property('value');
    }

    function choosePolitics() {
        uc_politics = d3.select(this).property('value');
    }

    function chooseFamily() {
        uc_family = d3.select(this).property('value');
    }

    function chooseFriends() {
        uc_friends = d3.select(this).property('value');
    }

    function chooseWork() {
        uc_work = d3.select(this).property('value');
    }

    function chooseLeisureTime() {
        uc_leisure = d3.select(this).property('value');
    }

    function chooseTrust() {
        uc_trust = d3.select(this).property('value');
    }

    function chooseChildrenIndependence() {
        uc_c_independence = d3.select(this).property('value');
    }

    function chooseChildrenHardwork() {
        uc_c_hardwork = d3.select(this).property('value');
    }

    function chooseChildrenResponsibility() {
        uc_c_responsibility = d3.select(this).property('value');
    }

    function chooseChildrenImagination() {
        uc_c_imagination = d3.select(this).property('value');
    }

    function chooseChildrenTolerance() {
        uc_c_tolerance = d3.select(this).property('value');
    }

    function chooseChildrenDetermination() {
        uc_c_determination = d3.select(this).property('value');
    }

    function chooseChildrenFaith() {
        uc_c_faith = d3.select(this).property('value');
    }

    function chooseChildrenUnselfishness() {
        uc_c_unselfishness = d3.select(this).property('value');
    }

    function chooseChildrenObedience() {
        uc_c_obedience = d3.select(this).property('value');
    }

    function onPressButton() {

        const importance = ["not important at all", "not very important", "rather important", "very important"];
        const trustfulness = ["you can't be too careful", "most people can be trusted"];
        const children_qualities = ["not important", "important"];

        var latest_data = [];

        uc_politics = (uc_politics === importance[0]) ? 4 : (uc_politics === importance[1]) ? 3 : (uc_politics === importance[2]) ? 2 : 1;
        uc_religion = (uc_religion === importance[0]) ? 4 : ((uc_religion === importance[1]) ? 3 : ((uc_religion === importance[2]) ? 2 : 1));
        uc_family = (uc_family === importance[0]) ? 4 : ((uc_family === importance[1]) ? 3 : ((uc_family === importance[2]) ? 2 : 1));
        uc_friends = (uc_friends === importance[0]) ? 4 : ((uc_friends === importance[1]) ? 3 : ((uc_friends === importance[2]) ? 2 : 1));
        uc_work = (uc_work === importance[0]) ? 4 : ((uc_work === importance[1]) ? 3 : ((uc_work === importance[2]) ? 2 : 1));
        uc_leisure = (uc_leisure === importance[0]) ? 4 : ((uc_leisure === importance[1]) ? 3 : ((uc_leisure === importance[2]) ? 2 : 1));

        uc_trust = (uc_trust === trustfulness[0]) ? 1 : 2;

        uc_c_independence = (uc_c_independence === children_qualities[0]) ? 0 : 1;
        uc_c_hardwork = (uc_c_hardwork === children_qualities[0]) ? 0 : 1;
        uc_c_responsibility = (uc_c_responsibility === children_qualities[0]) ? 0 : 1;
        uc_c_imagination = (uc_c_imagination === children_qualities[0]) ? 0 : 1;
        uc_c_tolerance = (uc_c_tolerance === children_qualities[0]) ? 0 : 1;
        uc_c_determination = (uc_c_determination === children_qualities[0]) ? 0 : 1;
        uc_c_faith = (uc_c_faith === children_qualities[0]) ? 0 : 1;
        uc_c_unselfishness = (uc_c_unselfishness === children_qualities[0]) ? 0 : 1;
        uc_c_obedience = (uc_c_obedience === children_qualities[0]) ? 0 : 1;

        d3.csv('./data.csv').then(function (data) {

            for (let i = 0; i < data.length; i++) {
                if (data[i].Wave === "6") {
                    latest_data.push(data[i]);
                }
            }

            var similar;
            var minSum = Infinity;
            for (let i = 0; i < latest_data.length; i++) {
                var sum = 0;
                sum += Math.abs(latest_data[i].politics_importance - uc_politics);
                sum += Math.abs(latest_data[i].religion_importance - uc_religion);
                sum += Math.abs(latest_data[i].family_importance - uc_family);
                sum += Math.abs(latest_data[i].friends_importance - uc_friends);
                sum += Math.abs(latest_data[i].work_importance - uc_work);
                sum += Math.abs(latest_data[i].leisure_time_importance - uc_leisure);

                sum += Math.abs(latest_data[i].trust - uc_trust);

                sum += Math.abs(latest_data[i].children_independence - uc_c_independence);
                sum += Math.abs(latest_data[i].children_hard_work - uc_c_hardwork);
                sum += Math.abs(latest_data[i].children_feeling_of_responsibility - uc_c_responsibility);
                sum += Math.abs(latest_data[i].children_imagination - uc_c_imagination);
                sum += Math.abs(latest_data[i].children_tolerance_and_resistance - uc_c_tolerance);
                sum += Math.abs(latest_data[i].children_determination_and_perseverance - uc_c_determination);
                sum += Math.abs(latest_data[i].children_religious_faith - uc_c_faith);
                sum += Math.abs(latest_data[i].children_unselfishness - uc_c_unselfishness);
                sum += Math.abs(latest_data[i].children_obedience - uc_c_obedience);

                if (sum < minSum) {
                    minSum = sum;
                    similar = latest_data[i];
                }

            }

            console.log("SIMILAR COUNTRY #1: " + similar);

        });

    }

    function getQuality(color) {
        // independence: blue
        // hard work: aqua
        // feeling of responsibility: lightgreen
        // imagination: yellow
        // tolerance and resistance: orange
        // determination and perseverance: red
        // religious faith: pink
        // unselfishness: purple
        // obedience: brown
        if (color === 'blue') {
            return "independence";
        } else if (color === 'aqua') {
            return 'hard work';
        } else if (color === 'lightgreen') {
            return 'feeling of responsibility';
        } else if (color === 'yellow') {
            return 'imagination';
        } else if (color === 'orange') {
            return 'tolerance and resistance';
        } else if (color === 'red') {
            return 'determination and perseverance';
        } else if (color === 'pink') {
            return 'religious faith';
        } else if (color === 'purple') {
            return 'unselfishness';
        } else {
            return 'obedience';
        }
    }

}
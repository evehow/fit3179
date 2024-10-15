var vg_1 = "meteorite_landings_map.vg.json";
vegaEmbed("#proportional_symbol_map", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "size_year_meteorite_landings.vg.json";
vegaEmbed("#scatterplot", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "meteorite_classes.vg.json";
vegaEmbed("#radialplot", vg_3).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "fell_vs_found.vg.json";
vegaEmbed("#linechart", vg_4).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
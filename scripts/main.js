"use strict";
/* global $ */

$(".navbar-nav>li>a").click( function (){
	$(".navbar-collapse").collapse("hide");
});

window.onload = function () {

	var dataP = [];

	var options = {
		animationEnabled: true,
		title: {
			text: " "
		},
		axisY: {
			title: "Porcentaje",
			suffix: "%",
			includeZero: false,
			maximum:100
		},
		axisX: {
			title: "Habilidad"
		},
		data: [{
			type: "column",
			color: "#BDBDBD",
			yValueFormatString: "#,##0.0#"%"",
			dataPoints: dataP
		}]
	};

	function addData(data) {
		for (var i = 0; i < data.length; i++) {
			dataP.push({
				label: new String(data[i].label),
				y: data[i].y
			});
		}
		$("#chartContainer").CanvasJSChart(options);
	}

	$.getJSON("./skills/hab.json", addData);	
};

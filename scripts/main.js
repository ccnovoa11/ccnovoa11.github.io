"use strict";
/* global $ */

//Oculta el navbar al hacer click en una opción cuando se encuentra en collapse

$(".navbar-nav>li>a").click( function (){
	$(".navbar-collapse").collapse("hide");
});


//Se crea la gráfica de habilidades.

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
			maximum:100,
			minimum: 0
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

	//Se agregan a la lista del archivo JSON

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

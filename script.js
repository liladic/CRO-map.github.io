// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	getData(this);
// }
// xhttp.open("GET", "http://localhost/CRO-map/getJSON.php", true);
// xhttp.send();

// function getData(argument) {
// 	if (argument.readyState == 4 && argument.status == 200) {
// 		// Typical action to be performed when the document is ready:
// 		var myObj = JSON.parse(argument.responseText);
// 		for (var i = myObj.length - 1; i >= 0; i--) {
// 		    for (const [key, value] of Object.entries(myObj[i])) {
// 				console.log(`${key}: ${value}`);
// 				document.getElementById("demo").innerHTML += (`${key}: ${value}<br>`);
// 			}
// 		} 
// 		// document.getElementById("demo").innerHTML = myObj[0].SlucajeviSvijet;
// 		// console.log(myObj);
// 	}
// }

 
function fetchCases(type) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		getData(this);
	}
	xhttp.open("GET", "http://localhost/CRO-map/getJSON.php?state", true);
	// xhttp.open("GET", "https://lidijaladic.000webhostapp.com/projects/CRO-map/getJSON.php?state", true);
	xhttp.send();

	function getData(argument) {
		if (argument.readyState == 4 && argument.status == 200) {
			var myArrObj = JSON.parse(argument.responseText);
			console.log(myArrObj);
			document.getElementById("datumObjave").innerHTML = "Datum objave: " + myArrObj[0].Datum;
			// console.log(myArrObj);
			for (i=0; i<myArrObj.length; i++) {
				// console.log(myArrObj[i]);
				var myObj = myArrObj[i];
				for (x in myObj) {
					innerObj = myObj[x];
					if (typeof innerObj != "object") {
						continue;
					} else {
						// console.log(typeof innerObj);
						for (y in innerObj) {
							var brojZarazenih = '';
							var zupanija = innerObj[y].Zupanija;
							if (type === null) {
								brojZarazenih = ((innerObj[y].broj_umrlih / innerObj[y].broj_zarazenih) * 100).toFixed(2) + "%"; 
							} else {
								brojZarazenih = getBrojZarazenih(innerObj, y, type);
							}
							if (document.getElementById(zupanija) != null) {
								document.getElementById(zupanija).innerHTML = brojZarazenih;
							}
						}
					}
				}
			}
		}
	}

	function getBrojZarazenih(innerObj, y, type) {
		if (type === 'broj_aktivni') {
			return innerObj[y].broj_aktivni;
		} else if (type === 'broj_umrlih') {
			return innerObj[y].broj_umrlih;
		} else if (type === 'broj_zarazenih') {
			return innerObj[y].broj_zarazenih;
		}
	}
}

// function fetchDeathPercentage() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		getData(this);
// 	}
// 	xhttp.open("GET", "http://localhost/CRO-map/getJSON.php?state", true);
// 	// xhttp.open("GET", "https://lidijaladic.000webhostapp.com/projects/CRO-map/getJSON.php?state", true);
// 	xhttp.send();

// 	function getData(argument) {
// 		if (argument.readyState == 4 && argument.status == 200) {
// 			var myArrObj = JSON.parse(argument.responseText);
// 			document.getElementById("datumObjave").innerHTML = "Datum objave: " + myArrObj[0].Datum;
// 			// console.log(myArrObj);
// 			for (i=0; i<myArrObj.length; i++) {
// 				// console.log(myArrObj[i]);
// 				var myObj = myArrObj[i];
// 				for (x in myObj) {
// 					innerObj = myObj[x];
// 					if (typeof innerObj != "object") {
// 						continue;
// 					} else {
// 						// console.log(typeof innerObj);
// 						for (y in innerObj) {
// 							var zupanija = innerObj[y].Zupanija;
							
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// function fetchDeathCases() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		getData(this);
// 	}
// 	xhttp.open("GET", "http://localhost/CRO-map/getJSON.php?state", true);
// 	// xhttp.open("GET", "https://lidijaladic.000webhostapp.com/projects/CRO-map/getJSON.php?state", true);
// 	xhttp.send();

// 	function getData(argument) {
// 		if (argument.readyState == 4 && argument.status == 200) {
// 			var myArrObj = JSON.parse(argument.responseText);
// 			document.getElementById("datumObjave").innerHTML = "Datum objave: " + myArrObj[0].Datum;
// 			// console.log(myArrObj);
// 			for (i=0; i<myArrObj.length; i++) {
// 				// console.log(myArrObj[i]);
// 				var myObj = myArrObj[i];
// 				for (x in myObj) {
// 					innerObj = myObj[x];
// 					if (typeof innerObj != "object") {
// 						continue;
// 					} else {
// 						// console.log(typeof innerObj);
// 						for (y in innerObj) {
// 							var zupanija = innerObj[y].Zupanija;
// 							var brojZarazenih = innerObj[y].broj_umrlih; 
// 							// console.log(zupanija + ": " + brojZarazenih);
// 							if (document.getElementById(zupanija) != null) {
// 								document.getElementById(zupanija).innerHTML = brojZarazenih;
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// function fetchTotalCases() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		getData(this);
// 	}
// 	xhttp.open("GET", "http://localhost/CRO-map/getJSON.php?state", true);
// 	// xhttp.open("GET", "https://lidijaladic.000webhostapp.com/projects/CRO-map/getJSON.php?state", true);
// 	xhttp.send();

// 	function getData(argument) {
// 		if (argument.readyState == 4 && argument.status == 200) {
// 			var myArrObj = JSON.parse(argument.responseText);
// 			document.getElementById("datumObjave").innerHTML = "Datum objave: " + myArrObj[0].Datum;
// 			// console.log(myArrObj);
// 			for (i=0; i<myArrObj.length; i++) {
// 				// console.log(myArrObj[i]);
// 				var myObj = myArrObj[i];
// 				for (x in myObj) {
// 					innerObj = myObj[x];
// 					if (typeof innerObj != "object") {
// 						continue;
// 					} else {
// 						// console.log(typeof innerObj);
// 						for (y in innerObj) {
// 							var zupanija = innerObj[y].Zupanija;
// 							var brojZarazenih = innerObj[y].broj_zarazenih; 
// 							// console.log(zupanija + ": " + brojZarazenih);
// 							if (document.getElementById(zupanija) != null) {
// 								document.getElementById(zupanija).innerHTML = brojZarazenih;
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

//inicijalno pozivanje aktivnih slucajeva kod ucitavanja stranice
fetchCases('broj_aktivni');

var xhttpTotals = new XMLHttpRequest();
xhttpTotals.onreadystatechange = function() {
	getTotalData(this);
}
xhttpTotals.open("GET", "http://localhost/CRO-map/getTotals.php?total", true);
// xhttpTotals.open("GET", "https://lidijaladic.000webhostapp.com/projects/CRO-map/getTotals.php?total", true);
xhttpTotals.send();

function getTotalData(argument) {
	if (argument.readyState == 4 && argument.status == 200) {
		var myArrObj = JSON.parse(argument.responseText);
		console.log(myArrObj);
		document.getElementById("SlucajeviSvijet").innerHTML = "Slučajevi svijet: " + myArrObj[0].SlucajeviSvijet;
		document.getElementById("SlucajeviHrvatska").innerHTML = "Slučajevi Hrvatska: " + myArrObj[0].SlucajeviHrvatska;
		// console.log(myArrObj);
		// for (i=0; i<myArrObj.length; i++) {
		// 	// console.log(myArrObj[i]);
		// 	var myObj = myArrObj[i];
		// 	for (x in myObj) {
		// 		innerObj = myObj[x];
		// 	}
		// }
	}
}



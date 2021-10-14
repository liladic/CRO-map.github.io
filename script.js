
// Fetch JSON data about number of cases. Initially is called with parameter 'broj_aktivni'.
// After that is called on a push of a button with desired type of data. 

function fetchCases(type) {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	getData(this);
 	}

  	xhttp.open("GET", "getJSON.php?state", true);
  	//xhttp.open("GET", "http://localhost/CRO-map/getJSON.php?state", true);
  	xhttp.send(); 


	//check if data is fetched and show data on site
	function getData(argument) {
	    if (argument.readyState == 4 && argument.status == 200) {
	      	const dataCases = JSON.parse(argument.responseText);
	      	document.getElementById('datumObjave').innerHTML = "Datum objave: " + dataCases.Datum;

	      	const podaciPoZupanijama = dataCases.PodaciDetaljno;


			//-----------------SHOW DATA ON MAP - SHORT WAY -----------------------

	      	for(let i=0; i<podaciPoZupanijama.length; i++) {
	      		if (type == null) {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = ((podaciPoZupanijama[i].broj_umrlih / podaciPoZupanijama[i].broj_zarazenih) * 100).toFixed(2) + "%";
	      		} else {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = podaciPoZupanijama[i][type];
	      		}
	      	}

			// Get all buttons with class="btn"
	      	const btns = document.getElementsByClassName("btn");

	      	// Loop through the buttons and add the active class to the current/clicked button
			for (var i = 0; i < btns.length; i++) {
			  	btns[i].addEventListener("click", function() {
			   		var current = document.getElementsByClassName("active");
			    	current[0].className = current[0].className.replace(" active", "");
			    	this.className += " active";
			  });
			}


	      	//Underneath are commented three ways I showed the data on map at first tries, but the upper one shows most efficient for now

	      	//-----------------FIRST WAY TO SHOW DATA ON MAP -----------------------

	      	/*for(let i=0; i<podaciPoZupanijama.length; i++) {
	      		if(type == 'broj_zarazenih') {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = podaciPoZupanijama[i].broj_zarazenih;
	      			//getBrojZarazenih(i, type)
	      		} else if(type == 'broj_umrlih') {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = podaciPoZupanijama[i].broj_umrlih;
	      		} else if(type == 'broj_aktivni') {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = podaciPoZupanijama[i].broj_aktivni;
	      		} else if (type == null) {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = ((podaciPoZupanijama[i].broj_umrlih / podaciPoZupanijama[i].broj_zarazenih) * 100).toFixed(2) + "%"; ;
	      		} else {
	      			console.log('Greska u ispisu podataka');
	      		}
	      	} */



	      	//------------------SECOND WAY TO SHOW DATA ON MAP - refactoring upper function---------------

	      	/*for(let i=0; i<podaciPoZupanijama.length; i++) {
	      		document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = getBrojZarazenih(i, type);
	      	}

			function getBrojZarazenih(i, type) {
				if (type === 'broj_zarazenih') {
					return podaciPoZupanijama[i].broj_zarazenih;
				} else if (type === 'broj_umrlih') {
					return podaciPoZupanijama[i].broj_umrlih;
				} else if (type === 'broj_aktivni') {
					return podaciPoZupanijama[i].broj_aktivni;
				} else if (type === null) {
					return ((podaciPoZupanijama[i].broj_umrlih / podaciPoZupanijama[i].broj_zarazenih) * 100).toFixed(2) + "%";
				}
			}*/



			//------------------THIRD WAY TO SHOW DATA ON MAP---------------------------------------
	      	//------------------refactoring upper function, first checking type, than doing the for loop

			/*if (type == 'broj_zarazenih') {
	      		showDataOnMap('broj_zarazenih');
	      	} else if (type == 'broj_umrlih') {
	      		showDataOnMap('broj_umrlih');
	      	} else if (type == 'broj_aktivni') {
	      		showDataOnMap('broj_aktivni');
	      	} else if (type == null) {
	      		showPercentageOnMap();
	      	}

			function showDataOnMap(val) {
				for(let i=0; i<podaciPoZupanijama.length; i++) {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = podaciPoZupanijama[i][val];
	      		}
			}

			function showPercentageOnMap() {
				for(let i=0; i<podaciPoZupanijama.length; i++) {
	      			document.getElementById(podaciPoZupanijama[i].Zupanija).innerHTML = ((podaciPoZupanijama[i].broj_umrlih / podaciPoZupanijama[i].broj_zarazenih) * 100).toFixed(2) + "%";
	      		}
			} */
	    }
	}
}

function fetchTotals() {
	const xhttpTotal = new XMLHttpRequest;
	xhttpTotal.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const totalCases = JSON.parse(this.responseText);
			console.log(totalCases);
			document.getElementById('SlucajeviSvijet').innerHTML = "Slučajevi svijet: " + totalCases.SlucajeviSvijet;
			document.getElementById('SlucajeviHrvatska').innerHTML = "Slučajevi Hrvatska: " + totalCases.SlucajeviHrvatska;
			document.getElementById('CijepljeniJednomDozom').innerHTML = "Cijepljeni jednom dozom: " + totalCases.CijepljeniJednomDozom + " / " + ((totalCases.CijepljeniJednomDozom/4072785)*100).toFixed(2) + "%";
			document.getElementById('CijepljeniDvijeDoze').innerHTML = "Cijepljeni s dvije doze: " + totalCases.CijepljeniDvijeDoze+ " / " + ((totalCases.CijepljeniDvijeDoze/4072785)*100).toFixed(2) + "%";
			document.getElementById('CijepljeniUProtekla24').innerHTML = "Cijepljeni u protekla 24 sata: " + totalCases.CijepljeniUProtekla24;
		}
	}

	xhttpTotal.open('GET', 'getTotals.php?state', true);
	xhttpTotal.send();
}


fetchCases('broj_aktivni');

fetchTotals();

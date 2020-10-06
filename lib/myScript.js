function streetNameLookup(){

$.ajax({
	url: "lib/streetNameLookup.php",
	type: "POST",
	dataType: "json",
	data: {
		username: "ish2nv",
		country: "US"
	},
	success: function(result, textStatus, xhr){
			
		if (xhr.status === 200) {
        var mynode = document.getElementById("ourresults");
        	
         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
          var title = document.createElement("h2");
		title.innerHTML = "Result";
        mynode.appendChild(title);
			for(var i = 0; i < result['data'].length;i++) {
		
		var para = document.createElement("p");
		var para2 = document.createElement("p");
		var para3 = document.createElement("p");

		para.innerHTML = "Street name: "+ result['data'][i]['street'];
		para2.innerHTML = " lng: "+ result['data'][i]['lng'];
		para3.innerHTML = " lat: "+ result['data'][i]['lat'];

		para2.setAttribute("style","display:inline;");
		para.setAttribute("style","display:inline;");
		para3.setAttribute("style","display:inline;");

		    mynode.appendChild(para);
		    mynode.appendChild(para2);
		    mynode.appendChild(para3);
            var mybr = document.createElement('br');
            mynode.appendChild(mybr);

			}
		}
	},
	error:function(result, textStatus, xhr){
		   var mynode = document.getElementById("ourresults");
        	
         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
          mynode.appendChild(xhr);
	}
});
}

function findNearByWeather(){
$.ajax({
	url: "lib/findNearByWeather.php",
	type: "POST",
	dataType: "json",
	data: {
		username: "ish2nv",
		lat: "50",
		lng:"-6"
	},
	success: function(result, textStatus, xhr){
			
			if (xhr.status === 200) {

        var mynode = document.getElementById("ourresults");

         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
      var title = document.createElement("h2");
		title.innerHTML = "Result";
        mynode.appendChild(title);
		var para = document.createElement("p");
		var para2 = document.createElement("p");
		var para3 = document.createElement("p");
		var para4 = document.createElement("p");
		var para5 = document.createElement("p");
		var para6 = document.createElement("p");
		var para7 = document.createElement("p");

		para.innerHTML = "Weather condition: "+ result['data']['weatherCondition'];
		para2.innerHTML = " Wind speed: "+ result['data']['windSpeed'];
		para3.innerHTML = " Humidity: "+ result['data']['humidity'];
		para4.innerHTML = " Temperature: "+ result['data']['temperature'];
		para5.innerHTML = " Station name: "+ result['data']['stationName'];
		para6.innerHTML = " lng: "+ result['data']['lng'];
		para7.innerHTML = " lat: "+ result['data']['lat'];


		    mynode.appendChild(para);
		    mynode.appendChild(para2);
		    mynode.appendChild(para3);
		    mynode.appendChild(para4);
		    mynode.appendChild(para5);
		    mynode.appendChild(para6);
		    mynode.appendChild(para7);

		}
	},
	error:function(result, textStatus, xhr){
   var mynode = document.getElementById("ourresults");
        	
         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
          mynode.appendChild(xhr);

          	}
});

}

function findNearestIntersection(){
$.ajax({
	url: "lib/findNearestIntersection.php",
	type: "POST",
	dataType: "json",
	data: {
		username: "ish2nv",
		lat: "37",
		lng:"-122"
	},
	success: function(result, textStatus, xhr){
			
		if (xhr.status === 200) {
        var mynode = document.getElementById("ourresults");
         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
        var title = document.createElement("h2");
		title.innerHTML = "Result";
        mynode.appendChild(title);
		var para = document.createElement("p");
		var para2 = document.createElement("p");
		var para3 = document.createElement("p");
		var para4 = document.createElement("p");
		var para5 = document.createElement("p");
		var para6 = document.createElement("p");
		var para7 = document.createElement("p");

		para.innerHTML = "Place name: "+ result['data']['placename'];
		para2.innerHTML = " Street 1: "+ result['data']['street1'];
		para3.innerHTML = " Street 2: "+ result['data']['street2'];
		para4.innerHTML = " Street 1 bearing: "+ result['data']['street1Bearing'];
		para5.innerHTML = " Street 2 bearing: "+ result['data']['street2Bearing'];
		para6.innerHTML = " lng: "+ result['data']['lng'];
		para7.innerHTML = " lat: "+ result['data']['lat'];


		    mynode.appendChild(para);
		    mynode.appendChild(para2);
		    mynode.appendChild(para3);
		    mynode.appendChild(para4);
		    mynode.appendChild(para5);
		    mynode.appendChild(para6);
		    mynode.appendChild(para7);

		}
	},
	error:function(result, textStatus, xhr){
   var mynode = document.getElementById("ourresults");
        	
         while (mynode.firstChild) {
          mynode.removeChild(mynode.lastChild);
          }
          mynode.appendChild(xhr);

          	}
});

}
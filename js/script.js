

$(document).ready(function(){

	map = new GMaps({
  		div: '#map',
  		zoom: 16,
  		lat: 49.0018,
  		lng: 21.2393,
  		click: function(e) {
  		var longitude = (map.getCenter().lng()).toFixed(4);
		var latitude = (map.getCenter().lat()).toFixed(4);
    	requestForecast(longitude,latitude);
  	}
});

	function requestForecast(lon,lat){
		$.ajax({
			url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+lat+","+lon,
			datatype:"json",
			method:"GET"
		}).done(function(data){
			console.log(data);
			var skycons = new Skycons({"color": "#6888b1"});
			$(".forecast").remove();
				$("#today").append("<div class='forecast'>"+
					"<h2>Today</h2>"+
					'<div>Zone: '+data.timezone+'</div>'+
					'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+' Time: '+moment.unix(data.currently.time).format("hh:mm")+'</div>'+
					"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
					"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
					"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
					"<div>Dew point: "+data.currently.dewPoint+"</div>"+
					"<div>Humidity: "+data.currently.humidity+"</div>"+
					"<div>Wind speed: "+data.currently.windSpeed+"</div>"+
					"<div>Pressure: "+data.currently.pressure+"</div>"+
					'<canvas id="icon" width="100" height="100"></canvas>'+
					"</div>");
				skycons.set("icon",data.currently.icon);

				for(var i=1;i<8;i++){
					$("#thisweek").append(
						"<div class='weekly w3-card-2 w3-theme-d4'>"+
						"<h5><b>"+moment.unix(data.daily.data[i].time).format("DD.MM.YYYY")+"</b></h5>"+
						"<div>"+((data.daily.data[i].temperatureMax-32)*0.5556).toFixed(1)+"°C</div>"+
						'<canvas id="icon'+i+'" width="100" height="100"></canvas>'+
						"<div><i>"+data.daily.data[i].summary+"</i></div>"+
						"</div>"
					);
					skycons.set("icon"+i,data.daily.data[i].icon);
				}
				skycons.play();
		});

	}

});
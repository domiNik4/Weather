

$(document).ready(function(){
		
		var citiesObj = { 
			austria : [{name:"Vienna",lon:"16.363449",lat:"48.210033"},{name:"Salzburg",lon:"13.033229",lat:"47.811195"},{name:"Graz",lon:"15.421371",lat:"47.076668"}],
			poland : [{name:"Warsaw",lon:"21.017532",lat:"52.237049"},{name:"Kraków",lon:"19.939390",lat:"50.061642"}, {name:"Gdańsk",lon:"18.638306",lat:"54.372158"}],
			slovakia : [{name:"Bratislava",lon:"17.123394",lat:"48.141148"},{name:"Žilina",lon:"18.741952",lat:"49.221590"},{name:"Prešov",lon:"21.239607",lat:"48.997906"}],
		};


		$("#countrySelect").on("change",function(){
			$("#cities-content").html("");
			if($(this).val()=="austria"){
				$("#cities-content").append("<div class='w3-card-2 w3-theme-l5 city-container' id='"+citiesObj.austria[0].name+"'><h3>"+citiesObj.austria[0].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.austria[1].name+"'><h3>"+citiesObj.austria[1].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.austria[2].name+"'><h3>"+citiesObj.austria[2].name+"</h3</div>");
				var json;

				$("#Vienna").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.austria[0].lat+","+citiesObj.austria[0].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Vienna").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});

				$("#Salzburg").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.austria[1].lat+","+citiesObj.austria[1].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Salzburg").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");

				});

			});

				$("#Graz").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.austria[2].lat+","+citiesObj.austria[2].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Graz").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});
			}
			if($(this).val()=="poland"){
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.poland[0].name+"'><h3>"+citiesObj.poland[0].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.poland[1].name+"'><h3>"+citiesObj.poland[1].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.poland[2].name+"'><h3>"+citiesObj.poland[2].name+"</h3</div>");
				$("#Warsaw").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.poland[0].lat+","+citiesObj.poland[0].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Warsaw").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});

				$("#Kraków").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.poland[1].lat+","+citiesObj.poland[1].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Kraków").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});

				$("#Gdańsk").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.poland[2].lat+","+citiesObj.poland[2].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Gdańsk").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});
			}
			if($(this).val()=="slovakia"){
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.slovakia[0].name+"'><h3>"+citiesObj.slovakia[0].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.slovakia[1].name+"'><h3>"+citiesObj.slovakia[1].name+"</h3</div>");
				$("#cities-content").append("<div class='w3-card-2 city-container  w3-theme-l5' id='"+citiesObj.slovakia[2].name+"'><h3>"+citiesObj.slovakia[2].name+"</h3</div>");
				$("#Bratislava").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.slovakia[0].lat+","+citiesObj.slovakia[0].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Bratislava").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
					
				});

			});

				$("#Žilina").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.slovakia[1].lat+","+citiesObj.slovakia[1].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Žilina").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});

				$("#Prešov").on("click",function(){
				$.ajax({
					url:"https://api.darksky.net/forecast/8b23ae714d4a62ddc3da552f4314e302/"+citiesObj.slovakia[2].lat+","+citiesObj.slovakia[2].lon,
					datatype:"json",
					method:"GET"
				}).done(function(data){
					$(".forecast").remove();
					$("#Prešov").append("<div class='forecast'>"+
						'<div>Date: '+moment.unix(data.currently.time).format("DD.MM.YYYY")+'</div>'+
						"<div>Temperature: "+((data.currently.temperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Apparent temperature: "+((data.currently.apparentTemperature-32)*0.5556).toFixed(1)+"°C</div>"+
						"<div>Cloud cover: "+data.currently.cloudCover+"</div>"+
						"<div>Dew point: "+data.currently.dewPoint+"</div>"+
						"<div>Humidity: "+data.currently.humidity+"</div>"+
						"</div>");
				});

			});
			}
		});

			

	});
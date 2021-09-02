function getClima() {
    
    $.ajax({

        method: 'get',

        crossDomain: true,

        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=8ced6c0fff22cf22effd2ff3dfa02c70&lang=pt_br',

        dataType: 'json',

        success: function (data) {
            
            console.log(data.weather[0].description);
            $('#umidade').html(data.main.humidity+ '%');
            
            
            let conveterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(conveterCelsius)+'C°');
             $('#Temperatura').html(celsius);
             
             $('#Condição').html(data.weather[0].description);
             
             $('#Velocidade_do_vento').html(data.wind.speed+ 'm/s');
             
             let icone = 'img/'+data.weather[0].icon+'.png';
             $('#iconeCondicao').attr('src', icone);
             
              $('#pordosol').html(data.sys.sunset);            
            
             $('#nascerdosol').html(data.sys.sunrise);            
            

        },

        error: function (argument) {

            alert('Falha ao obter dados!');

        }

    });

}

window.onload = function () {

    getClima();

};



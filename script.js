var username = document.getElementById("osintbox").value;

$('.send').on('click', function(){

  $.getJSON('https://ipapi.co/'+$('.ip').val()+'/json', function(data){
      $('.region').text('Region: ' + data.region);
      $('.city').text('City: ' + data.city);
      $('.country').text('Country Code: ' + data.country);
      $('.longitude').text('Longitude: ' + data.longitude);
      $('.latitude').text('Latitude: ' + data.latitude);
      $('.org').text('ISP: ' + data.org);
      $('.timezone').text('Timezone: ' + data.timezone);
  });
});

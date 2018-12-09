window.onload = function() {
  clock();
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if(hour==0){
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }
  document.getElementById('currentTime').innerHTML = hour+':'+min + mid ;
    setTimeout(clock, 1000);
    }
}
var latlngPos = new google.maps.LatLng(51.507393, -0.127700);

var myOptions = {
   zoom: 10,
   center: latlngPos,
   mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"), myOptions);
var markerPos = new google.maps.LatLng(51.507393, -0.127700);


var marker = new google.maps.Marker({
   position: markerPos,
   map: map,
   title: "PC Pro Offices"
});

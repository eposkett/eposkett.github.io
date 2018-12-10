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
    if (document.getElementById('currentTime') !== null) {
      document.getElementById('currentTime').innerHTML = hour+':'+min + mid ;
        setTimeout(clock, 1000);
        }
    }
}


    function contact(){
      var hello = document.getElementById("form-name").value;
      console.log('Contact form submitted');
      console.log(document.getElementById('contactform'))
      alert('Thank you for submitting your message, '+ hello +'. We will be in touch soon.');
      return 'Contact form submitted';
    }

    function search(){
      var location = document.getElementById("form-search").value;
      console.log('Search executed');
      alert('Thank you for submitting your search for Brunch in '+location+'. This functionality will be added soon.');
      return 'Search executed';
    }

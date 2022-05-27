$.getJSON("https://ipinfo.io", function(data) {
  $("#Cyber").html(`IP: ${data.ip}<br>HOST: ${data.hostname}<br>COUNTRY: ${data.country}`)
});
setTimeout(()=>{
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}, 1500)

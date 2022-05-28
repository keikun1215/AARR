//前提
let defaultHide = ["#Shidou"]
for(let h of defaultHide){
$(h).hide()
}
//クライアント情報(見てる人へ:見ての通りこれは雰囲気なのでIPなどはサーバーに送信していません。)
$.getJSON("https://ipinfo.io", function(data) {
  $("#Cyber").html(`IP: ${data.ip}<br>HOST: ${data.hostname}<br>COUNTRY: ${data.country}`)
});
//ロード画面
setTimeout(()=>{
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}, 1500)
//関数達

/**
 * @param {string}
 */
function HS(s, h){
  $(s).slideToggle(100)
  if($(h).text().startsWith('－')){
    $(h).text('＋'+$(h).text().slice(1))
  } else if($(h).text().startsWith('＋')){
    $(h).text('－'+$(h).text().slice(1))
  }
}

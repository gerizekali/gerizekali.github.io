var ipId = document.getElementById("ip");
const api = "https://api.ipify.org?format=json";

fetch(api)
  .then(response => response.json())
  .then(data => {
    var ipAddress = data.ip; // JSON verisinden "ip" değerini al

    // function yaziAnimasyon() { 
    //     setTimeout(function() {
    //         var typed = new Typed("#ip",
    //         {
    //             strings: ipAddress,
    //             typeSpeed: 40,
    //             backDelay:  500,
    //             onComplete: function() {
    //                 return 
    //             }
    //         }
            
    //         )
    //     })
    // }

    ipId.textContent = "" + ipAddress;

  })
  .catch(error => {
    console.error("API isteği başarısız oldu:", error);
});

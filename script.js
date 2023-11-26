function sendWhatsAppMessage() {
   
    var phoneNumber = "085342320251";
    var message = "Halo, untuk informasi lebih lanjut silahkan hubungi admin ";
  
   
    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  
    
    window.open(url);
  }
$(document).ready(function () {

   
  
    $(".headerspace").click(function() {
        
      if ($('h1').text() === "JavaScript and JQuery HomeWork-Week01") { 
        $('h1').text("Hack-your-Future") 
      } else { 
        $('h1').text("JavaScript and JQuery HomeWork-Week01") 
      }
      $('.headerspace').fadeOut(1000)
      $('.headerspace').fadeIn()
  });
    
    
    $('.tablinks').click(function(){
      $('.tablinks').fadeOut()
      $('.tablinks').fadeIn()
    })
    $('.run').css("background", "skyblue")
    
    
    
  })
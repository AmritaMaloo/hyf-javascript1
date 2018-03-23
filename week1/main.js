$(document).ready(function () {

  $('body').addClass('shake')

  $('.headerspace').click(function () {
    $('.headerspace').fadeOut()
    $('.headerspace').fadeIn()

  })
  $('.tablinks').click(function(){
    $('.tablinks').fadeOut()
    $('.tablinks').fadeIn()
  })
  $('.run').css("background", "skyblue")
  $('.tablinks').click(function(){
    $('.tablinks').addClass("animated shake")
})

  $('#Quest1 .run').click(function(){
  $("#Quest1 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest2 .run').click(function(){
    $("#Quest2 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest3 .run').click(function(){
  $("#Quest3 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest4 .run').click(function(){
  $("#Quest4 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest5 .run').click(function(){
  $("#Quest5 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest6 .run').click(function(){
  $("#Quest6 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest7 .run').click(function(){
  $("#Quest7 .run").parent().css("background-color", "lightgrey");
  })
  $('#Quest8 .run').click(function(){
  $("#Quest8 .run").parent().css("background-color", "lightgrey");
  })
})
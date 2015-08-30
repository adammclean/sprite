$(document).ready(function(){
  select_sprite();
})

function select_sprite(){
    var sprite = document.getElementById("imagesprite");
    var num = math.random();
    if(num <= .33){
      var sprite = $('#imagespriteA');
    }
    elseif(num > .33 && num < .66){
      var sprite = $('#imagespriteB');
    }
    else(){
      var sprite = $('#imagespriteC');
    }
};

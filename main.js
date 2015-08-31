$(document).ready(function(){
  select_sprite();
})

function select_sprite(){
    // var sprite = document.getElementById("#imagesprite");

    function rand(){
       var num = math.random();
       console.log(num);
       return num;
    };
    if (num <= .33){
      $("#imagesprite").css("height",$("#imagespriteA").css);
    }
    else if (num > .33 && num < .66){
      $("#imagesprite").css("height",$("#imagespriteB").css);
    }
    else {
      $("#imagesprite").css("height",$("#imagespriteC").css)  ;
    }
};

$(document).ready(function(){
  select_sprite();
})

function select_sprite(){

    var num = Math.random();
    alert(num);

    if (num <= .33){
      $("#imagesprite").css("background-position", $("#imagesprite").css("background-position"));
      alert($("#imagesprite").css("background-position"));

    }
    else if (num > .33 && num < .66){
      $("#imagesprite").css("background-position", $("#imagespriteA").css("background-position"));
      alert($("#imagespriteA").css("background-position"));
    }
    else {
      $("#imagesprite").css("background-position", $("#imagespriteB").css("background-position"));
      alert($("#imagespriteB").css("background-position"));

    }
};

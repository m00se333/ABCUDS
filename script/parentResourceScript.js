var $brochureSelect = $("#docs");
var brochure = $("#docs option:selected").text();
var $languageSelect = $(".language");
var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
var isiPad = navigator.userAgent.match(/iPad/i) != null;



$(function(){
  var map = {
    "eng" : "English",
    "esp" : "Español",
    "kor" : "한국어",
    "viet" : "Tiếng Việt",
    "chin" : "中文"
  }
  $brochureSelect.on("change", function(){

    $(".language").html("");
    

    var selected = $("option:selected", this).attr("class");

    var arr = selected.split(" ");

    arr.forEach(function(k){
     
    $(".language").append("<option id="+k+">"+map[k]+"</option>");

     

    });
  });
});

        

    if (isiPhone === true){
      $brochureSelect.on("change", function(){
        $("#pdfButton").remove();
      if ($("#docs option:selected").text().match("^-")){
            $("#langSelectBox .language").hide();
          } else {
            $("#langSelectBox .language").show();
            $("#langSelectBox").after("<button id='pdfButton'>View PDF</button>");
          }
          var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/eng.jpg";
          $("#preview img").attr("src", file)
          $("#pdfButton").attr("href", file)
          //console.log("test");

        });

        $languageSelect.on("change", function(){
          var language = $(".language").val();
          var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/" + $(".language option:selected").attr("id") + ".jpg";
          $("#preview img").attr("src", file)
          $("#pdfButton").attr("href", file)
          //console.log(file);
        });
      
        //end if
        } else if (isiPad === true) {
          $("#langSelectBox").after($("#preview"))
          $brochureSelect.on("change", function(){
          if ($("#docs option:selected").text().match("^-")){
                $("#langSelectBox .language").hide();
              } else {
                $("#langSelectBox .language").show();
              }
              var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/eng.jpg";
          $("#preview img").attr("src", file)
          //console.log("test");

        });

        $languageSelect.on("change", function(){
          var language = $(".language").val();
          var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/" + $(".language option:selected").attr("id") + ".jpg";
          $("#preview img").attr("src", file)
          //console.log(file);
        
            });
        //end else if
          } else {

        $brochureSelect.on("change", function(){

        	if ($("#docs option:selected").text().match("^-")){
        	 	$("#langSelectBox .language").hide();
        	} else {
        		$("#langSelectBox .language").show();
        	}
          var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/eng.jpg";
          $("#preview img").attr("src", file)
          //console.log("test");

        });

        $languageSelect.on("change", function(){
          var language = $(".language").val();
          var file = "img/testPDF/" + $("#docs option:selected").attr("id") + "/" + $(".language option:selected").attr("id") + ".jpg";
          $("#preview img").attr("src", file)
          //console.log(file);
        });
      }

      

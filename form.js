var k1 = document.getElementById("p1");
      var p2 = document.getElementById("p2");
      var btn_ref = document.getElementById("btn");
      function submitwork(){
        if(k1.value == p2.value)
        {
          btn_ref.disabled = false;  
          k1.style.border = "3px solid green";
          p2.style.border = "3px solid green";
          console.log(k1.value);
        }
        else{
          btn_ref.disabled = true;  
          k1.style.border = "3px solid red";
          p2.style.border = "3px solid red";
         
        }
      }
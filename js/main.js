let gallery = document.querySelector(".gallery");
let img = document.querySelectorAll("#img");
let imgBig = document.getElementById("bigImg");
let LeftArrow = document.getElementById("left");
let RightArrow = document.getElementById("right");
let slide = document.getElementById("slide")
let opacity = document.querySelectorAll(".block_opacity");

imgBig.classList.add("opacity");
    for(let i in img){

        
       opacity[i].onclick = () => {


                imgBig.classList.remove("opacity");
                imgBig.src = img[i].src;   
                imgBig.style.transition = "all 1s ease-out"       
            
            

       }


    }
    slide.style.transform = `translateX(0px)`;
    
    
    
    LeftArrow.onclick = () => {
      let left = -955;
      let left2 = left - (- 320);
      let left3 = left2 - (-320);
      
      if(slide.style.transform == `translateX(0px)`){

         slide.style.transform = `translateX(${left}px)`;

      }
      else if(slide.style.transform == `translateX(${left}px)`){

         slide.style.transform = `translateX(${left2}px)`;


      }
      else if(slide.style.transform == `translateX(${left2}px)`){

         slide.style.transform = `translateX(${left3}px)`;


      }
      else if(slide.style.transform == `translateX(${left3}px)`){

         slide.style.transform = `translateX(0px)`;


      }
      

}

RightArrow.onclick = () => {

   let right = -320;
   let right1 = right + (- 315);
   let right2 = right1 + (- 315);

   
   if(slide.style.transform == `translateX(0px)`){

      slide.style.transform = `translateX(${right}px)`;

   }
   else if(slide.style.transform == `translateX(${right}px)`){

      slide.style.transform = `translateX(${right1}px)`;


   }
   else if(slide.style.transform == `translateX(${right1}px)`){

      slide.style.transform = `translateX(${right2}px)`;

   }
   else if(slide.style.transform == `translateX(${right2}px)`){

      slide.style.transform = `translateX(0px)`;


   }



}
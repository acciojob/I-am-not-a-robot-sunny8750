// //your code here
//  // created an h3 element
//  let heading3 = document.createElement("h3")
//  heading3.setAttribute("id", "h")
//  heading3.innerHTML = "Please click on the identical tiles to verify that you are not a robot."
//  document.body.prepend(heading3)

//  // creared btn
//  let arr = ["reset", "verify"]
//  for(let t of arr){
//    let btn = document.createElement("button")
//    btn.setAttribute("id", t)
//    btn.innerHTML = t.toUpperCase()
//    // btn.style.backgroundColor = "blue"
//    // btn.style.color = "white"
//    // btn.style.cssText = "color: white; background-color: blue;"
//    btn.style.display = "none"
//    document.body.append(btn)

//  }

//  // generating 6thclass name randomly from 5 values
//  let imgClass = ["img1", "img2", "img3", "img4", "img5"]
//  let randomIndex1 = Math.floor(Math.random() * imgClass.length)
//  let randomImg = imgClass[randomIndex1]
//  imgClass.push(randomImg) // ["img1", "img2", "img3", "img4", "img5", "img3"]
 
//    // shuffling the array - so that img will generate randomly at each position after reload
//    let arr1 = []
//    // let randomIndex2 = Math.floor(Math.random() * imgClass.length) // 3  , 1,2,3,5
//    let k = 0
//    while(k<imgClass.length){
//        // if(k == imgClass.length ){
//        //     break
//        // }
//        let randomIndex2 = Math.floor(Math.random() * imgClass.length) // 3
//        if(arr1[randomIndex2] == undefined){
//            arr1[randomIndex2] = imgClass[k]
//            k = k+1
//        }
//        else if(arr1[randomIndex2] != undefined){
//            continue
//        }

//    }
   


//    // selecting all images
//  let images = document.querySelectorAll("img") // 0 - 6

//  // setting attibute - class Name to all images
//  for(let i = 0; i <= arr1.length-1; i++){
//    images[i].setAttribute("class", arr1[i]) 
//    images[i].setAttribute("id", i)
//  }

//  for(let t of images){
//    t.addEventListener("click", userOrRobot)
//  }

//  let resetBtn = document.getElementById("reset")
//  let verifyBtn = document.getElementById("verify")


//  let prevImgId = ""
//  let count = 0
//  function userOrRobot(e){

//    resetBtn.style.display = "inline"
//    let currentImgId = e.target.id
//    // change border of image after click 
   
//    if(currentImgId != prevImgId){
//       images[currentImgId].classList.add("selected")
//       count++ 
//       prevImgId = currentImgId
//       if(count == 2){
//             verifyBtn.style.display = "inline"
//       }
//    }

//  }

//    resetBtn.addEventListener("click", ()=>{
//        verifyBtn.style.display = "none"
//        resetBtn.style.display = "none"
//        count = 0
//        selctedImages = document.querySelectorAll(".selected") 

//        for(let t of selctedImages){
//            t.classList.remove("selected")
//        }

//    })

//    verifyBtn.addEventListener("click", ()=>{
//        let p = document.createElement("p")
//        selctedImages = document.querySelectorAll(".selected") 
//        let class1 = selctedImages[0].className
//        let class2 = selctedImages[1].className

//        if(class1==class2){
          
//            p.innerHTML = "You are a human. Congratulations! "
           
//        }
//        else{
           
//            p.innerHTML = "We can't verify you as a human. You selected the non-identical tiles "
//        }
//        verifyBtn.style.display = "none"
//        document.body.append(p)
//    })




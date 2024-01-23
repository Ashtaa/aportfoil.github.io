document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    let currentIndex = 0;
    const itemWidth = galleryItems[0].offsetWidth;
  
    function slideGallery(direction) {
      if (direction === "next") {
        currentIndex++;
        if (currentIndex >= galleryItems.length) {
          currentIndex = 0;
        }
      } else if (direction === "prev") {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = galleryItems.length - 1;
        }
      }
  
      const transformValue = -currentIndex * itemWidth;
      gallery.style.transform = `translateX(${transformValue}px)`;
    }
  
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.addEventListener("click", function() {
      slideGallery("next");
    });
  
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "Previous";
    prevBtn.addEventListener("click", function() {
      slideGallery("prev");
    });
  
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.appendChild(prevBtn);
    galleryContainer.appendChild(nextBtn);
  });


  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
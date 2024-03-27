window.onload = function() {
    preloadImages(["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"]);
};

function preloadImages(imageArray) {
    for (var i = 0; i < imageArray.length; i++) {
        var img = new Image();
        img.src = imageArray[i];
    }
}

window.onload = function() {
    preloadImages(["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"]);
    startBannerCycle();
};

var currentImageIndex = 0;

function startBannerCycle() {
    setInterval(function() {
        var images = document.getElementById("bannerImages").getElementsByTagName("img");
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }, 3000);
}


window.onload = function() {
    preloadImages(["images/firefighter.jpg", "images/work.jpg", "images/silhouette.jpg", "images/event.jpg"]);
};

function preloadImages(imageArray) {
    for (var i = 0; i < imageArray.length; i++) {
        var img = new Image();
        img.src = imageArray[i];
    }
}


window.onload = function() {
    preloadImages(["images/firefighter.jpg", "images/work.jpg", "images/silhouette.jpg", "images/event.jpg"]);
    addImageHover();
};

function addImageHover() {
    var galleryImages = document.querySelectorAll(".gallery img");
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("mouseover", function() {
            this.style.opacity = "0.5"; // Change opacity on mouseover
        });
        galleryImages[i].addEventListener("mouseout", function() {
            this.style.opacity = "1"; // Reset opacity on mouseout
        });
    }
}

class Slider {
    constructor(reviews, leftButton, rightButton) {
        this.allReviews = reviews;
        this.leftButton = leftButton;
        this.rightButton = rightButton;
        this.reviewsNumber = this.allReviews.children.length;
        this.slideIndex = 0;
        this.leftMargin = 0;
        this.leftButton.onclick = this.moveLeft(this);
        this.rightButton.onclick = this.moveRight(this);
        window.addEventListener("resize", () => this.moveSlider(this));
    }

    moveSlider(thisSlider) {
        thisSlider.leftMargin = (thisSlider.allReviews.clientWidth / thisSlider.reviewsNumber) * thisSlider.slideIndex;
        thisSlider.allReviews.style.marginLeft = -thisSlider.leftMargin + "px";
    } 

    moveLeft(thisSlider) {
        return function() {
            if (thisSlider.slideIndex === 0) thisSlider.slideIndex = thisSlider.reviewsNumber - 1;
            else thisSlider.slideIndex--;
        
            thisSlider.moveSlider(thisSlider);
        }  
    }

    moveRight(thisSlider) {
        return function() {
            if (thisSlider.slideIndex === thisSlider.reviewsNumber - 1) thisSlider.slideIndex = 0;
            else thisSlider.slideIndex++;

            thisSlider.moveSlider(thisSlider);
        }  
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const allReviews = document.querySelector(".reviews--slider");
    const leftButton = document.querySelector(".reviews--to-left");
    const rightButton = document.querySelector(".reviews--to-right");
    new Slider(allReviews, leftButton, rightButton);
});
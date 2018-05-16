// $(document).ready(function() {
//     $('.bigcircle').on('click', function(){
//      console.log('somethign');
//         $('.block').clone().appendTo('.wrapper');
//     });

/*
 Arrays are 0 based
 calssArray[0] = block2
 calssArray[1] = block3
 etc
*/
var classArray = ['block2', 'block3', 'block4', 'block5', 'block6', 'bigcircle'];

$(document).ready(function() {
    $('.block').on('click', function() {
    	console.log(this + ' current element');

        // get element's classes, and iterate them
        console.log('Contains classes: ');
        for(i = 0; i < this.classList.length; i++) {
            console.log(this.classList[i]);
        }

        //clone(true, true) - clones the element with events
    	var newElement = $(this).clone(true, true); 
        
         //remove existing classes 
        newElement.removeClass();
         
         // append random class
         var newClass = classArray[randomNumber(classArray.length)];
        newElement.addClass("block cloned " + newClass);
        console.log('Appended new class - ' + newClass);

         var wrapperHeight = document.getElementById('wrapper').clientHeight;
         var wrapperWidth = document.getElementById('wrapper').clientWidth;
         console.log("Screen: " + wrapperWidth + "X" + wrapperHeight);
         
         // add styles
        newElement.css({'position': 'absolute'});
        newElement.css({'top': randomNumber(100) + "%"});
        newElement.css({'left': randomNumber(100) + "%"});
        
        // append elem to wrapper
        newElement.appendTo('.wrapper');
    });
});

/* 
Return random number 
e.g randomNumber(5); 
will generate between 0 - 5
*/
function randomNumber(maxNumber) {
     var random = Math.floor( Math.random() * maxNumber );
     //console.log(random);
     return random;
}
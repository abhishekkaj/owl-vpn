
// Scrolling Script Starts 

scroll(()=>{
    document.querySelectorAll('#home #contact, #about-us, #features, #gallery, #testimonials').scrollIntoView();
})

// Scrolling Script Ends


// Change Background Color Script Starts 

function changeColor() {
    let color = document.getElementById('hex-input-box').value;
     document.body.style.backgroundColor = color;
}

// Change Background Color Script Ends

// Greetings Script Starts 

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 16)
        greet = 'Good Afternoon';
    else if (hrs >= 16 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('greetings').innerHTML =
        '<b>' + greet + '</b>, Guest';

// Greetings Script Ends


// Greetings Auto Hide Script Starts 

        setTimeout(() => {
            const greetBox = document.getElementById('greetings-box');
            greetBox.style.visibility= 'hidden';
          }, 10000);
          
// Greetings Auto Hide Script Ends

// Greetings Auto Hide Script Starts 

       function closeGreetings()  {
            const closeBox = document.getElementById('greetings-box');
            closeBox.style.visibility= 'hidden';
          };
          
// Greetings Auto Hide Script Ends



window.addEventListener('mouseup', function(event){
	var close = document.getElementById('close');
	if (event.target != close ) {
        document.getElementById("checkbox").checked = false;
    }
});
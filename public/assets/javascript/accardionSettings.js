//this is the button
var acc = document.getElementsByClassName("course-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function () {
    //variables
    var panel = this.nextElementSibling;
    var coursePanel = document.getElementsByClassName("course-panel");
    var courseAccordion = document.getElementsByClassName("course-accordion");
    var courseAccordionActive = document.getElementsByClassName(
      "course-accordion active"
    );

    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight) {
      //minifies current pannel if already open
      panel.style.maxHeight = null;
      //removes the 'active' class as toggle didnt work on browsers minus chrome
      this.classList.remove("active");
    } else {
      //pannel isnt open...
      //goes through the buttons and removes the 'active' css (+ and -)
      for (var ii = 0; ii < courseAccordionActive.length; ii++) {
        courseAccordionActive[ii].classList.remove("active");
      }
      //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
      for (var iii = 0; iii < coursePanel.length; iii++) {
        this.classList.remove("active");
        coursePanel[iii].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      //adds the 'active' addition to the css.
      this.classList.add("active");
    }
  }; //closing to the acc onclick function
} //closing to the for loop.

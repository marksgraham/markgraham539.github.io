//This is the event utility object. It is used to add event handlers to elements.
//Once the addHandler method has been called, then every time an event of that type happens on that element, the handler function will be called
//E.g.  "EventUtil.addHandler(myNiceDiv,"click",turnBlue);" --> From now on, if the element that myNiceDiv refers to is clicked on, the turnBlue
//function will be called.
var EventUtil = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type, handler);
		}else{
			element["on"+type] = handler;
		}
	},
	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if (element.detachEvent){
			element.detachEvent("on"+type, handler);
		}else{
			element["on"+type] = null;
		}
	}
};

/*VARIABLES*/
//Declare a variable timeBtn, which contains a reference to the timeButton element.
var timeBtn = document.getElementById('timeButton');
//Declare a variable timeBtn2, which contains a reference to the timeButton2 element.
var timeBtn2 = document.getElementById('timeButton2');
//Declare a variable timeTxt, which contains a reference to the demo element.
var timeTxt = document.getElementById('demo');//Note: the lower case d in 'Id'.
//Declare a variable timeTxt2, which contains a reference to the currentDateAndTime element.
var timeTxt2 = document.getElementById('currentDateAndTime');

//Note: the object 'document' and the method 'getElementById()' are part of the Document Object Model (DOM).
//The DOM is an API that allows javascript to interact with web pages.
//The DOM is not part of javascript itself. If you were using javascript to program an elevator or a sprinkler system or something
//then you would not use 'document' or 'getElementById()', but since you are programming for the web, you can use them.
//I think this is important, because javascript is not web-specific, it is just a programming language. It is the DOM and the
// Browser Object Model (BOM), which allow us to use javascript for web pages.

/*FUNCTIONS*/
//Update the time text using the innerHTML method
function updateTimeTextInnerHTML(){
	timeTxt.innerHTML = Date(); //Set the html between the tags of the demo element to the current date and time.
}

//Note: Using the .innerHTML property is considered a bad idea for a number of reasons that I can't really remember. The function below
//shows you how to do the same thing without using it. It is a bit longer, but it is better ...for reasons I can't remember.
//Note: 'innerHTML', 'createTextNode()', '.firstChild', 'removeChild()', and 'appendChild()' are all part of the DOM.

//Update the time text without using the innerHTML method
function updateTimeText(){
	var currentDate = Date(); //Initialise variable currentDate which is a string containing the current date and time.
	var currentDateTxtNode = document.createTextNode(currentDate); //Create a text node which contains the current date and time.
	while(timeTxt2.firstChild){ //If the timeTxt <p> element has any text nodes...
		timeTxt2.removeChild(timeTxt2.firstChild); //...remove them.
	}
	timeTxt2.appendChild(currentDateTxtNode);//Attach the text node containing the current date to the timeText <p> element.
}

/*EVENT HANDLERS*/
EventUtil.addHandler(timeBtn,"click",updateTimeTextInnerHTML);//Whenever timeButton is clicked, call the function updateTimeTextInnerHTML
EventUtil.addHandler(timeBtn2,"click",updateTimeText);//Whenever timeButton2 is clicked, call the function updateTimeText




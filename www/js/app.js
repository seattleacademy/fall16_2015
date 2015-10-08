var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
	$("#testme").html("Gary is Wonderful");
	setInterval(countup,3000);
}
var myvalue = 3;
function countup(){
	myvalue = myvalue*1 + 1;
	$("#testme").html(myvalue);
	navigator.compass.getCurrentHeading(onSuccess,onError)
}

function onSuccess(heading){
	$("#mycompass").html(heading);
}

function onError(error){
	$("#mycompass").html(error);
}
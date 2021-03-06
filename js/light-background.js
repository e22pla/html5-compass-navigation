//on startup, draw the background

var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

drawBackground();

// the background is drawn on a square (easier for calculations) and then stretched
function drawBackground()
{
	if (context)
	{
		var canvasSize = canvas.width; // width must be the same as the height
		var canvasCenter = canvasSize / 2; 
		var circleSize = canvasSize;
		var theme = greyTheme(); // pick the color set
	
		// Create first radial gradient
		var gradient = context.createRadialGradient(canvasCenter, canvasCenter, 0, canvasCenter, canvasCenter, circleSize); 
		gradient.addColorStop(0, theme[0]);
		gradient.addColorStop(0.27, theme[1]);
		gradient.addColorStop(0.9, theme[2]);
	
		// draw the first radial gradient
		drawRect(gradient, canvasSize);
	  
		// Create second radial gradient
		gradient = context.createRadialGradient(canvasCenter, canvasCenter, 0, canvasCenter, canvasCenter, circleSize); 
		gradient.addColorStop(0.35, theme[3]);
		gradient.addColorStop(1, theme[2]);
	
		// draw the second radial gradient
		drawRect(gradient, canvasSize);
	}
}
	
function drawRect(fill, size)
{
	context.fillStyle = fill;
    context.fillRect(0, 0, size, size);
    context.save();
}

///////////////////////////////////////
// define different themes for the background
///////////////////////////////////////

function blueTheme()
{
	return [
		'rgba(41, 183, 229, 0.95)',
		'rgba(0, 186, 241, 0.8)',
		'rgba(55, 68, 80, 0)',
		'rgba(0, 252, 255, 0.32)'
	];
}

function darkBlueTheme()
{
	return [
		'rgba(8, 99, 152, 0.95)',
		'rgba(0, 43, 180, 0.8)',
		'rgba(55, 68, 80, 0)',
		'rgba(0, 190, 255, 0.32)'
	];
}

function brightTheme()
{
	return [
		'rgba(128, 181, 131, 0.95)',
		'rgba(180, 178, 133, 0.8)',
		'rgba(55, 68, 80, 0)',
		'rgba(255, 204, 141, 0.32)'
	];
}

function greyTheme()
{
	return [
		'rgba(105, 120, 129, 0.95)',
		'rgba(54, 63, 69, 0.8)',
		'rgba(26, 24, 21, 0)',
		'rgba(124, 150, 160, 0.32)'
	];
}

function orangeTheme()
{
	return [
		'rgba(229, 136, 41, 0.95)',
		'rgba(241, 120, 0, 0.8)',
		'rgba(55, 68, 80, 0)',
		'rgba(241, 120, 0, 0.3)'
	];
}
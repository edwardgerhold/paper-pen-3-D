/*
    project.js
    
    Orthogonal 3-D onto 2-D Projection by Edward Gerhold
    
    Usage: You create a function project by calling Projection.create();
    You pass in the angles for the axes, they all start at zero and you
    go around the unit circle. Optionally you can pass the unit lenght
    for each axis, the default will be a length of one.
    
    The angles are in degrees. You can change the code, however you want,
    to take radians, or to do more.
    
    var project = Projection.create(330, 220, 90);

    // example of a single point. normally you convert a couple of points.
    
    var p = [4,2,1];
    var q= project(p);
    context.lineTo(q[0], q[1]);

> var create = require("./project.js").create;
undefined
> create(330, 220, 90);
[Function: project]
> var p = create(330, 220, 90);
undefined
> p([4,5,7]);
[ -0.366120600457136, 1.7860619515673015 ]
> 
    
*/

function Projection() {
    return Projection.create.call(null, arguments);
}

Projection.create = function (xAngle, yAngle, zAngle, xUnit, yUnit, zUnit) {

    if (arguments.length < 3) throw new TypeError("Give three Angles with the first three arguments");

    function rad(deg) {
	return Math.PI/180 * deg;
    }	

    xUnit = xUnit || 1;
    yUnit = yUnit || 1;
    zUnit = zUnit || 1;
    
    // The vector base
    
    var xBaseX = xUnit * Math.cos(rad(xAngle));
    var yBaseX = yUnit * Math.cos(rad(yAngle));
    var zBaseX = zUnit * Math.cos(rad(zAngle));
    
    var xBaseY = xUnit * Math.sin(rad(xAngle));
    var yBaseY = yUnit * Math.sin(rad(yAngle));
    var zBaseY = zUnit * Math.sin(rad(zAngle));
    
    return function project(vec3) {
	var x = vec3[0], 
	    y = vec3[1], 
	    z = vec3[2];
	return [
	    x*xBaseX + y*yBaseX + z*zBaseX,
	    x*xBaseY + y*yBaseY + z*zBaseY
	];
    }
}

if (typeof exports != "undefined") exports.create = Projection.create;

/*
    project2.js
    
    3-D onto 2-D Projection Matrix by Edward Gerhold
    
    This is just a demo for my lastly discovered 2x3 projection matrix
    which i call the Gerhold Projection/Transformation Matrix to honor 
    myself, to be honest, because i have never read about this matrix 
    or the three two-dimensional base vectors anywhere before.
    
    The Matrix is this:
    
    P = [ r*Math.cos(alpha), r*Math.cos(beta), r*Math.cos(gamma);
    r*Math.sin(alpha), r*Math.sin(beta), r*Math.sin(gamma)]
    
    alpha, beta, gamma are the axis-angles starting at zero (i think
    at three o´clock, pointing to the right)
    
    On a piece of paper you see three coordinate axes pointing into
    three directions. In reality this means, these vectors are 2-D.
    They point in three directions on the paper, not into real space.
    
    To translate the 3-D coordinates i have to multiply with the 2-D
    vectors to move by the x,y,z components on the paper. I think this
    was known to older mathematicians drawing on paper as well as to 
    some today, but in the mainstream of computer graphics this idea 
    has gone under. In other words, i couldn´t find this matrix until
    today, can not find it in general explainings of computer graphics.

    To let the three vectors point into three directions i arranged them
    around the unit circle. This explains, why i use cos(axisangle) for  
    the x component of the base vectors and sin(axisangle) for the 
    y components of the base vectors. The vector completing the triangle
    with cos and sin has the unit length of 1. That is, why you can 
    elonginate the units into each direction by multiplying cos and sin
    with the same value, that is the radius of the (no longer unit-)circle.
    
    Together they add up to the right (x',y') coordinate.
    
    x' = x*r*cos(alpha) + y*r*cos(beta) + z*r*cos(gamma);
    y' = x*r*sin(alpha) + y*r*sin(beta) + z*r*sin(gamma);

    I´ve proven this in the cheap3d*.html files, from which i uploaded a
    few to the github directory, too. I incremently added affine transforms.
    
    THIS CODE generates A PROJECTION FUNCTION which you can use on your
    transformed point sets. After converting them into 2 coordinates, 
    the order is the same, you can use your drawing functions to connect
    them.
    
    var projector_function = Projection.create(350, 230, 110);
    // the three numbers are the angles of the x,y,z axes the function
    // returns a function

    // example of a single point. normally you convert a couple of points.
    var p = [4,2,1];
    var q= projector_function(p);
    context.lineTo(q[0], q[1]);

    // for multiple points i don´t use arrays of arrays here, but
    // a flat list of x,y,z repeating, and return a list of x,y,x,y,x,y´s
    
    // example of converting an array of points to another array
    var p = [4,2,1, 4,5,6, 7,5,7];
    var q= projector_function(p);
    context.moveTo(q[0], q[1]); // first point
    context.lineTo(q[2], q[3]); // second point
    context.moveTo(q[2], q[3]);
    context.lineTo(q[4], q[5]); // third point

> var create = require("./project2.js").create;
undefined
> var pr = create(330,210,90);
undefined
> var pr = create(330,210,90,2,2,2);
undefined
> pr([1,2,3])
[ -1.7320508075688772, 2.9999999999999987 ]
> pr([-1,-2,-3])
[ 1.7320508075688772, -2.9999999999999987 ]
> pr([-1,-2,-3,3,4,5,1,2,3])
[ 1.7320508075688772,
  -2.9999999999999987,
  -1.7320508075688779,
  2.9999999999999964,
  -1.7320508075688772,
  2.9999999999999987 ]
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
    
    // The vector base is stored in the closure and 
    // only calculated once in this demonstration
    var xBaseX = xUnit * Math.cos(rad(xAngle));
    var yBaseX = yUnit * Math.cos(rad(yAngle));
    var zBaseX = zUnit * Math.cos(rad(zAngle));
    var xBaseY = xUnit * Math.sin(rad(xAngle));
    var yBaseY = yUnit * Math.sin(rad(yAngle));
    var zBaseY = zUnit * Math.sin(rad(zAngle));
    
    return function projector(vec3array) {
	var vec2array = [];
	for (var i = 0; i < vec3array.length; i+=3) {
	    // get the point
	    var x = vec3array[i], 
		y = vec3array[i+1], 
		z = vec3array[i+2];
	    // convert the points and push to list
    	    vec2array.push(
		x*xBaseX + y*yBaseX + z*zBaseX,
		x*xBaseY + y*yBaseY + z*zBaseY
	    );
	}
	return vec2array;
    }
}

if (typeof exports != "undefined") exports.create = Projection.create;

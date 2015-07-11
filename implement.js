(function (exports) {

function rad(deg) { 
    return Math.PI/180*deg; 
}

var r_x = 1, r_y = 1, r_z = 1;

var phi_x = rad(210), phi_y = rad(330), phi_z = rad(90);

var xAxisCos = r_x * Math.cos(phi_x),
    yAxisCos = r_y * Math.cos(phi_y),
    zAxisCos = r_z * Math.cos(phi_z),
    xAxisSin = r_x * Math.sin(phi_x),
    yAxisSin = r_y * Math.sin(phi_y),
    zAxisSin = r_z * Math.sin(phi_z);

function transform2d(vec3) {
    return [
	vec3[0]*xAxisCos + vec3[1]*yAxisCos + vec3[2]*zAxisCos,
	vec3[0]*xAxisSin + vec3[1]*yAxisSin + vec3[2]*zAxisSin
    ];
}

function transform2dAll(avec3) {
    return avec3.map(transform2d);
}

function settrans(op) {
    if (op.phi_n) {
	phi_x = op.phi_n[0];
	phi_y = op.phi_n[1];
	phi_z = op.phi_n[2];
    }
    if (op.r_n) {
	r_x = op.r_n[0];
	r_y = op.r_n[1];
	r_z = op.r_n[2];
    }
    xAxisCos = r_x * Math.cos(phi_x);
    yAxisCos = r_y * Math.cos(phi_y);
    zAxisCos = r_z * Math.cos(phi_z);
    xAxisSin = r_x * Math.sin(phi_x);
    yAxisSin = r_y * Math.sin(phi_y);
    zAxisSin = r_z * Math.sin(phi_z);
}

function gettrans() { 
    return { 
	phi_n: [phi_x, phi_y, phi_z], 
	r_n: [r_x, r_y, r_z] 
    }; 
}

function draw2dAll(ctx, points2, scale) {
    ctx.save();
    scale = scale || 1;
    var x = scale * points2[0][0], y = scale * points2[0][1];
    ctx.moveTo(x,-y);
    ctx.beginPath();
    for (var i = 0, j = points2.length; i < j; i++) {
	x = scale * points2[i][0], y = scale * points2[i][1];
	ctx.lineTo(x,-y);
	ctx.moveTo(x,-y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

function rotate3dAll(xAngleRad,yAngleRad,zAngleRad, points3) {
    var rotxcos = Math.cos(xAngleRad), rotxsin = Math.sin(xAngleRad);
    var rotycos = Math.cos(yAngleRad), rotysin = Math.sin(yAngleRad);
    var rotzcos = Math.cos(zAngleRad), rotzsin = Math.sin(zAngleRad);
    var p, x, y, z, u, v, w;
    for (var i = 0, j = points3.length; i < j; i++) {
	    p = points3[i], x = p[0], y = p[1], z = p[2];
	    u = x, v = y, w = z;
	    y = v * rotxcos - w * rotxsin
	    z = v * rotxsin + w * rotxcos
	    u = x, v = y, w = z;
	    x = u * rotycos + w * rotysin;
	    z = -u * rotysin + w * rotycos;
	    u = x, v = y, w = z;
	    x = u * rotzcos - v * rotzsin;
	    y = u * rotzsin + v * rotzcos;
	    p[0]=x;
	    p[1]=y;
	    p[2]=z;
    }
}
	
function rotate2dAll(zAngle, points2) {
    var rotzcos = Math.cos(zAngleRad), rotzsin = Math.sin(zAngleRad);
    var p, x, y, u, v;
    for (var i = 0, j = points2.length; i < j; i++) {
	    p = points2[i], x = p[0], y = p[1];
	    u = x, v = y;
	    x = u * rotzcos - v * rotzsin;
	    y = u * rotzsin + v * rotzcos;
	    p[0]=x;
	    p[1]=y;
    }
}

function translate3dAll(transvec, points3) {
    var p, x, y, z;
    var Tx = transvec[0],
	Ty = transvec[1],
	Tz = transvec[2];
    for (var i = 0, j = points3.length; i < j; i++) {
	    p = points3[i];
	    p[0]+=Tx;
	    p[1]+=Ty;
	    p[2]+=Tz;
    }
}

function translate2dAll(transvec, points2) {
    var p;
    var Tx = transvec[0],
	Ty = transvec[1];
    for (var i = 0, j = points2.length; i < j; i++) {
	    p = points2[i];
	    p[0]+=Tx;
	    p[1]+=Ty;
    }
}

function scale3dAll(scaleX, scaleY, scaleZ, points3) {
    var p;
    for (var i = 0, j = points3.length; i < j; i++) {
	    p = points3[i];
	    p[0]*=scaleX;
	    p[1]*=scaleY;
	    p[2]*=scaleZ;
    }
}

function scale2dAll(scaleX, scaleY, points2) {
    var p;
    for (var i = 0, j = points2.length; i < j; i++) {
	    p = points2[i];
	    p[0]*=scaleX;
	    p[1]*=scaleY;
    }
}

exports.gettrans = gettrans;
exports.settrans = settrans;
exports.transform2d = transform2d;
exports.transform2dAll = transform2dAll;
exports.rotate3dAll = rotate3dAll;
exports.rotate2dAll = rotate2dAll;
exports.scale3dAll = scale3dAll;
exports.scale2dAll = scale2dAll;
exports.translate3dAll = translate3dAll;
exports.translate2dAll = translate2dAll;
exports.rad = rad;
exports.draw2dAll = draw2dAll;

}(typeof exports != "undefined" ? exports : this));


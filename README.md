# paper-pen-3-D
Repository name may move to a new name 2x3-D or be corrected for pen-and-paper-3-D.

The forgotten projection
========================

See the PDF for mathematical details. This is the most active.

See the HTML files for a demonstration of a f(x,y) plotter on the 2-D Canvas.

Have you ever spent a long time looking for any easy 3-D to 2-D conversion
and often thought, that a 4x4 system with viewport division is more than you
would expect? Can´t we get rid of the homogenous coordinates? Here is a 2x3
matrix which solves common transformation problems. Apply two LOC to each point.

Definition

```
var P = [ r*Math.cos(alpha), r*Math.cos(beta), r*Math.cos(gamma),
          r*Math.sin(alpha), r*Math.sin(beta), r*Math.sin(gamma) ];
```

Short. Each column is a basis vector and a combination of `[r*Math.cos(axisAngle), r*Math.sin(axisAngle)]`.

I call P the Gerhold Projection Matrix to honor myself for the discovery. :-)
      
This is a 2x3 projection basis for 3-D coordinates, which result 
after multiplication with the matrix in two coordinates. In the example, 
alpha, beta, gamma are the angles of the basis vectors. They point into the
positive direction of the coordinate axes. All three angles start at zero.
You might arrange the three axes, however you would like your coordinate system
to look like.

Theorem

A multiplication of P with [x;y;z] results in [x';y']. Here are the two LOC.

```
x_ = x*r*Math.cos(a) + y*r*Math.cos(b) + z*r*Math.cos(g);
y_ = x*r*Math.sin(a) + y*r*Math.sin(b) + z*r*Math.sin(g);
```

That´s all. 

Remark 

Setting the units on the axes

If you multiply each column vector with some length r, you will change the units length
of the basis vector, and have direct control over the length of the units on the axes.
Say, you multiply for example the x-axis by r=5, you get five units instead of one unit
into the x direction.

Adding rotation made it clear, the elongination of the projection´s basis vectors should
be done for all 3 coordinate axes with the same r-value, because rotating the object
around would suddenly change units on the face into the axis it´s direction. To keep 
rotation and scaling affine, you can simply premultiply your object with a local basis,
which handles the local units, rotating with the object.

Corollary 

Four dimensional space can be projected onto the screen easily.

```
P = [ r*Math.cos(alpha), r*Math.cos(beta), r*Math.cos(gamma), r*Math.cos(delta),
      r*Math.sin(alpha), r*Math.sin(beta), r*Math.sin(gamma), r*Math.sin(delta)];
```

P[x;y;z;t] = [x';y'] can be used to visualize 4-D like the Minkowski Space.
If i let the 4th axis just point straight to the right, the pictures should 
move to the right at each increasement of t. 

```
x_ = x*r*Math.cos(a) + y*r*Math.cos(b) + z*r*Math.cos(g) + t*r*Math.cos(d);
y_ = x*r*Math.sin(a) + y*r*Math.sin(b) + z*r*Math.sin(g) + t*r*Math.sin(d);
```

# paper-pen-3-D
Repository name may move to a new name 2x3-D or be corrected for pen-and-paper-3-D.

The forgotten projection
========================

See the PDF for mathematical details. This is the most active.

See the HTML files for a demonstration of a f(x,y) plotter on the 2-D Canvas.

Have you ever spent a long time looking for any easy 3-D to 2-D conversion
and always tought, that a 4x4 System and Viewport Division is more than you
would expect? Can´t i get rid of the homogenous coordinates? Here is a 2x3
matrix which solves all transformation problems. Apply this to each point.

Definition

```
var P = [ r*Math.cos(alpha), r*Math.cos(beta), r*Math.cos(gamma),
          r*Math.sin(alpha), r*Math.sin(beta), r*Math.sin(gamma) ];
```

Short. Each column is a basis vector and a combination of `[r*Math.cos(axisAngle), r*Math.sin(axisAngle)]`.

I call P the Gerhold Projection Matrix to honor myself for the discovery. :-)
      
This is a 2x3 projection basis for 3-D coordinates, which result 
after multiplication with the matrix in two coordinates. Alpha, Beta, Gamma in 
the example are the angles of the basis vectors, pointing into the direction of your
axes. All three angles start at zero and may go over the other. You might arrange
the three axes how you would like your coordinate system to look like.

Theorem

A multiplication of P with [x;y;z] results in [x';y']. Here are the two LOC.

```
x_ = x*r*Math.cos(a) + y*r*Math.cos(b) + z*r*Math.cos(g);
y_ = x*r*Math.sin(a) + y*r*Math.sin(b) + z*r*Math.sin(g);
```

That´s all. 

Remark 

Setting the units on the axes

If you multiply each column vector with some length r, you
change the units of the basis vector and with that the size of your projection.
Say, you multiply for example the x-axis by r=5, x_=x*5*cos(a)+... and y_=x*5*sin(a)+...,
you get five units instead of one into the x direction.

Adding rotation made it clear, the elongination of the projection basis should
be done for all 3 coordinates with the same radius, because turning the object
around suddenly changes units into the other direction. You can simply premultiply
your object with a local basis. 

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

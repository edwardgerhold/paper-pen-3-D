# paper-pen-3-D

The forgotten projection
========================

See the PDF for mathematical details. This is the most active.

See the HTML files for a demonstration of a f(x,y) plotter on the 2-D Canvas.

Have you ever spent a long time looking for any easy 3-D to 2-D conversion
and always tought, that a 4x4 System and Viewport Division is more than you
would expect? Can´t i get rid of the homogenous coordinates? Here is a 2x3
matrix which solves all transforming problems. Apply this to each point.

Definition

`
var P = [ Math.cos(alpha), Math.cos(beta), Math.cos(gamma),
          Math.sin(alpha), Math.sin(beta), Math.sin(gamma) ];
`

Each basis vector is a combination of [Math.cos(axisAngle), Math.sin(axisAngle)].

I call P the Gerhold Projection Matrix to honor myself for the discovery. :-)
      
This is a 2x3 projection basis for 3-D coordinates, which result 
after multiplication with the matrix in two coordinates. Alpha, Beta, Gamma
are the angles of the base vectors, pointing into the direction of your
axes.

Theorem

A multiplication of P with [x;y;z] results in [x';y']. Here are the two LOC.

`
x' = x*cos(a) + y*cos(b) + z*cos(g);
y' = x*sin(a) + y*sin(b) + z*sin(g);
`

That´s all. 

Remark 

Setting the units on the axes

If you multiply each column vector with some length, you
change the units of the base vector and with that the size of your projection.
Say, you multiply for example the x-axis by 5, x'=x*5*cos(a)+... and y'=x*5*sin(a)+...,
you get five units instead of one into the x direction.

Adding rotation made it clear, the elongination of the projection base should
be done for all 3 coordinates with the same radius, because turning the object
around suddenly changes units into the other direction. You can simply premultiply
your object with a local base. 

Corollary 

Four dimensional space can be projected onto the screen easily.

`
P = [ Math.cos(alpha), Math.cos(beta), Math.cos(gamma), Math.cos(delta),
      Math.sin(alpha), Math.sin(beta), Math.sin(gamma), Math.sin(delta)]
`

P[x;y;z;t] = [x';y'] can be used to visualize 4-D like the Minkowski Space.
If i let the 4th axis just point straight to the right, the pictures should 
move to the right at each increasement of t.

`
x' = x*cos(a) + y*cos(b) + z*cos(g) + t*cos(d);
y' = x*sin(a) + y*sin(b) + z*sin(g) + t*sin(d);
`

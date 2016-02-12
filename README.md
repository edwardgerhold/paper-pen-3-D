----- REMARK about a new corrected version

Feb 11, 2016: My computer is defect and turns off for two days after warming up.
Beetween my occupations i can not work concretly on the document in various cases
nor implement my recent research and favorite ideas. But...

I think i have generalised this to a meaningful mapping theorem and will introduce
the term of non-orthogonal bases. With the 2x3 formula we can describe the whole 2x3
matrix space, since we can generate all possible combinations of the 2x3 matrix with 
the three canonical vectors.

I can derive from vector calculus, from linear algebra, from functional analysis,
to explain.

And i will give a new approach to explain the Fourier coefficients by extending the
2x3 form to a continuous form representing the integral for the coefficients. This is
easy to understand, because R^2 is isomorphic to the complex C plane.

Because of the defect computer writing the new document will take a few more days
than it would if i could turn it off now and turn it on again in an hour or two. When
i turn it off, it will be available tomorrow, or a day later, so i am a little bit
restricted in typing the stuff down.

But i will release it in the near future. My method is to delete any paragraph and write
down a shorter version or to delete the whole approach when wrong or useless and also
to make it more mathematician like using defs, lemmata and theorems which i will prove by
myself.

------- Original README

# paper-pen-3-D
Repository name may move to a new name 2x3-D or be corrected for pen-and-paper-3-D.

Remark. A german translation is in work. This helps me to find bad formulations
in my original text, when translating them, and to correct them.

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

If you multiply each column vector with some length `r`, you will change the units length
of the basis vector, and have direct control over the length of the units on the axes.
Say, you multiply for example the x-axis by `r=5`, you get five units instead of one unit
into the x direction.

Adding rotation made it clear, the elongination of the projection´s basis vectors should
be done for all 3 coordinate axes with the same r-value, because rotating the object
around would suddenly change units on the face into the axis it´s direction. To keep 
rotation and scaling affine, you can simply premultiply your object with a local basis,
which handles the local units, rotating with the object.

Corollary 

Four dimensional space can be projected onto the screen easily.

```
P = [ r*Math.cos(alpha), r*Math.cos(beta), r*Math.cos(gamma), rt*Math.cos(delta),
      r*Math.sin(alpha), r*Math.sin(beta), r*Math.sin(gamma), rt*Math.sin(delta)];
```

P[x;y;z;t] = [x';y'] can be used to visualize 4-D like the Minkowski Space.
If i let the 4th axis just point straight to the right, the pictures should 
move to the right at each increasement of t. And with a larger `rt` as the fourth
unit, we can see the thing really moving.

```
x_ = x*r*Math.cos(a) + y*r*Math.cos(b) + z*r*Math.cos(g) + t*rt*Math.cos(d);
y_ = x*r*Math.sin(a) + y*r*Math.sin(b) + z*r*Math.sin(g) + t*rt*Math.sin(d);
```

----------- MORE from the latest results Feb 11 2016

Corollary 

Generalisation with m-dimensional spherical coordinates and n axes possible.

To make this transformation in arbitrary dimensions, meaning, you map the
points to a lower dimensional plane or sphere, you create n axes with m 
components. Spherical coordinates can be used for creating a set of basis
vectors. You will not have linear independence, and this is not a mistake,
but the property different from the nxn case with orthogonal and independent
axes to be scaled before summed for the right point.

Corollary

Generally, the vector (cos x-Angle, cos y-Angle, cos z-Angle) is a linear 
functional in the dual space of R^3 and is combined with the coordinates
(x1,x2,x3) to return a real number. This is a component of a new coordinate
vector. So the cos vector is the x-coordinate functional, the sin vector is
the y-coordinate functional, and so on.



Remark 

Half a year ago, when i started the document, i had not the insight i have
today. I worked hard for teaching myself mathematics, and i continue on, but
certain things i was not able to write down half a year ago, are now clear.
Will inform you via the updates as soon as concretly possible. I am hot for
repeating the paper in a better form.

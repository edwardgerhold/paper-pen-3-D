r_x = 1;
r_y = 1;
r_z = 1;

phi_x = 330
phi_y = 210
phi_z = 90

cos_x = cos( phi_x );
cos_y = cos( phi_y );
cos_z = cos( phi_z );

sin_x = sin( phi_x );
sin_y = sin( phi_y );
sin_z = sin( phi_z );


A = [r_x*cos_x,r_y*cos_y,r_z*cos_z;r_x*sin_x,r_y*sin_y,r_z*sin_z];


AT = [r_x*cos_x,r_x*sin_x; r_y*cos_y,r_y*sin_y; r_z*cos_z, r_z*sin_z];


x = [3;8;5]; 


b = A*x;


ATA = AT*A; 


AAT = A*AT; 


detATA = det(ATA);
detAAT = det(AAT);


ATAinv = inv(ATA);
AATinv = inv(AAT);


detATAinv = det(ATAinv);
detAATinv = det(AATinv);





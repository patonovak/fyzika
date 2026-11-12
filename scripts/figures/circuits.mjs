import {C,T,L,A,P,R,O,group} from './core.mjs';
export const resistor=(x,y,w=150,label='R')=>L(x-50,y,x,y,C.ink)+R(x,y-25,w,50,'white',C.ink)+L(x+w,y,x+w+50,y,C.ink)+T(x+w/2,y-50,label,27);
export const cap=(x,y,label='C')=>L(x-80,y,x-15,y,C.ink)+L(x-15,y-55,x-15,y+55,C.ink,5)+L(x+15,y-55,x+15,y+55,C.ink,5)+L(x+15,y,x+80,y,C.ink)+T(x,y-80,label,27);
export const coil=(x,y,label='L')=>L(x-30,y,x,y,C.ink)+P('M'+x+' '+y+Array.from({length:6},()=>` a15 25 0 0 1 30 0`).join(''),C.ink,3)+L(x+180,y,x+210,y,C.ink)+T(x+90,y-55,label,27);
export const battery=(x,y)=>L(x-80,y,x-15,y,C.ink)+L(x-15,y-65,x-15,y+65,C.ink,5)+L(x+15,y-35,x+15,y+35,C.ink,5)+L(x+15,y,x+80,y,C.ink)+T(x-35,y-80,'+',25)+T(x+35,y-80,'−',25);
export const meter=(x,y,label='A')=>O(x,y,45,'white',C.ink)+T(x,y+12,label,34)+L(x-80,y,x-45,y,C.ink)+L(x+45,y,x+80,y,C.ink);

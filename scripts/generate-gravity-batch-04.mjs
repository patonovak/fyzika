import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=process.argv[2] ? path.resolve(process.argv[2]) : path.join(root,'content/images');
fs.mkdirSync(out,{recursive:true});
const C={ink:'#17334b',blue:'#1769aa',orange:'#e97812',green:'#168254',red:'#ba3840',grey:'#8295a2'};
const rich=s=>s.replace(/_([a-zA-Z0-9]+)/g,'<tspan baseline-shift="sub" font-size="70%">$1</tspan>');
const T=(x,y,s,c=C.ink,z=28,a='start')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}" text-anchor="${a}">${rich(s)}</text>`;
const L=(x,y,a,b,c=C.grey,w=2,d='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}" ${d?'stroke-dasharray="'+d+'"':''}/>`;
const A=(x,y,a,b,c=C.blue)=>`<path d="M${x} ${y} L${a} ${b}" fill="none" stroke="${c}" stroke-width="5" marker-end="url(#${c.slice(1)})"/>`;
const dot=(x,y,r=9,c=C.orange)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const ring=(x,y,r,c=C.grey,d='8 6')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="2" stroke-dasharray="${d}"/>`;
const curve=(pts,c=C.blue,w=5)=>`<polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
const rect=(x,y,w,h,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`;
const svg=(title,b)=>`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760"><title>${title}</title><defs>${Object.values(C).map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="${c}"/></marker>`).join('')}</defs>${rect(0,0,1200,760,'white')}<g font-family="Arial, sans-serif">${T(45,55,title,C.ink,35)}${b}</g></svg>`;
const files={};
let b=dot(270,300,75,C.blue)+dot(930,300,105,C.orange)+dot(270,300,5,'white')+dot(930,300,5,'white');
b+=T(270,191,'m₁',C.blue,35,'middle')+T(930,155,'m₂',C.orange,35,'middle')+A(270,300,495,300,C.green)+A(930,300,705,300,C.green)+T(425,266,'F₁',C.green,32,'middle')+T(775,266,'F₂',C.green,32,'middle');
b+=L(270,380,270,485,C.grey,2,'6 5')+L(930,410,930,485,C.grey,2,'6 5')+L(270,465,930,465,C.ink,2)+L(270,455,270,475,C.ink,3)+L(930,455,930,475,C.ink,3)+T(600,450,'r',C.ink,32,'middle');
b+=T(600,566,'F₁ = F₂ = G m₁ m₂ / r²',C.blue,37,'middle')+T(600,637,'Sily sú príťažlivé, rovnako veľké a opačne orientované.',C.ink,27,'middle')+T(600,690,'r je vzdialenosť stredov telies; každá sila pôsobí na iné teleso.',C.ink,25,'middle');
files['gravitacny_zakon.png']=svg('Newtonov gravitačný zákon',b);
b=T(300,119,'Radiálne pole',C.ink,31,'middle')+T(890,119,'Homogénne pole',C.ink,31,'middle')+dot(300,355,69,C.blue)+T(300,365,'Zem','white',26,'middle');
for(let i=0;i<8;i++){const a=i*Math.PI/4,cs=Math.cos(a),sn=Math.sin(a);b+=A(300+210*cs,355+210*sn,300+145*cs,355+145*sn,C.orange)+A(300+135*cs,355+135*sn,300+73*cs,355+73*sn,C.orange);}
b+=T(300,626,'Smer do stredu telesa.',C.ink,26,'middle')+T(300,675,'a_g = GM / r²',C.blue,31,'middle');
for(const x of [740,840,940,1040])for(const y of [185,330])b+=A(x,y,x,y+105,C.orange);
b+=L(685,510,1110,510,C.grey,6)+T(890,560,'Malá oblasť pri povrchu Zeme',C.ink,25,'middle')+T(890,626,'Rovnaký smer aj veľkosť.',C.ink,26,'middle')+T(890,675,'a_g ≈ konšt.',C.blue,31,'middle');
// Both radial rings illustrate inward directions; arrow lengths not magnitude scale.
b+=T(600,731,'Šípky znázorňujú smer poľa; ich dĺžky nie sú v mierke.',C.grey,23,'middle');
files['radialne_vs_homogenne_g.png']=svg('Radiálne a homogénne gravitačné pole',b);
b=T(600,109,'Príklad: v₀ = 20 m/s, g = 10 m/s²; bez odporu vzduchu',C.ink,26,'middle')+L(85,550,500,550,C.grey,4)+L(260,550,260,190,C.grey,2,'7 6');
for(const [y,label,dy] of [[550,'t = 0 s',-110],[280,'t = 1 s',-55],[190,'t = 2 s',0]]){b+=dot(260,y,13)+T(95,y===550?y-18:y+8,label,C.ink,24);if(dy)b+=A(260,y,260,y+dy,C.blue);}
b+=T(285,453,'v₀',C.blue,30)+T(285,247,'v',C.blue,30)+T(290,194,'v = 0',C.blue,28)+A(445,240,445,345,C.red)+T(462,298,'g',C.red,30);
b+=T(260,606,'Pri výstupe sa rýchlosť zmenšuje.',C.ink,24,'middle');
const ox=690,oy=550,sx=95,sy=17;
for(const t of [1,2,3,4])b+=L(ox+sx*t,oy,ox+sx*t,oy-340,'#dce5ec',1)+T(ox+sx*t,oy+32,String(t),C.ink,22,'middle');
for(const h of [10,20])b+=L(ox,oy-sy*h,ox+380,oy-sy*h,'#dce5ec',1)+T(ox-15,oy-sy*h+8,String(h),C.ink,22,'end');
b+=A(ox,oy,1115,oy,C.ink)+A(ox,oy,ox,165,C.ink)+T(1125,559,'t (s)',C.ink,24)+T(650,146,'h (m)',C.ink,24);
let pts=[];for(let t=0;t<=4.001;t+=.025)pts.push([ox+sx*t,oy-sy*(20*t-5*t*t)]);b+=curve(pts)+dot(ox+190,oy-340,7)+T(880,630,'h(t) = 20t − 5t²',C.blue,28,'middle');
b+=T(600,688,'Maximálna výška H = 20 m; čas výstupu 2 s.',C.ink,30,'middle')+T(600,732,'V najvyššom bode je v = 0, ale zrýchlenie g smeruje nadol.',C.ink,24,'middle');
files['zvisly_vrh.png']=svg('Zvislý vrh nahor',b);
// Horizontal throw h=20, vx=10, g=10; 25 pixels per metre on both axes.
b=T(600,109,'v₀ = 10 m/s, h = 20 m, g = 10 m/s²; bez odporu vzduchu',C.ink,26,'middle');
const x0=150,y0=620,k=20;
b+=rect(x0-65,y0-400,65,400,'#edf2f5')+A(x0,y0,720,y0,C.ink)+A(x0,y0,x0,160,C.ink)+T(730,630,'x (m)',C.ink,24)+T(90,153,'y (m)',C.ink,24)+T(x0-20,y0+30,'0',C.ink,22,'end');
for(const v of [10,20])b+=T(x0+k*v,y0+30,String(v),C.ink,22,'middle')+T(x0-15,y0-k*v+8,String(v),C.ink,22,'end');
pts=[];for(let t=0;t<=2.001;t+=.02)pts.push([x0+k*10*t,y0-k*(20-5*t*t)]);b+=curve(pts);
for(const t of [0,.5,1,1.5,2])b+=dot(x0+k*10*t,y0-k*(20-5*t*t),7);
b+=A(x0,220,x0+100,220,C.blue)+T(195,195,'v₀',C.blue,27);
const px=x0+300,py=y0-175;b+=A(px,py,px+80,py,C.green)+T(px+100,py-5,'v_x',C.green,26)+A(px,py,px,py+120,C.orange)+T(px+17,py+100,'v_y',C.orange,26)+A(px,py,px+80,py+120,C.blue)+T(px+95,py+130,'v',C.blue,26);
b+=T(920,216,'x = v₀t',C.ink,31,'middle')+T(920,284,'y = h − ½gt²',C.ink,31,'middle')+T(920,368,'v_x = v₀',C.green,29,'middle')+T(920,430,'v_y = −gt',C.orange,29,'middle')+A(920,485,920,565,C.red)+T(945,530,'g',C.red,29);
b+=T(600,700,'Počiatok súradníc je na zemi pod miestom vrhu; os y smeruje nahor.',C.ink,24,'middle')+T(600,737,'Dopad: t = 2 s, d = 20 m. Body trajektórie sú po 0,5 s.',C.ink,24,'middle');
files['vodorovny_vrh.png']=svg('Vodorovný vrh',b);
// vx=10, vy0=15, g=10, flight time 3 s; isotropic 25 px/m.
b=T(600,109,'v₀ₓ = 10 m/s, v₀ᵧ = 15 m/s, g = 10 m/s²; bez odporu vzduchu',C.ink,25,'middle');
const qx=140,qy=570,sc=25;
b+=A(qx,qy,1015,qy,C.ink)+A(qx,qy,qx,185,C.ink)+T(1030,579,'x (m)',C.ink,24)+T(80,168,'y (m)',C.ink,24)+T(qx-16,qy+28,'0',C.ink,22,'end');
for(const xx of [10,20,30])b+=T(qx+xx*sc,qy+32,String(xx),C.ink,22,'middle');
pts=[];for(let t=0;t<=3.001;t+=.025)pts.push([qx+sc*10*t,qy-sc*(15*t-5*t*t)]);b+=curve(pts);
for(const t of [0,.5,1,1.5,2,2.5,3])b+=dot(qx+sc*10*t,qy-sc*(15*t-5*t*t),7);
b+=A(qx,qy,qx+100,qy-150,C.blue)+A(qx,qy,qx+100,qy,C.green)+A(qx,qy,qx,qy-150,C.orange)+L(qx+100,qy-150,qx+100,qy,C.grey,2,'5 5')+L(qx,qy-150,qx+100,qy-150,C.grey,2,'5 5');
b+=T(qx+112,qy-145,'v₀',C.blue,26)+T(qx+60,qy+68,'v₀ₓ',C.green,26)+T(qx-20,qy-85,'v₀ᵧ',C.orange,26,'end')+`<path d="M${qx+58} ${qy} A58 58 0 0 0 ${qx+58*10/Math.sqrt(325)} ${qy-58*15/Math.sqrt(325)}" fill="none" stroke="${C.ink}" stroke-width="2"/>`+T(qx+62,qy-38,'α',C.ink,26);
b+=A(515,288.75,615,288.75,C.green)+T(515,245,'v_y = 0, v_x ≠ 0',C.ink,26)+A(1000,250,1000,355,C.red)+T(1020,313,'g',C.red,28);
b+=T(600,686,'Vodorovná zložka rýchlosti je stála; zvislá sa mení.',C.ink,27,'middle')+T(600,732,'α ≈ 56,3°; maximálna výška 11,25 m; dĺžka vrhu 30 m.',C.ink,25,'middle');
files['sikmy_vrh.png']=svg('Šikmý vrh nahor',b);
function orbit(){return ring(350,355,220)+dot(350,355,96,C.blue)+T(350,365,'Zem','white',28,'middle')+dot(570,355,15,C.orange)+A(570,355,570,180,C.green)+T(590,212,'v_k',C.green,30)+A(570,355,420,355,C.red)+T(495,330,'F_g',C.red,30)+L(350,355,350,575,C.grey,2,'5 5')+T(365,487,'r',C.ink,29)+`<path d="M550 355 v-20 h20" fill="none" stroke="${C.ink}" stroke-width="2"/>`;}
b=orbit()+T(890,195,'Kruhová obežná dráha',C.ink,31,'middle')+T(890,275,'v_k je dotyčnicová.',C.green,28,'middle')+T(890,345,'F_g smeruje do stredu.',C.red,28,'middle')+T(890,440,'r = R_Z + h',C.ink,32,'middle')+T(890,515,'v_k = √(GM_Z / r)',C.blue,33,'middle')+T(600,655,'Gravitačná sila mení smer rýchlosti, nie jej veľkosť.',C.ink,27,'middle')+T(600,712,'Ideálny kruhový pohyb bez odporu prostredia; rozmery nie sú v mierke.',C.grey,23,'middle');
files['kruhova_rychlost.png']=svg('Kruhová rýchlosť družice',b);
b=orbit()+T(895,176,'Gravitácia poskytuje',C.ink,29,'middle')+T(895,216,'dostredivú silu.',C.ink,29,'middle')+T(895,299,'GM_Z m / r² = mv_k² / r',C.blue,29,'middle')+T(895,383,'v_k² = GM_Z / r',C.blue,32,'middle')+T(895,470,'v_k = √(GM_Z / r)',C.blue,34,'middle')+T(895,552,'r = R_Z + h',C.ink,29,'middle')+T(600,655,'Hmotnosť družice m sa vykráti.',C.ink,29,'middle')+T(600,707,'F_g a F_d sú dve označenia tej istej sily, nie dve ďalšie sily.',C.ink,25,'middle');
files['kruhova_rychlost_gravitacny_zakon.png']=svg('Odvodenie kruhovej rýchlosti',b);
for(const [name,source] of Object.entries(files)){const p=path.join(out,name);if(fs.existsSync(p))throw Error('Existujúci súbor: '+name);fs.writeFileSync(p,await sharp(Buffer.from(source)).png().toBuffer(),{flag:'wx'});console.log(name);}

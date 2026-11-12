import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),out=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'content/images');fs.mkdirSync(out,{recursive:true});
const blue='#1769aa',orange='#e97812',green='#168254',ink='#17334b',grey='#8195a3',red='#ba3840';
const T=(x,y,s,c=ink,z=28,a='start')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}" text-anchor="${a}">${s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}</text>`;
const L=(x,y,a,b,c=grey,w=2,d='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}" ${d?'stroke-dasharray="'+d+'"':''}/>`;
const A=(x,y,a,b,c=blue)=>`<path d="M${x} ${y} L${a} ${b}" fill="none" stroke="${c}" stroke-width="5" marker-end="url(#${c.slice(1)})"/>`;
const R=(x,y,w,h,c,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" ${extra}/>`;
const D=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const wrap=(title,b)=>`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760"><title>${title}</title><defs>${[blue,orange,green,ink,red].map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="${c}"/></marker>`).join('')}</defs>${R(0,0,1200,760,'white')}<g font-family="Arial, sans-serif">${T(45,55,title,ink,35)}${b}</g></svg>`;
const files={};
const a=390,b=230,cx=580,cy=355,e=Math.sqrt(1-(b/a)**2),fx=cx+a*e;
function solve(M){let E=M;for(let i=0;i<50;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));return E;}
function sector(M1,M2,color){const E1=solve(M1),E2=solve(M2),pts=[[fx,cy]];for(let i=0;i<=2000;i++){const E=E1+(E2-E1)*i/2000;pts.push([cx+a*Math.cos(E),cy-b*Math.sin(E)]);}let area=0;for(let i=0;i<pts.length;i++){const p=pts[i],q=pts[(i+1)%pts.length];area+=p[0]*q[1]-q[0]*p[1];}const ends=[pts[1],pts.at(-1)];return {area:Math.abs(area/2),svg:`<polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="${color}" fill-opacity="0.25"/>`+ends.map(p=>L(fx,cy,...p,color,3)+D(...p,7,color)).join('')};}
const s1=sector(-.25,.25,orange),s2=sector(Math.PI-.25,Math.PI+.25,blue);
if(Math.abs(s1.area-s2.area)/s1.area>1e-4)throw Error('Nerovnaké plochy');
let body=T(600,111,'Za rovnaké časy opíše sprievodič rovnaké plochy.',ink,29,'middle')+s1.svg+s2.svg+`<ellipse cx="${cx}" cy="${cy}" rx="${a}" ry="${b}" fill="none" stroke="${grey}" stroke-width="3"/>`+D(fx,cy,20,orange)+T(fx-15,cy-42,'Slnko v ohnisku',orange,24,'end')+T(938,420,'S₁',orange,28,'middle')+T(460,365,'S₂',blue,28,'middle')+T(1010,370,'Perihélium',ink,22)+T(175,365,'Afélium',ink,22,'end')+T(600,644,'Δt₁ = Δt₂   ⇒   S₁ = S₂',blue,36,'middle')+T(600,690,'Pri Slnku sa planéta pohybuje rýchlejšie, ďalej od Slnka pomalšie.',ink,25,'middle')+T(600,734,'Výstrednosť elipsy je pre názornosť zväčšená; rozmery telies nie sú v mierke.',grey,22,'middle');
files['druhy_keplerov_zakon.png']=wrap('Druhý Keplerov zákon',body);
body=T(300,116,'Pred stlačením',ink,29,'middle')+T(890,116,'Po stlačení',ink,29,'middle');
for(const [x,piston,warm] of [[130,235,false],[720,350,true]]){
 body+=R(x-15,205,350,350,'#e8edf1')+R(x,205,320,335,'white')+R(x,piston+18,320,540-piston-18,warm?'#ffe2bc':'#deedf8')+L(x,205,x,540,grey,5)+L(x+320,205,x+320,540,grey,5)+L(x,540,x+320,540,grey,5)+R(x,piston,320,18,grey)+R(x+150,145,20,piston-145,grey);
 for(let j=0;j<3;j++)for(let i=0;i<4;i++){const px=x+43+i*75,py=piston+45+j*(540-piston-70)/2;body+=D(px,py,7,warm?orange:blue);const theta=(i*1.7+j*2.2),len=warm?27:15;body+=L(px,py,px+len*Math.cos(theta),py+len*Math.sin(theta),warm?orange:blue,2);}
 body+=T(x+160,588,warm?'V₂ < V₁, T₂ > T₁':'V₁, T₁',warm?orange:blue,29,'middle');
}
body+=A(1080,220,1080,345,red)+T(1100,274,'F',red,30)+A(600,285,600,400,blue)+T(625,345,'s',blue,28)+T(600,645,'Adiabatické stláčanie: Q = 0',ink,30,'middle')+T(600,703,'Práca vykonaná na plyne: ΔU = W > 0',blue,33,'middle')+T(600,742,'Tepelne izolované steny; rovnaký počet častíc v oboch stavoch.',grey,23,'middle');
files['zmena_vnutornej_energie_pracou.png']=wrap('Zmena vnútornej energie konaním práce',body);
body=R(390,245,420,320,'#e7edf1','stroke="#8195a3" stroke-width="3"')+R(425,270,350,260,'white','stroke="#8195a3" stroke-width="3"')+R(427,330,346,198,'#d5ebfc')+L(427,330,773,330,blue,2)+R(380,233,440,22,grey);
// Thermometer bulb is in the water, not touching hot sample or vessel.
body+=R(480,135,18,295,'white','stroke="#8195a3" stroke-width="3"')+R(486,215,6,205,red)+D(489,425,13,red);
for(let i=0;i<10;i++)body+=L(499,150+i*20,510,150+i*20,grey,2);
body+=L(710,175,710,470,grey,7)+L(675,470,745,470,grey,7)+L(710,175,750,175,grey,7);
body+=R(550,405,85,70,orange,'rx="7"')+A(548,440,515,440,red)+A(638,440,678,440,red)+T(653,414,'Q',red,24);
body+=T(230,175,'Teplomer',ink,27,'middle')+L(305,181,480,190)+T(960,181,'Miešačka',ink,27,'middle')+L(880,190,748,180);
body+=T(970,326,'Voda',blue,27,'middle')+L(913,334,770,360)+T(198,485,'Tepelná izolácia',ink,25,'middle')+L(309,480,407,480);
body+=T(950,517,'Teplejšie teleso',orange,27,'middle')+L(841,510,634,462);
body+=T(600,619,'Na začiatku: T₁ > T₂. Energia prechádza z telesa do vody.',ink,25,'middle')+T(600,673,'Po ustálení majú teleso aj voda spoločnú teplotu T.',ink,26,'middle')+T(600,724,'Ideálny kalorimeter: zanedbané straty tepla do okolia.',grey,24,'middle');
files['teleso_v_kalorimetri.png']=wrap('Zmiešavací kalorimeter — schematický rez',body);
for(const [name,source]of Object.entries(files)){const p=path.join(out,name);if(fs.existsSync(p))throw Error('Existujúci súbor: '+name);fs.writeFileSync(p,await sharp(Buffer.from(source)).png().toBuffer(),{flag:'wx'});}
console.log({files:Object.keys(files),keplerAreas:[s1.area,s2.area],relativeDifference:Math.abs(s1.area-s2.area)/s1.area});

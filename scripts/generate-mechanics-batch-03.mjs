import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dest=path.join(root,'content/images');
const C={ink:'#17334b',blue:'#1769aa',orange:'#e97812',green:'#168254',red:'#ba3840',grey:'#7d919e'};
const text=(x,y,t,color=C.ink,size=27,anchor='start')=>`<text x="${x}" y="${y}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${t}</text>`;
const line=(x,y,a,b,color=C.grey,width=2,dash='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${color}" stroke-width="${width}" ${dash?'stroke-dasharray="'+dash+'"':''}/>`;
const arrow=(x,y,a,b,color=C.blue)=>`<path d="M${x},${y} L${a},${b}" fill="none" stroke="${color}" stroke-width="5" marker-end="url(#${color.slice(1)})"/>`;
const rect=(x,y,w,h,color,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}" ${extra}/>`;
const circle=(x,y,r,color)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const wrap=(title,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680"><title>${title}</title><defs>${Object.values(C).map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="${c}"/></marker>`).join('')}</defs>${rect(0,0,1200,680,'white')}<g font-family="Arial, sans-serif">${text(45,52,title,C.ink,34)}${body}</g></svg>`;
const assets={};
let b=text(290,108,'Vodorovná podložka',C.ink,28,'middle')+text(895,108,'Naklonená rovina',C.ink,28,'middle');
b+=line(60,365,535,365,C.grey,5)+rect(230,295,100,70,'#ffdbb2','stroke="#cc7628" stroke-width="3"');
b+=arrow(280,330,280,460,C.red)+text(294,445,'F_G',C.red)+arrow(280,330,280,200,C.blue)+text(295,220,'F_N',C.blue)+arrow(280,330,155,330,C.orange)+text(130,309,'F_t',C.orange);
b+=arrow(240,165,365,165,C.green)+text(385,174,'v',C.green);
// Plane rises to the right by 30 degrees; block normal and friction are exact.
const x=900,y=310,n=120*Math.cos(Math.PI/6),footX=x+17.5,footY=y+35*Math.cos(Math.PI/6);
const groundY=q=>footY-(q-footX)*Math.tan(Math.PI/6);
b+=line(655,groundY(655),1130,groundY(1130),C.grey,5)+`<g transform="rotate(-30 ${x} ${y})">${rect(x-50,y-35,100,70,'#ffdbb2','stroke="#cc7628" stroke-width="3"')}</g>`;
b+=arrow(x,y,x,y+120,C.red)+text(x+14,y+112,'F_G',C.red)+arrow(x,y,x-n*.5,y-n*Math.cos(Math.PI/6),C.blue)+text(x-106,y-105,'F_N',C.blue)+arrow(x,y,x+90*Math.cos(Math.PI/6),y-45,C.orange)+text(x+90,y-40,'F_t',C.orange);
b+=arrow(822,240,718,300,C.green)+text(695,282,'v',C.green);
b+=line(655,groundY(655),805,groundY(655),C.grey,2,'6 5')+`<path d="M725 ${groundY(655)} A70 70 0 0 0 ${655+70*Math.cos(Math.PI/6)} ${groundY(655)-35}" fill="none" stroke="${C.ink}" stroke-width="2"/>`+text(738,groundY(655)-13,'α');
b+=text(290,535,'F_N = F_G',C.ink,29,'middle')+text(895,535,'F_N = F_G cos α',C.ink,29,'middle');
b+=text(600,592,'F_t pôsobí proti smeru kĺzania; F_N je kolmá na podložku.',C.ink,27,'middle')+text(600,642,'Zobrazené sú sily pôsobiace na teleso. F_t = f F_N',C.ink,26,'middle');
assets['trenie.png']=wrap('Šmykové trenie',b);
// Work diagrams: x scale 100 px/m, y scale 8 px/N.
const plot=(ox,title,variable)=>{const oy=470;let s=text(ox+170,114,title,C.ink,29,'middle');
 s+=variable?`<path d="M${ox} ${oy} L${ox+300} ${oy-240} L${ox+300} ${oy} Z" fill="#ffdfb7"/>`:rect(ox,oy-160,300,160,'#ffdfb7');
 for(let i=1;i<=3;i++){s+=line(ox+100*i,oy,ox+100*i,oy-270,'#d9e3e9',1)+text(ox+100*i,oy+34,String(i),C.ink,23,'middle');s+=line(ox,oy-80*10*i/10,ox+330,oy-80*i,'#d9e3e9',1)+text(ox-17,oy-80*i+8,String(i*10),C.ink,23,'end');}
 s+=arrow(ox,oy,ox+360,oy,C.ink)+arrow(ox,oy,ox,oy-290,C.ink)+text(ox-18,oy+31,'0',C.ink,23,'end')+text(ox+365,oy+10,'s (m)',C.ink,24)+text(ox-25,oy-310,'F∥ (N)',C.ink,25);
 s+=variable?line(ox,oy,ox+300,oy-240,C.blue,5):line(ox,oy-160,ox+300,oy-160,C.blue,5);
 s+=text(ox+150,oy-55,variable?'W = 45 J':'W = 60 J',C.orange,30,'middle');
 s+=text(ox+165,555,variable?'W = ½ · 3 m · 30 N':'W = 3 m · 20 N',C.ink,27,'middle');return s;};
assets['mechanicka_praca.png']=wrap('Mechanická práca = plocha pod grafom',plot(100,'Konštantná sila',false)+plot(690,'Lineárne rastúca sila',true)+text(600,634,'F∥ je zložka sily v smere posunutia.',C.ink,27,'middle'));
// E_k = v^2 for m=2 kg, exact parabola and highlighted points.
b=text(790,160,'Rovnaká hmotnosť: m = 2 kg',C.ink,29,'middle');
const ox=120,oy=530,sx=125,sy=37;
for(let i=1;i<=3;i++)b+=line(ox+i*sx,oy,ox+i*sx,oy-9*sy,'#d9e3e9',1)+text(ox+i*sx,oy+35,String(i),C.ink,24,'middle');
for(const i of [1,4,9])b+=line(ox,oy-i*sy,ox+3*sx,oy-i*sy,'#d9e3e9',1)+text(ox-18,oy-i*sy+8,String(i),C.ink,24,'end');
b+=arrow(ox,oy,560,oy,C.ink)+arrow(ox,oy,ox,155,C.ink)+text(575,540,'v (m/s)',C.ink,24)+text(75,132,'E_k (J)',C.ink,26)+text(ox-15,oy+30,'0',C.ink,23,'end');
let pts=[];for(let v=0;v<=3.101;v+=.025)pts.push(`${ox+v*sx},${oy-v*v*sy}`);
b+=`<polyline points="${pts.join(' ')}" fill="none" stroke="${C.blue}" stroke-width="5"/>`;
for(const v of [1,2])b+=circle(ox+v*sx,oy-v*v*sy,7,C.orange);
b+=text(805,252,'v = 1 m/s  →  E_k = 1 J',C.ink,29,'middle')+text(805,326,'v = 2 m/s  →  E_k = 4 J',C.ink,29,'middle')+text(805,421,'E_k = ½ m v²',C.blue,36,'middle')+text(600,635,'Dvojnásobná rýchlosť → štvornásobná kinetická energia.',C.ink,28,'middle');
assets['pohybova_energia.png']=wrap('Kinetická energia rastie so štvorcom rýchlosti',b);
// Heights measured to ball centers, common zero level, m=1 kg and g=10.
b=text(600,108,'m = 1 kg; pre výpočet používame g = 10 m/s²',C.ink,27,'middle')+line(80,510,1120,510,C.grey,3,'8 5');
for(const [cx,cy,h,e] of [[300,370,1,10],[830,230,2,20]]){b+=circle(cx,cy,34,C.orange)+circle(cx-10,cy-12,10,'#ffc77d')+line(cx-120,510,cx-120,cy,C.blue,3)+line(cx-130,cy,cx+45,cy,C.grey,1,'6 5')+line(cx-132,510,cx-108,510,C.blue,3)+line(cx-132,cy,cx-108,cy,C.blue,3)+text(cx-140,(510+cy)/2+8,'h = '+h+' m',C.blue,27,'end')+text(cx+60,cy+10,'E_p = '+e+' J',C.ink,30);}
b+=text(600,550,'Nulová hladina: h = 0, E_p = 0',C.ink,27,'middle')+text(600,610,'E_p = mgh',C.blue,36,'middle')+text(600,652,'Rovnaké teleso v dvojnásobnej výške má dvojnásobnú E_p.',C.ink,25,'middle');
assets['polohova_energia.png']=wrap('Tiažová potenciálna energia',b);
for(const [name,svg] of Object.entries(assets)){const file=path.join(dest,name);if(fs.existsSync(file))throw Error('Súbor už existuje: '+name);const png=await sharp(Buffer.from(svg)).png().toBuffer();fs.writeFileSync(file,png,{flag:'wx'});console.log(name);}

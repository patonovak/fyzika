import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),out=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'content/images');fs.mkdirSync(out,{recursive:true});
const blue='#1769aa',orange='#df7513',green='#168254',ink='#17334b',grey='#8195a3',red='#ba3840';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const T=(x,y,s,c=ink,z=28,a='start')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}" text-anchor="${a}">${esc(s)}</text>`;
const L=(x,y,a,b,c=grey,w=2,d='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}" ${d?'stroke-dasharray="'+d+'"':''}/>`;
const A=(x,y,a,b,c=blue,w=5)=>`<path d="M${x} ${y} L${a} ${b}" fill="none" stroke="${c}" stroke-width="${w}" marker-end="url(#${c.slice(1)})"/>`;
const R=(x,y,w,h,c,stroke=c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${c}" stroke="${stroke}" stroke-width="3"/>`;
const D=(x,y,c=orange)=>`<circle cx="${x}" cy="${y}" r="7" fill="${c}"/>`;
const P=(pts,c=blue,w=5)=>`<polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
const wrap=(title,b)=>`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760"><title>${esc(title)}</title><defs>${[blue,orange,green,ink,red].map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="${c}"/></marker>`).join('')}</defs><rect width="1200" height="760" fill="white"/><g font-family="Arial, sans-serif">${T(45,55,title,ink,35)}${b}</g></svg>`;
const files={};
let s=T(600,116,'Po jednom cykle sa pracovná látka vráti do pôvodného stavu.',ink,27,'middle');
s+=A(140,570,790,570,ink)+A(140,570,140,175,ink)+T(795,551,'V',ink,29)+T(110,157,'p',ink,29)+T(125,602,'0',ink,23,'end');
s+=`<ellipse cx="455" cy="365" rx="220" ry="145" fill="#fce1bd" stroke="${blue}" stroke-width="4"/>`;
const point=t=>[455+220*Math.sin(t),365-145*Math.cos(t)];
for(const t of [.0,Math.PI/2,Math.PI,Math.PI*1.5]){const a=point(t-.17),b=point(t+.17);s+=A(...a,...b,blue);}
s+=L(235,365,235,570,grey,2,'6 6')+L(675,365,675,570,grey,2,'6 6')+T(235,605,'V₁',ink,27,'middle')+T(675,605,'V₂',ink,27,'middle')+T(455,374,"W′ > 0",orange,35,'middle');
s+=T(455,191,'Expanzia',green,27,'middle')+T(455,551,'Kompresia',blue,27,'middle')+T(973,270,'Smer hodinových',ink,27,'middle')+T(973,312,'ručičiek',ink,27,'middle')+T(973,415,'ΔU = 0',blue,35,'middle');
s+=T(600,668,"Výsledná práca plynu W′ sa rovná ploche uzavretej cyklom.",ink,27,'middle')+T(600,723,'Pri opačnom smere obehu je výsledná práca plynu záporná.',grey,25,'middle');
files['kruhovy_dej.png']=wrap('Kruhový dej v p–V diagrame',s);
s=R(330,110,430,95,'#ffead0',orange)+T(545,149,'Ohrievač',orange,30,'middle')+T(545,186,'T₁',orange,28,'middle')+R(365,315,360,105,'#eef4f8',blue)+T(545,357,'Tepelný stroj',blue,31,'middle')+T(545,395,'Pracovná látka',ink,25,'middle')+R(330,530,430,95,'#deedf8',blue)+T(545,570,'Chladič',blue,30,'middle')+T(545,607,'T₂ < T₁',blue,27,'middle');
s+=A(545,211,545,304,orange,12)+T(585,266,'Q₁',orange,32)+A(545,427,545,519,blue,9)+T(585,482,'Q₂',blue,32)+A(734,367,1020,367,green,10)+T(890,335,"Práca W′",green,31,'middle');
s+=T(150,333,'Za cyklus:',ink,25,'middle')+T(150,380,'ΔU = 0',blue,30,'middle')+T(958,452,"W′ = Q₁ − Q₂",green,29,'middle')+T(958,505,'η = 1 − Q₂/Q₁',ink,27,'middle');
s+=T(600,683,'Q₁ a Q₂ označujú kladné veľkosti prijatého a odovzdaného tepla.',ink,25,'middle')+T(600,731,'Na prácu sa premieňa iba časť prijatého tepla; zvyšok odchádza do chladiča.',grey,23,'middle');
files['cyklicky_tepelny_stroj.png']=wrap('Energetická bilancia cyklického tepelného stroja',s);
// Positive-pressure trapezoid. Vertical side lengths are 8 and 4 kPa;
// their separation is 3 L, so the enclosed work is 18 J.
const X=v=>150+145*v,Y=p=>570-35*p;
const pts=[[1,2],[1,10],[4,6],[4,2]];let signed=0;for(let i=0;i<pts.length;i++){const a=pts[i],b=pts[(i+1)%pts.length];signed+=a[0]*b[1]-b[0]*a[1];}const work=-signed/2;if(work!==18)throw Error('Nesprávna práca');
s=T(600,117,'Príklad: plocha pravouhlého lichobežníka',ink,28,'middle')+`<polygon points="${pts.map(([v,p])=>[X(v),Y(p)].join(',')).join(' ')}" fill="#fce1bd"/>`;
for(const p of [2,4,6,8,10])s+=L(150,Y(p),800,Y(p),'#e1e8ed',1)+T(135,Y(p)+8,p,ink,23,'end');
for(const v of [1,2,3,4])s+=L(X(v),570,X(v),180,'#e1e8ed',1)+T(X(v),603,v,ink,23,'middle');
s+=A(150,570,820,570,ink)+A(150,570,150,170,ink)+T(805,551,'V (l)',ink,24)+T(100,150,'p (kPa)',ink,24)+T(135,603,'0',ink,23,'end');
s+=P([...pts,pts[0]].map(([v,p])=>[X(v),Y(p)]));
s+=A(X(1),Y(4),X(1),Y(7))+A(X(1.8),Y(10-4*.8/3),X(2.5),Y(8))+A(X(4),Y(5),X(4),Y(3))+A(X(3),Y(2),X(2),Y(2));
for(let i=0;i<4;i++){const [v,p]=pts[i];s+=D(X(v),Y(p))+T(X(v)+(i===0||i===1?-18:18),Y(p)-12,'ABCD'[i],ink,24,i<2?'end':'start');}
s+=L(X(1)-45,Y(2),X(1)-45,Y(10),orange,2)+L(X(1)-55,Y(2),X(1)-35,Y(2),orange,2)+L(X(1)-55,Y(10),X(1)-35,Y(10),orange,2)+T(X(1)-62,Y(6),'8',orange,25,'end');
s+=L(X(4)+45,Y(2),X(4)+45,Y(6),orange,2)+L(X(4)+35,Y(2),X(4)+55,Y(2),orange,2)+L(X(4)+35,Y(6),X(4)+55,Y(6),orange,2)+T(X(4)+62,Y(4),'4',orange,25);
s+=T(520,417,"W′ = 18 J",orange,31,'middle')+T(1010,220,'Výšky lichobežníka:',ink,23,'middle')+T(1010,269,'p₁ = 10 − 2 = 8 kPa',orange,23,'middle')+T(1010,316,'p₂ = 6 − 2 = 4 kPa',orange,23,'middle')+T(1010,395,'ΔV = 4 − 1 = 3 l',blue,25,'middle');
s+=T(600,662,"W′ = ½ · (8 + 4) kPa · 3 l = 18 J",ink,31,'middle')+T(600,708,'p₁ a p₂ v riešení sú tlakové rozdiely nad spodnou vetvou (2 kPa).',ink,23,'middle')+T(600,744,'Posun celého cyklu po tlakovej osi nemení jeho plochu ani výslednú prácu.',grey,22,'middle');
files['priklad_cyklicky_dej.png']=wrap('Práca plynu za jeden cyklus — príklad',s);
for(const [name,source]of Object.entries(files)){const p=path.join(out,name);if(fs.existsSync(p))throw Error('Existujúci súbor: '+name);fs.writeFileSync(p,await sharp(Buffer.from(source)).png().toBuffer(),{flag:'wx'});}
console.log({files:Object.keys(files),cycleWorkJ:work,cycle:'A(1,2) → B(1,10) → C(4,6) → D(4,2) → A; V in L, p in kPa'});

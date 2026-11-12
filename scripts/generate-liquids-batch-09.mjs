import fs from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=process.argv[2]||path.join(root,'content/images');fs.mkdirSync(out,{recursive:true});
const ink='#17334b',blue='#1769aa',orange='#df7513',grey='#8396a5',green='#168254';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
const t=(x,y,s,size=27,c=ink,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${c}">${esc(s).replace(/[ₚₙₖᵤ]/g,ch=>`<tspan baseline-shift="sub" font-size="70%">${({"ₚ":"p","ₙ":"n","ₖ":"k","ᵤ":"u"})[ch]}</tspan>`)}</text>`;
const line=(x,y,X,Y,c=grey,d='')=>`<path d="M${x},${y} L${X},${Y}" stroke="${c}" stroke-width="3" fill="none" ${d?'stroke-dasharray="7 6"':''}/>`;
const arrow=(x,y,X,Y,c=orange)=>`<path d="M${x},${y} L${X},${Y}" stroke="${c}" stroke-width="5" fill="none" marker-end="url(#${c.slice(1)})"/>`;
const rect=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#e3eff8" stroke="${blue}" stroke-width="3"/>`;
const curve=(d,c=blue,w=4)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
const dot=(x,y,c=blue,r=7)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const wrap=(title,s)=>`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs>${[ink,blue,orange,green].map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="${c}"/></marker>`).join('')}</defs><rect width="1200" height="800" fill="white"/><g font-family="Arial, sans-serif">${t(600,55,title,35)}${s}</g></svg>`;
const files={};
const shape=(d,fill='#e3eff8',stroke=blue)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
const circle=(x,y,r,fill='none',stroke=blue,dash=false)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="3" ${dash?'stroke-dasharray="7 6"':''}/>`;
let s=t(300,125,'Molekulový pohľad',29)+shape('M70 250 H530 V590 H70Z')+line(70,250,530,250,blue)+t(300,218,'Vzduch',24)+t(460,560,'Kvapalina',24);
s+=circle(260,285,75,'none',grey,true)+circle(260,475,75,'none',grey,true)+dot(260,285,orange,9)+dot(260,475,orange,9);
for(let i=0;i<8;i++){const a=i*Math.PI/4;s+=arrow(260+Math.cos(a)*15,475+Math.sin(a)*15,260+Math.cos(a)*56,475+Math.sin(a)*56,blue);}
s+=arrow(260,300,260,365,orange)+t(365,350,'F ≠ 0',26,orange)+t(365,480,'F = 0',26,blue)+t(300,650,'Pri povrchu: výslednica dovnútra.',23)+t(300,690,'Vnútri: príťažlivé sily sa vyrovnajú.',23);
s+=t(890,125,'Mydlová blana so slučkou',29)+circle(890,405,195,'#e3eff8')+circle(890,405,90,'white',orange)+t(890,398,'Otvor',25)+t(890,432,'po prepichnutí',20);
for(let i=0;i<8;i++){const a=i*Math.PI/4;s+=arrow(890+Math.cos(a)*93,405+Math.sin(a)*93,890+Math.cos(a)*155,405+Math.sin(a)*155,orange);}
s+=t(890,650,'Povrchové sily pôsobia v rovine blany.',23)+t(890,690,'Niť sa napne do kružnice.',23)+t(600,755,'Dva rozdielne pohľady: príťažlivosť molekúl a ťah povrchovej blany.',24,grey);
files['povrchova_vrstva_a_povrchove_sily.png']=wrap('Povrchová vrstva a povrchové sily',s);
s='';
for(const [cx,wet]of [[310,true],[890,false]]){
const left=cx-180,right=cx+180;
s+=t(cx,135,wet?'Zmáčanie steny':'Nezmáčanie steny',30)+shape(wet?`M${left} 270 Q${cx} 440 ${right} 270 V590 H${left}Z`:`M${left} 420 Q${cx} 250 ${right} 420 V590 H${left}Z`)+line(left,205,left,590,ink)+line(right,205,right,590,ink);
const y=wet?270:420;
// Tangent at left contact points down-right for wetting, up-right for nonwetting.
s+=line(left,y,left+110,y+(wet?104:-104),orange)+line(left,y,left,y+130,orange);
s+=curve(wet?`M${left} ${y+65} A65 65 0 0 0 ${left+47} ${y+45}`:`M${left} ${y+65} A65 65 0 0 0 ${left+47} ${y-45}`,orange,3);
s+=t(left+35,y+(wet?89:25),'θ',29,orange)+t(cx,650,wet?'0° ≤ θ < 90°':'90° < θ ≤ 180°',30)+t(cx,700,wet?'Napríklad voda na čistom skle':'Napríklad ortuť na skle',24);
}
s+=t(600,760,'Stykový uhol θ sa meria v kvapaline medzi stenou a dotyčnicou k hladine.',24,grey);
files['povrchova_vrstva_kvapaliny.png']=wrap('Tvar hladiny pri stene nádoby',s);
s=t(310,130,'Dutý povrch',30)+t(890,130,'Vypuklý povrch',30);
for(const [cx,concave]of [[310,true],[890,false]]){
const y=concave?320:420;
s+=shape(concave?`M${cx-180} 300 Q${cx} 470 ${cx+180} 300 V600 H${cx-180}Z`:`M${cx-180} 420 Q${cx} 250 ${cx+180} 420 V600 H${cx-180}Z`);
// Tangential forces on a symmetric patch of interface: upward for concave, downward for convex.
const yy=concave?364:356;
s+=arrow(cx-90,yy,cx-155,yy+(concave?-31:31),orange)+arrow(cx+90,yy,cx+155,yy+(concave?-31:31),orange);
s+=t(cx,245,'p vzduchu',25)+t(cx,520,'p kvapaliny',25)+t(cx,660,concave?'p kvapaliny < p vzduchu':'p kvapaliny > p vzduchu',27);
}
s+=t(600,718,'Veľkosť rozdielu tlakov: Δp = 2σ / r',31)+t(600,764,'Guľové rozhranie: r je polomer zakrivenia. Šípky sú dotyčnicové sily.',23,grey);
files['povrchove_sily.png']=wrap('Povrchové sily a kapilárny tlak',s);
s='';
for(const [cx,up]of [[310,true],[890,false]]){
const l=cx-45,r=cx+45,top=up?255:505;
s+=t(cx,130,up?'Kapilárna elevácia':'Kapilárna depresia',30);
// Separate reservoir and tube liquid regions; white tube interior above its meniscus.
s+=shape(`M${cx-205} 410 H${cx+205} V625 H${cx-205}Z`);
s+=`<rect x="${l}" y="185" width="90" height="420" fill="white"/>`;
s+=shape(up?`M${l} 235 Q${cx} 275 ${r} 235 V625 H${l}Z`:`M${l} 525 Q${cx} 485 ${r} 525 V625 H${l}Z`);
s+=line(l,180,l,575,ink)+line(r,180,r,575,ink)+line(cx-205,410,cx+205,410,grey,'dash');
s+=line(cx+90,top,cx+160,top,grey,'dash')+line(cx+125,top,cx+125,410,orange)+line(cx+113,top,cx+137,top,orange)+line(cx+113,410,cx+137,410,orange)+t(cx+155,(top+410)/2+10,up?'h > 0':'h < 0',22,orange,'start');
s+=t(cx,680,up?'Zmáčajúca kvapalina stúpa.':'Nezmáčajúca kvapalina klesá.',25);
}
s+=t(600,735,'h = 2σ cos θ / (Rρg)',31)+t(600,777,'R je polomer kapiláry. Pre úplné zmáčanie je cos θ = 1.',23,grey);
files['kapilarna_elevacia_a_depresia.png']=wrap('Kvapalina v úzkej kapiláre',s);
for(const [name,svg]of Object.entries(files)){const p=path.join(out,name);if(fs.existsSync(p))throw Error('Already exists: '+name);fs.writeFileSync(p,await sharp(Buffer.from(svg)).png().toBuffer(),{flag:'wx'});}console.log(Object.keys(files));

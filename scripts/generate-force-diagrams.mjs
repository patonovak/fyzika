import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dest=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../content/images');
const blue='#1769aa',green='#168254',orange='#e97812',ink='#17334b';
const arrow=(x,y,dx,dy,c)=>`<path d="M${x} ${y} l${dx} ${dy}" fill="none" stroke="${c}" stroke-width="7" marker-end="url(#${c.slice(1)})"/>`;
const txt=(x,y,s,c=ink,size=28)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${size}">${s}</text>`;
const dash=(x,y,dx,dy)=>`<path d="M${x} ${y} l${dx} ${dy}" stroke="#8196a5" stroke-width="2" stroke-dasharray="7 7" fill="none"/>`;
const wrap=(title,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520" role="img" aria-label="${title}"><title>${title}</title><defs>${[blue,green,orange].map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="${c}"/></marker>`).join('')}</defs><rect width="900" height="520" fill="white"/><g font-family="Arial, sans-serif">${txt(42,50,title,ink,30)}${body}</g></svg>`;
const files={
 'skladanie_sil_rovnobezne_vyslednica.svg':wrap('Rovnobežné sily rovnakého smeru',dash(220,95,0,290)+arrow(220,150,240,0,blue)+txt(480,160,'F₁ = 4 N',blue)+arrow(220,250,120,0,green)+txt(360,260,'F₂ = 2 N',green)+arrow(220,350,360,0,orange)+txt(600,360,'F = 6 N',orange)+txt(220,455,'F = F₁ + F₂ = 6 N')),
 'skladanie_sil_opacne_vyslednica.svg':wrap('Rovnobežné sily opačného smeru',dash(350,95,0,290)+arrow(350,150,240,0,blue)+txt(610,160,'F₁ = 4 N',blue)+arrow(350,250,-120,0,green)+txt(65,260,'F₂ = 2 N',green)+arrow(350,350,120,0,orange)+txt(490,360,'F = 2 N',orange)+txt(220,455,'F = F₁ − F₂ = 2 N')),
 'skladanie_sil_kolme_vyslednica.svg':wrap('Navzájom kolmé sily',dash(160,120,320,0)+dash(480,360,0,-240)+arrow(160,360,320,0,blue)+arrow(160,360,0,-240,green)+arrow(160,360,320,-240,orange)+txt(270,405,'F₁ = 4 N',blue)+txt(22,230,'F₂ = 3 N',green)+txt(335,160,'F = 5 N',orange)+`<path d="M160 330 h30 v30" fill="none" stroke="${ink}" stroke-width="2"/>`+txt(565,320,'F² = F₁² + F₂²')+txt(565,365,'F = 5 N')),
 'skladanie_sil_roznebezne_vyslednica.svg':wrap('Rôznobežné sily — vektorový rovnobežník',dash(300,140,300,0)+dash(460,360,140,-220)+arrow(160,360,300,0,blue)+arrow(160,360,140,-220,green)+arrow(160,360,440,-220,orange)+txt(335,405,'F₁',blue)+txt(192,220,'F₂',green)+txt(430,200,'F',orange)+`<path d="M225 360 A65 65 0 0 0 194.89 305.16" fill="none" stroke="${ink}" stroke-width="2"/>`+txt(230,300,'α')+txt(165,470,'F² = F₁² + F₂² + 2 F₁ F₂ cos α'))
};
for(const [name,svg] of Object.entries(files)){fs.writeFileSync(path.join(dest,name),svg,{flag:'wx'});console.log(name);}

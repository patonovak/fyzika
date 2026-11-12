import fs from 'node:fs';import path from 'node:path';import sharp from 'sharp';import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
export const inventory=JSON.parse(fs.readFileSync(path.join(root,'image-generation-remaining.json')));
export const C={ink:'#19384c',blue:'#1769aa',orange:'#dc7414',green:'#18856d',red:'#c13e49',grey:'#8c9eaa',pale:'#e9f2f8'};
export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export const T=(x,y,s,z=27,c=C.ink,a='middle')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}" text-anchor="${a}">${esc(s)}</text>`;
export const L=(x,y,X,Y,c=C.grey,w=3,d=false)=>`<path d="M${x} ${y} L${X} ${Y}" fill="none" stroke="${c}" stroke-width="${w}" ${d?'stroke-dasharray="8 7"':''}/>`;
export const A=(x,y,X,Y,c=C.orange,w=5)=>`<path d="M${x} ${y} L${X} ${Y}" fill="none" stroke="${c}" stroke-width="${w}" marker-end="url(#${c.slice(1)})"/>`;
export const P=(d,c=C.blue,w=4,fill='none')=>`<path d="${d}" fill="${fill}" stroke="${c}" stroke-width="${w}"/>`;
export const R=(x,y,w,h,fill=C.pale,c=C.blue)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${c}" stroke-width="3"/>`;
export const O=(x,y,r,fill='white',c=C.blue,w=3)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${w}"/>`;
export const dot=(x,y,c=C.blue,r=7)=>O(x,y,r,c,c,0);
export const group=(x,y,s,scale=1)=>`<g transform="translate(${x} ${y}) scale(${scale})">${s}</g>`;
export const note=s=>T(700,845,s,24,C.grey);
export function plot(x,y,w,h,fn,{xmin=0,xmax=2*Math.PI,ymin=-1.2,ymax=1.2,color=C.blue,labelX='t',labelY='y',axes=true}={}){const X=v=>x+(v-xmin)/(xmax-xmin)*w,Y=v=>y+h-(v-ymin)/(ymax-ymin)*h;let s=axes?A(x,Y(Math.max(ymin,Math.min(0,ymax))),x+w+15,Y(Math.max(ymin,Math.min(0,ymax))),C.ink,2)+A(X(Math.max(xmin,Math.min(0,xmax))),y+h,X(Math.max(xmin,Math.min(0,xmax))),y-12,C.ink,2)+T(x+w+25,y+h+32,labelX,23)+T(X(Math.max(xmin,Math.min(0,xmax)))-30,y-10,labelY,23):'';let d='';for(let i=0;i<=500;i++){const v=xmin+(xmax-xmin)*i/500,val=fn(v);if(!Number.isFinite(val))throw Error('Nonfinite graph');d+=(i?' L':'M')+X(v)+' '+Y(val);}return s+P(d,color,4);}
export const spring=(x,y,w,h)=>P(`M${x} ${y} l20 0 `+Array.from({length:10},(_,i)=>`l${w/22} ${i%2?-h:h}`).join(' ')+` L${x+w} ${y}`,C.blue,4);
export const lens=(x,y,h=140,convex=true)=>P(convex?`M${x} ${y-h} Q${x-55} ${y} ${x} ${y+h} Q${x+55} ${y} ${x} ${y-h}Z`:`M${x-24} ${y-h} Q${x+5} ${y} ${x-24} ${y+h} L${x+24} ${y+h} Q${x-5} ${y} ${x+24} ${y-h}Z`,C.blue,3,'#e4f2f8');
export const charge=(x,y,q='+',r=24)=>O(x,y,r,q==='+'?'#fbe6d5':'#e1eff9',q==='+'?C.orange:C.blue)+T(x,y+10,q,31,q==='+'?C.orange:C.blue);
export const box=(x,y,w,h,lines)=>R(x,y,w,h)+lines.map((s,i)=>T(x+w/2,y+40+i*38,s,26)).join('');
export function table(headers,rows,{x=80,y=170,w=1240,rowh=85}={}){let s='';const cw=w/headers.length;[headers,...rows].forEach((row,i)=>{s+=R(x,y+i*rowh,w,rowh,i===0?'#d7e8f4':i%2?'white':'#f1f6fa',C.grey);row.forEach((v,j)=>s+=T(x+cw*(j+.5),y+i*rowh+rowh*.62,v,25));});return s;}
export function wrap(title,body){return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900"><defs>${Object.values(C).map(c=>`<marker id="${c.slice(1)}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join('')}</defs><rect width="1400" height="900" fill="white"/><g font-family="Arial, sans-serif">${T(700,65,title,37)}${body}</g></svg>`;}
export async function save(id,title,body){const target=path.join(root,'content/images',inventory[id].name);if(fs.existsSync(target)){if(!process.env.REFRESH_IDS)throw Error('Existing '+target);if(!process.env.REFRESH_IDS.split(',').map(Number).includes(id))return;}fs.mkdirSync(path.dirname(target),{recursive:true});const svg=wrap(title,body);await sharp(Buffer.from(svg)).png().toFile(target);const source=path.join(root,'scripts/figures/svg',id+'.svg');fs.mkdirSync(path.dirname(source),{recursive:true});fs.writeFileSync(source,svg);console.log(id,inventory[id].name);}

import{readFileSync as R,writeFileSync as W,mkdirSync as K,readdirSync as D}from"node:fs";
function run(P,I){
let s=[],c=[],M=new Int32Array(256),o=[],pc=0,t=0,ip=0;
const T=x=>{throw x},pop=()=>{if(!s.length)T(2);return s.pop()},ps=v=>{s.push(v);if(s.length>256)T(3)};
try{for(;;){
if(t>=1e6)T(10);
if(pc<0||pc>=P.length)T(9);
let k=P[pc],q=k==1?1:k==2?4:k>47&&k<52?2:0,n=pc+1+q;
if(n>P.length)T(9);
t++;
switch(k){
case 0:return[o,0];
case 1:ps((P[pc+1]<<24)>>24);break;
case 2:ps(P[pc+1]|P[pc+2]<<8|P[pc+3]<<16|P[pc+4]<<24);break;
case 3:pop();break;
case 4:{let a=pop();ps(a);ps(a);break;}
case 5:{let b=pop(),a=pop();ps(b);ps(a);break;}
case 6:{let b=pop(),a=pop();ps(a);ps(b);ps(a);break;}
case 7:{let d=pop(),b=pop(),a=pop();ps(b);ps(d);ps(a);break;}
case 0x10:{let b=pop(),a=pop();ps(a+b|0);break;}
case 0x11:{let b=pop(),a=pop();ps(a-b|0);break;}
case 0x12:{let b=pop(),a=pop();ps(Math.imul(a,b));break;}
case 0x13:{let b=pop(),a=pop();if(!b)T(4);ps((a/b)|0);break;}
case 0x14:{let b=pop(),a=pop();if(!b)T(4);ps(a%b|0);break;}
case 0x15:{let b=pop(),a=pop();if(!b)T(4);ps((a>>>0)/(b>>>0)|0);break;}
case 0x16:{let b=pop(),a=pop();if(!b)T(4);ps((a>>>0)%(b>>>0)|0);break;}
case 0x17:ps(-pop()|0);break;
case 0x18:{let b=pop(),a=pop();ps(a&b);break;}
case 0x19:{let b=pop(),a=pop();ps(a|b);break;}
case 0x1a:{let b=pop(),a=pop();ps(a^b);break;}
case 0x1b:ps(~pop());break;
case 0x1c:{let b=pop(),a=pop();ps(a<<(b&31));break;}
case 0x1d:{let b=pop(),a=pop();ps(a>>(b&31));break;}
case 0x1e:{let b=pop(),a=pop();ps((a>>>(b&31))|0);break;}
case 0x20:{let b=pop(),a=pop();ps(a==b?1:0);break;}
case 0x21:{let b=pop(),a=pop();ps(a<b?1:0);break;}
case 0x22:{let b=pop(),a=pop();ps((a>>>0)<(b>>>0)?1:0);break;}
case 0x30:{let f=P[pc+1]|P[pc+2]<<8;pc=n+(f>32767?f-65536:f);continue;}
case 0x31:{let f=P[pc+1]|P[pc+2]<<8;pc=pop()==0?n+(f>32767?f-65536:f):n;continue;}
case 0x32:{let f=P[pc+1]|P[pc+2]<<8;pc=pop()!=0?n+(f>32767?f-65536:f):n;continue;}
case 0x33:{if(c.length>63)T(7);c.push(n);pc=P[pc+1]|P[pc+2]<<8;continue;}
case 0x34:{if(!c.length)T(8);pc=c.pop();continue;}
case 0x40:{let a=pop();if(a<0||a>255)T(6);ps(M[a]);break;}
case 0x41:{let a=pop(),v=pop();if(a<0||a>255)T(6);M[a]=v;break;}
case 0x50:{let v=pop(),d=String(v);if(o.length+d.length>65536)T(11);for(let ch of d)o.push(ch.charCodeAt(0));break;}
case 0x51:{let v=pop();if(o.length>65535)T(11);o.push(v&255);break;}
case 0x52:ps(ip<I.length?I[ip++]:-1);break;
case 0x53:return[o,pop()&255];
default:T(5);
}
pc=n;
}}catch(e){return[o,typeof e=="number"?e:99]}
}
for(const id of D("/input").filter(x=>/^i\d+$/.test(x)).sort()){
const[o,e]=run(R(`/input/${id}/program.bin`),R(`/input/${id}/input.bin`));
K(`/output/${id}`,{recursive:true});
W(`/output/${id}/stdout.bin`,Buffer.from(o));
W(`/output/${id}/exit.txt`,e+"\n");
}

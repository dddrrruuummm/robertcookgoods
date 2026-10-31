import { getProduct } from "./products";
export type EnquiryLine = { productId:string; quantity:number };
export function cleanLines(value:unknown):EnquiryLine[]{
 if(!Array.isArray(value))return [];
 const result:EnquiryLine[]=[];
 for(const item of value){if(!item || typeof item!=="object")continue;const row=item as Record<string,unknown>;if(typeof row.productId!=="string"||!getProduct(row.productId))continue;const quantity=typeof row.quantity==="number"&&Number.isFinite(row.quantity)?Math.min(99,Math.max(1,Math.floor(row.quantity))):1;const prior=result.find(line=>line.productId===row.productId);if(prior)prior.quantity=Math.min(99,prior.quantity+quantity);else result.push({productId:row.productId,quantity});}
 return result;
}
export function buildEnquiryMessage(lines:EnquiryLine[],notes="",name=""){
 const list=cleanLines(lines).map(line=>{const p=getProduct(line.productId)!;return `• ${p.name} — quantity ${line.quantity} (ref. RC-${p.number})`;});
 return ["Hi Robert,",list.length?"I'd like to enquire about these products:":"I'd like to know more about your product selection.",list.length?list.join("\n"):null,name.trim()?`My name: ${name.trim()}`:null,notes.trim()?`My notes: ${notes.trim()}`:null,"Please confirm availability, current pricing and delivery options. Thank you."].filter(Boolean).join("\n\n");
}

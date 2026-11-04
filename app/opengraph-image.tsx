import { ImageResponse } from "next/og";
export const alt = "Robert Cook Goods — Good goods. Better days.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",background:"#1747de",color:"white",padding:"58px 64px",fontFamily:"sans-serif"}}><div style={{fontSize:27,fontWeight:700,display:"flex"}}>ROBERT COOK GOODS.</div><div style={{display:"flex",flexDirection:"column",fontSize:92,fontWeight:800,letterSpacing:-4,lineHeight:1.05}}><span>GOOD GOODS.</span><span>BETTER DAYS.</span></div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:24}}><span>Workspace / Home & living / Daily rituals</span><div style={{width:42,height:42,background:"#f3f07b"}}/></div></div>, size);
}

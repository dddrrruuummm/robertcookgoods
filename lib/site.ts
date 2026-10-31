const whatsappNumber=(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "18484580396").replace(/\D/g,"");
export const site = {
  name:"Robert Cook Goods",
  owner:"Robert Andrew Cook",
  domain:"robertcookgoods.com",
  url:process.env.NEXT_PUBLIC_SITE_URL || "https://robertcookgoods.com",
  whatsappNumber,
  whatsappDisplayNumber:/^1\d{10}$/.test(whatsappNumber)?`+1 ${whatsappNumber.slice(1,4)} ${whatsappNumber.slice(4,7)} ${whatsappNumber.slice(7)}`:`+${whatsappNumber}`,
  address:{
    street:"5070 Huntshire Ln SW",
    city:"Lilburn",
    state:"GA",
    postalCode:"30047-7031",
    county:"Gwinnett County",
    country:"US",
    countryName:"United States",
    mapsUrl:"https://www.google.com/maps/search/?api=1&query=5070%20Huntshire%20Ln%20SW%2C%20Lilburn%2C%20GA%2030047-7031",
  },
  tagline:"Good things for everyday living.",
};
export const whatsappReady = /^[1-9]\d{6,14}$/.test(site.whatsappNumber);
export function whatsappUrl(message:string){
  return whatsappReady ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}` : null;
}

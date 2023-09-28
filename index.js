const fs=require("fs");

const dt=fs.readFileSync("notes.txt","utf-8");
var arr=dt.split(/\r?\n/);

for(var i=0;i<arr.length;i++)
{
    var t=new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric",hour: 'numeric', minute: 'numeric', hour12: true});
    const d=t+arr[i];
    console.log(d);
}
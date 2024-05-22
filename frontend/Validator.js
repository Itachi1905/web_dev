let pass = "Passwor1"
let a = false
let b = false
let c = false
let d = false
if( pass.length >= 8 ) a = true;
let l = pass.length
while(l--) {
    if( pass[l] >= 'a' && pass[l] <= 'z' ) b = true;
    else if( pass[l] >= 'A' && pass[l] <= 'Z' ) c = true;
    else if( pass[l] >= '0' && pass[l] <= '9' ) d = true;
}  
if( a && b && c && d) console.log("Valid")
else console.log("Invalid")
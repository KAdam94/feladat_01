export function feladat01(szinek) {
    if( szinek.length < 2){
        return 0
    }
    let osszesSzin = szinek.length
    let lehetosegek = 0;
    for(let i = 2; i <= osszesSzin; i++){
        lehetosegek += kombinacio(osszesSzin, i);
    }
    return lehetosegek;
}

function faktorialis(n){
    if(n < 2){
        return 1;
    }
    else{
        return n * faktorialis(n-1);
    }
}

function kombinacio(n, k){
    return faktorialis(n) / (faktorialis(k) * faktorialis(n - k));
}

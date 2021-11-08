// Asal Sayı 
function asalBul(...sayilar) {
    let kontrol = 0
    for (let i = 0; i < sayilar.length; i++) {
        if(sayilar[i] == 1) {
            console.log(sayilar[i] + " Asal Değildir")
            kontrol = 1
        }              
        for (let j = 2; j < sayilar[i]; j++) {           
            if(sayilar[i] % j == 0 ) {               
                console.log(sayilar[i] + " Asal Değildir")
                kontrol = 1                                          
            }                                     
        }       
        if(kontrol == 0) {
            console.log(sayilar[i] + " Asaldır")
        }
        kontrol = 0   
    }       
}

asalBul(1,5,8,7,2,4,3,20,1,2,6)


//Arkadaş sayı
function ArkadasSayiMi(sayi1, sayi2) {
    let toplam1 = 0, toplam2 = 0
    for (let i = 0; i < sayi1; i++) {
        if(sayi1 % i == 0) {
            toplam1 = toplam1 + i            
        }    
    }
    for (let j = 0; j < sayi2; j++) {
        if(sayi2 % j == 0) {
            toplam2 = toplam2 + j            
        }    
    }
    if(sayi1 == toplam2 && sayi2 == toplam1){
        console.log(sayi1 + " ve " + sayi2 + " Arkadaş Sayılardır.")
        toplam1 = 0
        toplam2 = 0
    }
    else{
        console.log(sayi1 + " ve " + sayi2 + " Arkadaş Sayı Değildir.")
        toplam1 = 0
        toplam2 = 0
    }
}
ArkadasSayiMi(22,24)
ArkadasSayiMi(220,284)
ArkadasSayiMi(85,90)

//Mükemmel Sayi
let sayilar = [1000]
for(let i = 1; i <= 1000; i++){
    let toplam = 0
    sayilar[i] = i    
        for(let j = 1; j < i; j++){
            if(i % j == 0){
                toplam = toplam + j
            }   
        }
        if(i == toplam){
            console.log(i)
        }    
}

//1000 e kadar asal sayi

let sayac = 0
for (let i=2; i<1000; i++){
    sayac = 0
    for(let j=2; j<i; j++){
        if(i%j == 0){
            sayac = 1
            break
        }
    }
    if(sayac == 0)
    {
        console.log(i)
    }
}





















    



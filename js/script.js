const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const statusText = document.getElementById('status');
const vinyl = document.getElementById('vinyl');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;';
        vinyl.style.animation = 'spin 6s linear infinite'; 
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;'; 
        vinyl.style.animation = 'none';
    }
}

function toggleGuestInput(isAttending, buttonId) {
    const guestInput = document.getElementById("guest-input");
    const attendButton = document.getElementById("btn-attend");
    const declineButton = document.getElementById("btn-decline");

    if (isAttending) {
        guestInput.classList.remove("hidden");
    } else {
        guestInput.classList.add("hidden");
    }

    if (buttonId === "btn-attend") {
        attendButton.classList.add("bg-amber-500", "text-white");
        attendButton.classList.remove("bg-gray-200", "text-gray-700");

        declineButton.classList.remove("bg-amber-500", "text-white");
        declineButton.classList.add("bg-gray-200", "text-gray-700");
    } else {
        declineButton.classList.add("bg-amber-500", "text-white");
        declineButton.classList.remove("bg-gray-200", "text-gray-700");

        attendButton.classList.remove("bg-amber-500", "text-white");
        attendButton.classList.add("bg-gray-200", "text-gray-700");
    }
}


let aset1 = document.getElementById('aset1');
let aset2 = document.getElementById('aset2');
let aset3 = document.getElementById('aset3');
let aset4 = document.getElementById('aset4');
let aset5 = document.getElementById('aset5');
let aset6 = document.getElementById('aset6');
let aset7 = document.getElementById('aset7');
let aset8 = document.getElementById('aset8');
let aset9 = document.getElementById('aset9');
let aset10 = document.getElementById('aset10');
let aset11 = document.getElementById('aset11');
let aset12 = document.getElementById('aset12');
let aset13 = document.getElementById('aset13');
let aset14 = document.getElementById('aset14');
let aset15 = document.getElementById('aset15');
let aset16 = document.getElementById('aset16');
let aset17 = document.getElementById('aset17');
let aset18 = document.getElementById('aset18');
let aset19 = document.getElementById('aset19');
let aset20 = document.getElementById('aset20');
let aset21 = document.getElementById('aset21');
let aset22 = document.getElementById('aset22');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // parallax 1
    aset1.style.top = -96 + value * -0.15 + 'px';
    aset2.style.top = -96 + value * -0.15 + 'px';
    aset3.style.top = 96 + value * -0.15 + 'px';
    aset4.style.top = 114 + value * -0.15 + 'px';
    aset5.style.top = 450 + value * -0.15 + 'px';
    aset6.style.top = 450 + value * -0.15 + 'px';
    aset7.style.top = 960 + value * -0.15 + 'px';
    aset8.style.top = 1000 + value * -0.15 + 'px';
    aset9.style.top = 1410 + value * -0.15 + 'px';
    
    // parallax 2
    aset10.style.top = 550 + value * -0.15 + 'px';
    aset11.style.top = 550 + value * -0.15 + 'px';
    aset12.style.top = 610 + value * -0.15 + 'px';
    aset13.style.top = 760 + value * -0.15 + 'px';
    aset14.style.top = 1100 + value * -0.15 + 'px';
    aset15.style.top = 1245 + value * -0.15 + 'px';
    aset16.style.top = 1255 + value * -0.15 + 'px';


    // parallax 3
    aset17.style.top = 750 + value * -0.15 + 'px';
    aset18.style.top = 760 + value * -0.15 + 'px';
    aset19.style.top = 660 + value * -0.15 + 'px';


    // parallax 4
    aset20.style.top = 980 + value * -0.15 +'px';
    aset21.style.top = 1380 + value * -0.15 +'px';
    aset22.style.top = 1310 + value * -0.15 +'px';
});



var countDownDate = new Date("Dec 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
document.addEventListener("DOMContentLoaded", function() {
    // Pastikan bahwa saat halaman di-refresh, #awal ditampilkan dan #home disembunyikan
    document.getElementById("awal").style.display = 'block';
    document.getElementById("home").style.display = 'none';
  
    document.getElementById("btn-open-invitation").addEventListener("click", function() {
      // Menambahkan animasi scroll-up ke #content
      document.getElementById('content').classList.add('fade-out');
      
      // Setelah animasi scroll selesai, sembunyikan #awal dan tampilkan #home
      setTimeout(function() {
        // Menyembunyikan section #awal
        document.getElementById("awal").style.display = 'none';
        
        // Menampilkan section #home
        const home = document.getElementById("home");
        home.style.display = 'block'; // Pastikan #home ada di DOM
        home.classList.add('show'); // Memulai transisi opacity
      }, 1500); // Durasi animasi scroll-up
    });
    
    // Event untuk menangani scroll dan efek parallax
    window.addEventListener('scroll', function() {
      const home = document.getElementById('home');
      const scrollPosition = window.scrollY;
    
      // Mengatur posisi latar belakang berdasarkan scroll
      home.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust the multiplier for scroll speed
    });
  });
  
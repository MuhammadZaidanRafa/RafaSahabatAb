<script>
  // Izinkan audio diputar setelah user interaksi
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
      const audio = document.getElementById("alarmSound");
      if (audio) {
        audio.play().then(() => {
          audio.pause(); // langsung pause agar tidak berbunyi saat itu juga
          audio.currentTime = 0;
        }).catch(e => console.log("Audio gagal diaktifkan:", e));
      }
    }, { once: true });
  });

  // Fungsi untuk memainkan alarm kapanpun diperlukan
  function playAlarm() {
    const audio = document.getElementById("alarmSound");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log("Gagal mainkan alarm:", e));
    }
  }
</script>

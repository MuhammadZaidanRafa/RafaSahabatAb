if (j.waktu === waktuSekarang && !j.notified) {
  new Notification("Waktunya minum antibiotik!", { body: `${j.nama} sekarang.` });
  playAlarm(); // Ini ganti dari document.getElementById(...).play();
  j.notified = true;
  simpanKeStorage();
}

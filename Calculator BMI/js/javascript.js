// ini Javascript
// Fungsi untuk menghitung BMI
document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const bmi = (weight / (height * height)).toFixed(1);

  // Tentukan kategori BMI
  let category = "";
  if (bmi < 18.5) {
    category = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Kelebihan berat badan";
  } else {
    category = "Obesitas";
  }

  let category2 = "";
  if (bmi < 18.5) {
    category2 =
      "Jaga pola makan sehat dan aktivitas fisik untuk mempertahankan kondisi tubuh Anda.Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
  } else if (bmi >= 18.5 && bmi < 25) {
    category2 =
      "Jaga pola makan sehat dan aktivitas fisik untuk mempertahankan kondisi tubuh Anda.Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
  } else if (bmi >= 25 && bmi < 30) {
    category2 =
      "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
  } else {
    category2 =
      "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
  }

  // Tampilkan hasil
  document.getElementById("bmiValue").textContent = bmi;
  document.getElementById("bmiValue2").textContent = bmi;
  document.getElementById("bmiCategory").textContent = category;
  document.getElementById("categoryText").textContent = category.toLowerCase();
  document.getElementById("categoryText1").textContent = category.toLowerCase();
  document.getElementById("categoryText2").textContent =
    category2.toLowerCase();

  // Sembunyikan form dan tampilkan hasil
  document.getElementById("bmiFormSection").style.display = "none";
  document.getElementById("resultSection").style.display = "block";
});

// Fungsi untuk kembali ke form
function showForm() {
  document.getElementById("bmiFormSection").style.display = "block";
  document.getElementById("resultSection").style.display = "none";
}

// Fungsi untuk mengunduh hasilnya
function downloadResult() {
  const resultContent = document.getElementById("resultSection").innerText;
  const blob = new Blob([resultContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "HasilBmi.txt";
  a.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  let lastSelected = null; // Variabel untuk menyimpan radio terakhir yang dipilih

  radio.addEventListener("click", function () {
    if (this === lastSelected) {
      // Jika radio button yang sama diklik dua kali, batalkan pilihan
      this.checked = false;
      lastSelected = null; // Reset lastSelected
    } else {
      lastSelected = this; // Simpan radio button yang baru dipilih
    }
  });
});

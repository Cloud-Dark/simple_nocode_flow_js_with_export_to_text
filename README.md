# 🌵 Multi-Conditional Switch with Weekly Parallel Step

Proyek ini adalah contoh implementasi **Sequential Workflow Designer** yang menampilkan cara membuat langkah paralel mingguan serta pengkondisian berdasarkan waktu menggunakan library `sequential-workflow-designer`.
![image](https://github.com/user-attachments/assets/aa7c0f7d-afeb-489d-8e7a-cc04ec0f31e5)

## 📦 Struktur File

- `index.html` - File utama yang menampilkan UI dan menangani logika pembuatan serta manipulasi langkah workflow.
- `style.css` - Gaya kustom tambahan untuk mempercantik tampilan editor dan komponen.
- `lib.js` - Skrip pembantu untuk mendeteksi environment dan menyematkan sumber daya dari CDN atau lokal.

## 🧰 Fitur Utama

- **Time Step**: Mendapatkan waktu saat ini.
- **If Step**: Mengevaluasi kondisi waktu (`currentHour >= 8 && currentHour < 10`) untuk menentukan jalur 'true' dan 'false'.
- **Parallel Step**: Langkah paralel berdasarkan hari dalam seminggu (Senin–Minggu), tanpa kondisi (selalu aktif).
- **Editor UI**: Menggunakan `stepEditorProvider` untuk memodifikasi setiap jenis langkah secara interaktif.
- **Export Workflow**: Tombol "Export to Text" menghasilkan deskripsi workflow dalam format teks.

## 🚀 Cara Menjalankan

1. Cukup buka `index.html` di browser.
2. Workflow akan termuat secara otomatis.
3. Gunakan tombol `Export to Text` untuk melihat representasi tekstual dari workflow.
4. Jika dijalankan di `localhost` atau jaringan lokal, `lib.js` akan menggunakan sumber daya lokal.

## 🖼️ Tampilan

Halaman ini mencakup:
- Judul halaman dan navigasi GitHub.
- Kanvas editor yang bisa digunakan untuk menyusun langkah-langkah.
- Tampilan hasil dalam format teks dan JSON.

## 📚 Teknologi yang Digunakan

- [Sequential Workflow Designer](https://github.com/nocode-js/sequential-workflow-designer)
- JavaScript (Vanilla)
- HTML & CSS

## 📄 Lisensi

Proyek ini bebas digunakan untuk keperluan pembelajaran dan pengembangan.

---

> Dibuat sebagai contoh dari fitur-fitur `sequential-workflow-designer` yang kompleks namun mudah digunakan.

<script>
  function calculateDays() {
    const pickupDate = new Date(document.getElementById('pickup-date').textContent);
    const returnDate = new Date(document.getElementById('return-date').textContent);

    const timeDiff = returnDate - pickupDate; // różnica czasu w milisekundach
    const daysDiff = timeDiff / (1000 * 3600 * 24); // przeliczenie na dni

    document.getElementById('days-count').textContent = daysDiff;
  }

  // Uruchomienie kalkulacji po załadowaniu strony
  window.onload = calculateDays;
</script>

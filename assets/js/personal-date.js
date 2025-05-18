// Wypełnianie modala danymi klienta przy otwarciu
document.getElementById('clientModal').addEventListener('show.bs.modal', function () {
  document.getElementById('clientFirstNameInput').value = document.getElementById('client-firstname').textContent;
  document.getElementById('clientLastNameInput').value = document.getElementById('client-lastname').textContent;
  document.getElementById('clientPhoneInput').value = document.getElementById('client-phone').textContent;
});

// Zapis danych klienta z modala
function saveClient() {
  document.getElementById('client-firstname').textContent = document.getElementById('clientFirstNameInput').value;
  document.getElementById('client-lastname').textContent = document.getElementById('clientLastNameInput').value;
  document.getElementById('client-phone').textContent = document.getElementById('clientPhoneInput').value;

  const modal = bootstrap.Modal.getInstance(document.getElementById('clientModal'));
  modal.hide();

  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) backdrop.remove();
}

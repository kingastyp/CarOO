<script>
window.addEventListener('load', function() {
  if (window.location.pathname.includes('test-page.html')) {
    var myModal = new bootstrap.Modal(document.getElementById('instruction-modal'));
    myModal.show();
  }

  // Nasłuch po kliknięciu w elementy zamykające modal
  document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(function(btn) {
    btn.addEventListener('click', function () {
      const anyOpen = document.querySelector('.modal.show');
      if (anyOpen) {
        const instance = bootstrap.Modal.getInstance(anyOpen);
        if (instance) {
          instance.hide();
        }
      }
    });
  });
});
</script>

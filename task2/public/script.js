function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(div => {
      div.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
  }
  
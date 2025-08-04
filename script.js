document.getElementById('cargoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const receiver = document.getElementById('receiver').value;
  const phone = document.getElementById('phone').value;
  const description = document.getElementById('description').value;
  const trackingCode = 'Y' + Math.floor(Math.random() * 1000000);
  const data = { receiver, phone, description };
  localStorage.setItem(trackingCode, JSON.stringify(data));
  document.getElementById('trackingCode').innerHTML = `Трэйкинг код: <strong>${trackingCode}</strong>`;
});

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('blackCursor');
  cursor.style.left = (e.clientX - 10) + 'px';
  cursor.style.top = (e.clientY - 10) + 'px';
});   
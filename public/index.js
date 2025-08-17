document.getElementById('getBtn').addEventListener('click', async () => {
  const res = await fetch('/user');
  const data = await res.json();

  console.log(data.id);
  // document.getElementById('out').textContent = "fill here";
});
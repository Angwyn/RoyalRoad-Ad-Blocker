document.querySelectorAll('div').forEach(el => {
  if (el.textContent.trim() === "Advertisement") {
    el.parentElement?.remove();
  }
});

document.querySelectorAll('a.btn.btn-default.btn-xs[target="_blank"][href="/ps/r"]').forEach(a => {
  a.parentElement?.remove();
});

document.querySelectorAll('a[href="/premium"][target="_blank"]').forEach(a => {
  a.parentElement?.remove();
});


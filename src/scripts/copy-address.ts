export function initCopyAddress() {
  const button = document.querySelector<HTMLButtonElement>('.copy-address');
  const status = document.querySelector<HTMLElement>('.copy-status');
  if (!button || !status) return;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.address ?? '');
      status.textContent = 'Address copied.';
    } catch {
      status.textContent = 'Please select and copy the address above.';
    }
  });
}

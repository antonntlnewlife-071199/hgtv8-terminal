/* HERMES GOLD TERMINAL V8 - ANTI-COPY PRIVATE SYSTEM */
/* Paste di <head> terminal V8 kamu, sebelum </head> */
(function() {
  const LYNK_URL = "https://lynk.id/antonntlnewlife";
  const BRAND = "HERMES GOLD TERMINAL V8";
  const LICENSE = {
    email: localStorage.getItem('hermes_license_email') || 'UNLICENSED',
    key: localStorage.getItem('hermes_license_key') || '',
    mt5_account: localStorage.getItem('hermes_mt5_account') || ''
  };
  function injectWatermark() {
    const wm = document.createElement('div');
    wm.id = 'hermes-watermark';
    wm.innerHTML = `🔒 Licensed Private to ${LICENSE.email} | Official: ${LYNK_URL}`;
    wm.style.cssText = `position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: #FFD700; padding: 6px 12px; border-radius: 20px; font-size: 11px; z-index: 999999; border: 1px solid #FFD700; font-family: monospace; pointer-events: none;`;
    document.body.appendChild(wm);
  }
  function showCopyBlockOverlay(action) {
    let overlay = document.getElementById('hermes-copy-block');
    if (overlay) overlay.remove();
    overlay = document.createElement('div');
    overlay.id = 'hermes-copy-block';
    overlay.innerHTML = `<div style="position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 1000000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);"><div style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); border: 2px solid #FFD700; border-radius: 20px; padding: 40px; max-width: 480px; text-align: center; box-shadow: 0 0 50px rgba(255,215,0,0.3);"><div style="font-size: 48px; margin-bottom: 16px;">🔒</div><h2 style="color: #FFD700; margin: 0 0 12px; font-size: 22px;">${BRAND}</h2><h3 style="color: white; margin: 0 0 16px; font-size: 18px;">LICENSED PRIVATE - TIDAK DAPAT DIPINDAHKAN</h3><p style="color: #ccc; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">Terdeteksi percobaan: <b style="color: #ff4444;">${action}</b><br>Duplikasi / copy akan otomatis menampilkan link official.</p><div style="background: #FFD700; color: black; padding: 12px 20px; border-radius: 10px; font-weight: bold; font-size: 16px; margin-bottom: 16px; word-break: break-all;">🔗 ${LYNK_URL}</div><p style="color: #888; font-size: 12px;">Licensed to: ${LICENSE.email}</p><button onclick="this.closest('#hermes-copy-block').remove()" style="margin-top: 20px; background: transparent; border: 1px solid #FFD700; color: #FFD700; padding: 10px 24px; border-radius: 8px; cursor: pointer;">Saya Mengerti</button></div></div>`;
    document.body.appendChild(overlay);
  }
  document.addEventListener('contextmenu', e => { e.preventDefault(); showCopyBlockOverlay('Klik Kanan / Right Click'); });
  document.addEventListener('keydown', e => { if ((e.ctrlKey && ['c','s','u','p'].includes(e.key.toLowerCase())) || e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase()))) { e.preventDefault(); showCopyBlockOverlay('Keyboard: ' + (e.ctrlKey?'Ctrl+':'') + e.key); } });
  document.addEventListener('copy', e => { e.preventDefault(); e.clipboardData.setData('text/plain', `🔒 ${BRAND} - Private | Official: ${LYNK_URL} | Licensed to ${LICENSE.email}`); showCopyBlockOverlay('Copy Text (Ctrl+C)'); });
  let devtoolsOpen = false;
  setInterval(() => { const threshold = 160; if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) { if (!devtoolsOpen) { devtoolsOpen = true; showCopyBlockOverlay('DevTools Terbuka'); } } else { devtoolsOpen = false; } }, 1000);
  document.addEventListener('keyup', e => { if (e.key === 'PrintScreen') { navigator.clipboard.writeText(`🔒 ${BRAND} Screenshot Blocked - Official: ${LYNK_URL}`); showCopyBlockOverlay('Screenshot (PrintScreen)'); } });
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', injectWatermark); } else { injectWatermark(); }
})();

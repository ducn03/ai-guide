/**
 * AI GUIDE - SITE SHELL & GLOBAL SCRIPTS
 * Manages Header, Footer, Bottom Nav, Splash Loader, Top Progress, Toast & Search
 */

const isNestedPage = window.location.pathname.split('/').includes('pages');
const rootPath = isNestedPage ? '../' : '';

// 1. App Top Progress Bar
(function initAppProgressBar() {
  const bar = document.createElement('div');
  bar.id = 'app-progress-bar';
  document.body ? document.body.prepend(bar) : document.addEventListener('DOMContentLoaded', () => document.body.prepend(bar));

  function setProgress(pct) {
    if (bar) {
      bar.style.opacity = '1';
      bar.style.width = pct + '%';
    }
  }

  function start() {
    setProgress(35);
    setTimeout(() => { if (bar && bar.style.width === '35%') setProgress(75); }, 200);
  }

  function finish() {
    setProgress(100);
    setTimeout(() => {
      if (bar) {
        bar.style.opacity = '0';
        setTimeout(() => { if (bar) bar.style.width = '0%'; }, 240);
      }
    }, 180);
  }

  start();
  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish);
  }

  // Intercept internal link clicks for smooth top progress bar
  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link || !link.href) return;
    if (link.target === '_blank' || link.href.startsWith('#') || link.href.startsWith('javascript:')) return;
    if (link.origin === window.location.origin && link.pathname !== window.location.pathname) {
      start();
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.style.display = 'flex';
        loader.classList.remove('loader-hidden');
        const pctEl = document.getElementById('loader-pct');
        const barFill = document.getElementById('loader-bar-fill');
        if (pctEl) pctEl.textContent = '35%';
        if (barFill) barFill.style.width = '35%';
      }
    }
  });

  window.aiLoading = { start, finish, setProgress };
})();

// 2. Full-Page Splash Loader Runner
(function runFullPageLoader() {
  const loader = document.getElementById('page-loader');
  const pctEl = document.getElementById('loader-pct');
  const barEl = document.getElementById('loader-bar-fill');
  if (!loader || !pctEl) return;

  let progress = 0;
  let isDone = false;

  function updateUI(val) {
    pctEl.textContent = val + '%';
    if (barEl) barEl.style.width = val + '%';
  }

  const interval = setInterval(() => {
    if (progress < 85 && !isDone) {
      progress += Math.floor(Math.random() * 8) + 5;
      if (progress > 85) progress = 85;
      updateUI(progress);
    }
  }, 35);

  function finish() {
    if (isDone) return;
    isDone = true;
    clearInterval(interval);

    let current = progress;
    const finishInterval = setInterval(() => {
      current += 6;
      if (current >= 100) {
        current = 100;
        clearInterval(finishInterval);
        updateUI(100);
        setTimeout(() => {
          loader.classList.add('loader-hidden');
          setTimeout(() => {
            loader.style.display = 'none';
          }, 450);
        }, 140);
      } else {
        updateUI(current);
      }
    }, 18);
  }

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish);
  }

  // Safety fallback
  setTimeout(finish, 1400);
})();

// 3. Global Toast Notifications
function showToast(message, iconSvg) {
  let toast = document.querySelector('.toast-wrap');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-wrap';
    document.body.appendChild(toast);
  }

  const defaultSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  toast.innerHTML = (iconSvg || defaultSvg) + `<span>${message}</span>`;
  toast.classList.add('is-visible');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2200);
}
window.showToast = showToast;

// 4. Global Copy Helper
function copyText(text, successMsg = 'Đã sao chép vào bộ nhớ tạm!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Không thể sao chép!', `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#f87171" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="#f87171" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="#f87171"/></svg>`);
  }
  document.body.removeChild(ta);
}
window.copyText = copyText;

// 5. Shell Components Markup
const siteHeaderMarkup = `
<header class="site">
  <div class="header-row">
    <a href="${rootPath}index.html" class="brand">
      <div class="brand-icon">✦</div>
      <div class="brand-name">
        <b>AI Guide</b>
        <span>PRO</span>
      </div>
    </a>

    <nav class="main-nav">
      <a href="${rootPath}index.html" data-page="index.html">Trang chủ</a>
      <a href="${rootPath}pages/basics.html" data-page="basics.html">Nhập môn AI</a>
      <a href="${rootPath}pages/prompting.html" data-page="prompting.html">Nghệ thuật Prompt</a>
      <a href="${rootPath}pages/prompt-library.html" data-page="prompt-library.html">Thư viện Prompt</a>
      <a href="${rootPath}pages/tools.html" data-page="tools.html">Bản đồ Công cụ</a>
      <a href="${rootPath}pages/advanced.html" data-page="advanced.html" class="cta-nav">Làm chủ Agent ⚡</a>
    </nav>

    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input type="text" placeholder="Tìm kiếm mẹo, prompt, công cụ..." aria-label="Tìm kiếm">
      <div class="search-suggestions" hidden></div>
    </div>

    <div class="header-actions">
      <button class="mobile-search-btn" aria-label="Mở tìm kiếm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
</header>
`;

const siteFooterMarkup = `
<footer>
  <div class="foot-grid">
    <div>
      <div class="foot-brand">
        <div class="brand-icon" style="width:30px;height:30px;font-size:15px;">✦</div>
        <span>AI Guide Vietnam</span>
      </div>
      <p class="foot-desc">Cẩm nang hướng dẫn sử dụng Trí tuệ Nhân tạo toàn diện, trực quan từ cơ bản đến nâng cao. Giúp bất kỳ ai cũng có thể làm chủ AI trong học tập, công việc và cuộc sống.</p>
    </div>

    <div class="foot-col">
      <h5>Học tập</h5>
      <a href="${rootPath}pages/basics.html">Nhập môn AI cho người mới</a>
      <a href="${rootPath}pages/prompting.html">Kỹ thuật viết Prompt chuẩn</a>
      <a href="${rootPath}pages/prompt-library.html">Thư viện 100+ Prompt mẫu</a>
      <a href="${rootPath}pages/advanced.html">Tự động hóa với AI Agents</a>
    </div>

    <div class="foot-col">
      <h5>Hệ sinh thái AI</h5>
      <a href="${rootPath}pages/tools.html">So sánh ChatGPT, Claude &amp; Gemini</a>
      <a href="${rootPath}pages/tools.html">Công cụ tạo ảnh &amp; Video AI</a>
      <a href="${rootPath}pages/tools.html">Công cụ Lập trình &amp; Code AI</a>
      <a href="${rootPath}pages/tools.html">AI nghiên cứu &amp; Tóm tắt sách</a>
    </div>

    <div class="foot-col">
      <h5>Về dự án</h5>
      <a href="${rootPath}index.html">Trang chủ</a>
      <a href="${rootPath}pages/basics.html#nguyen-tac">Quy tắc vàng dùng AI</a>
      <a href="${rootPath}pages/prompting.html#frameworks">Framework CREATE</a>
      <a href="https://github.com/ducn03/ai-guide" target="_blank" rel="noopener">Mã nguồn mở GitHub</a>
    </div>
  </div>

  <div class="foot-bottom">
    <span>© 2026 AI Guide. Xây dựng cho cộng đồng người dùng AI Việt Nam.</span>
    <span>Kiến thức thực chiến • Dễ hiểu • Không rào cản kỹ thuật</span>
  </div>
</footer>
`;

const bottomNavMarkup = `
<nav class="bottom-nav">
  <a href="${rootPath}index.html" class="bn-item" data-page="index.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 11 12 4l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Trang chủ
  </a>
  <a href="${rootPath}pages/basics.html" class="bn-item" data-page="basics.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    Nhập môn
  </a>
  <a href="${rootPath}pages/prompting.html" class="bn-item" data-page="prompting.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Prompt
  </a>
  <a href="${rootPath}pages/prompt-library.html" class="bn-item" data-page="prompt-library.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>
    Thư viện
  </a>
  <a href="${rootPath}pages/tools.html" class="bn-item" data-page="tools.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Công cụ
  </a>
</nav>
`;

function renderShell() {
  const headerRoot = document.querySelector('#site-header');
  const footerRoot = document.querySelector('#site-footer');
  const bottomNavRoot = document.querySelector('#site-bottom-nav');

  if (headerRoot) headerRoot.innerHTML = siteHeaderMarkup;
  if (footerRoot) footerRoot.innerHTML = siteFooterMarkup;
  if (bottomNavRoot) bottomNavRoot.innerHTML = bottomNavMarkup;

  // Active page indicator
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .bn-item').forEach(link => {
    if (link.dataset.page === currentPath) {
      link.classList.add('active');
    }
  });

  // Mobile search toggle
  const mobileSearchBtn = document.querySelector('.mobile-search-btn');
  const searchBox = document.querySelector('.search-box');
  const searchInput = document.querySelector('.search-box input');
  const suggestionsBox = document.querySelector('.search-suggestions');

  if (mobileSearchBtn && searchBox) {
    mobileSearchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('is-open');
      if (searchBox.classList.contains('is-open')) searchInput?.focus();
    });
  }

  // Live search suggestions
  if (searchInput && suggestionsBox) {
    const searchDatabase = [
      { title: 'Nhập môn: AI là gì & Làm quen thế nào?', tag: 'Cơ bản', url: `${rootPath}pages/basics.html` },
      { title: '4 Quy tắc vàng đặt câu hỏi cho AI', tag: 'Kỹ năng', url: `${rootPath}pages/basics.html#nguyen-tac` },
      { title: 'Framework C-R-E-A-T-E viết prompt đỉnh cao', tag: 'Prompting', url: `${rootPath}pages/prompting.html#create-framework` },
      { title: 'Kỹ thuật Few-Shot & Chain-of-Thought', tag: 'Nâng cao', url: `${rootPath}pages/prompting.html#techniques` },
      { title: 'Thư viện: Prompt Viết Email & Báo cáo công việc', tag: 'Thư viện', url: `${rootPath}pages/prompt-library.html?cat=office` },
      { title: 'Thư viện: Prompt Lập kế hoạch Marketing & Content', tag: 'Thư viện', url: `${rootPath}pages/prompt-library.html?cat=marketing` },
      { title: 'Thư viện: Prompt Học ngoại ngữ & Tóm tắt sách', tag: 'Thư viện', url: `${rootPath}pages/prompt-library.html?cat=learning` },
      { title: 'So sánh ChatGPT vs Claude vs Gemini 2026', tag: 'Công cụ', url: `${rootPath}pages/tools.html#so-sanh` },
      { title: 'Top công cụ vẽ tranh & tạo video bằng AI', tag: 'Đa phương thức', url: `${rootPath}pages/tools.html#media` },
      { title: 'Hiểu về AI Agents & Tự động hoá công việc', tag: 'Chuyên sâu', url: `${rootPath}pages/advanced.html` }
    ];

    function removeAccents(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
    }

    searchInput.addEventListener('input', () => {
      const q = removeAccents(searchInput.value.trim());
      if (!q) {
        suggestionsBox.hidden = true;
        return;
      }

      const matches = searchDatabase.filter(item => removeAccents(item.title).includes(q) || removeAccents(item.tag).includes(q));
      if (!matches.length) {
        suggestionsBox.innerHTML = `<div style="padding:14px;color:var(--ink-soft);font-size:13px;text-align:center;">Không tìm thấy kết quả phù hợp.</div>`;
        suggestionsBox.hidden = false;
        return;
      }

      suggestionsBox.innerHTML = matches.map(item => `
        <a href="${item.url}" class="search-suggestion-item">
          <span>${item.title}</span>
          <span class="s-tag">${item.tag}</span>
        </a>
      `).join('');
      suggestionsBox.hidden = false;
    });

    document.addEventListener('click', e => {
      if (!searchBox.contains(e.target)) {
        suggestionsBox.hidden = true;
        searchBox.classList.remove('is-open');
      }
    });
  }

  // Hide bottom nav on scroll down, show on scroll up
  if (bottomNavRoot && bottomNavRoot.firstElementChild) {
    const navEl = bottomNavRoot.firstElementChild;
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 840) {
        const curY = window.scrollY;
        if (curY > lastY && curY > 50) {
          navEl.classList.add('nav-hidden');
        } else {
          navEl.classList.remove('nav-hidden');
        }
        lastY = curY;
      }
    }, { passive: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderShell);
} else {
  renderShell();
}

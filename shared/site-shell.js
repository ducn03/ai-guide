/**
 * AI TRAINING WIKI - SITE SHELL & GLOBAL SCRIPTS
 * 100% Static - Zero Backend Required - Works on GitHub Pages & file:///
 */

const isNestedPage = window.location.pathname.split('/').includes('pages');
const rootPath = isNestedPage ? '../' : '';

// 1. App Top Progress Bar (YouTube/GitHub Style)
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
    if (link.hostname === window.location.hostname && link.pathname !== window.location.pathname) {
      start();
    }
  });

  window.aiLoading = { start, finish, setProgress };
})();

// 2. Full-Page Splash Loader Runner (Smooth Fast Exit)
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
    if (progress < 90 && !isDone) {
      progress += Math.floor(Math.random() * 12) + 10;
      if (progress > 90) progress = 90;
      updateUI(progress);
    }
  }, 25);

  function finish() {
    if (isDone) return;
    isDone = true;
    clearInterval(interval);
    updateUI(100);
    setTimeout(() => {
      loader.classList.add('loader-hidden');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 350);
    }, 100);
  }

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish);
  }

  // Fallback ensure quick exit
  setTimeout(finish, 650);
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

// 5. Shell Components Markup (AI Training Wiki & Knowledge Base)
const siteHeaderMarkup = `
<header class="site">
  <div class="header-row">
    <a href="${rootPath}index.html" class="brand">
      <div class="brand-icon">✦</div>
      <div class="brand-name">
        <b>AI Wiki</b>
        <span>TRAINING</span>
      </div>
    </a>

    <nav class="main-nav">
      <a href="${rootPath}index.html" data-page="index.html">Tổng quan Wiki</a>
      <a href="${rootPath}pages/basics.html" data-page="basics.html">Onboarding &amp; Chính sách</a>
      <a href="${rootPath}pages/prompting.html" data-page="prompting.html">Kỹ năng Prompt</a>
      <a href="${rootPath}pages/prompt-library.html" data-page="prompt-library.html">SOP &amp; Mẫu Phòng Ban</a>
      <a href="${rootPath}pages/tools.html" data-page="tools.html">Công cụ Chuẩn</a>
      <a href="${rootPath}pages/advanced.html" data-page="advanced.html" class="cta-nav">Tự động hoá ⚡</a>
    </nav>

    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input type="text" placeholder="Tìm kiếm quy trình, SOP, prompt mẫu..." aria-label="Tìm kiếm nội bộ">
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
        <span>AI Training Wiki &amp; SOPs</span>
      </div>
      <p class="foot-desc">Cổng thông tin và cẩm nang đào tạo nội bộ: Chuẩn hóa quy trình ứng dụng Trí tuệ Nhân tạo (AI) cho toàn thể cán bộ nhân viên công ty. Tăng tốc hiệu suất làm việc bền vững và bảo mật thông tin tối đa.</p>
    </div>

    <div class="foot-col">
      <h5>Khối Đào Tạo</h5>
      <a href="${rootPath}pages/basics.html">1. Onboarding &amp; Quy định bảo mật</a>
      <a href="${rootPath}pages/prompting.html">2. Kỹ năng giao việc C-R-E-A-T-E</a>
      <a href="${rootPath}pages/prompt-library.html">3. SOPs &amp; Mẫu theo phòng ban</a>
      <a href="${rootPath}pages/advanced.html">4. Quy trình tự động hoá nội bộ</a>
    </div>

    <div class="foot-col">
      <h5>Phòng Ban Ứng Dụng</h5>
      <a href="${rootPath}pages/prompt-library.html?cat=marketing">Marketing &amp; Truyền thông</a>
      <a href="${rootPath}pages/prompt-library.html?cat=sales">Kinh doanh &amp; Chăm sóc khách hàng</a>
      <a href="${rootPath}pages/prompt-library.html?cat=hr">Hành chính - Nhân sự (HR)</a>
      <a href="${rootPath}pages/prompt-library.html?cat=finance">Kế toán &amp; Xử lý dữ liệu</a>
    </div>

    <div class="foot-col">
      <h5>Tài Nguyên Nội Bộ</h5>
      <a href="${rootPath}pages/tools.html">Danh mục Công cụ AI cấp phép</a>
      <a href="${rootPath}pages/basics.html#bao-mat">Nguyên tắc bảo mật dữ liệu khách hàng</a>
      <a href="${rootPath}pages/prompting.html#techniques">Kỹ thuật kiểm duyệt chống ảo giác</a>
      <a href="${rootPath}index.html#prompt-builder">Trình tạo Prompt nhanh</a>
    </div>
  </div>

  <div class="foot-bottom">
    <span>© 2026 AI Training Wiki. Tài liệu đào tạo nội bộ chuẩn hóa.</span>
    <span>Bảo mật • Thực chiến • 100% Thuần Web tĩnh (GitHub Pages Ready)</span>
  </div>
</footer>
`;

const bottomNavMarkup = `
<nav class="bottom-nav">
  <a href="${rootPath}index.html" class="bn-item" data-page="index.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 11 12 4l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Wiki
  </a>
  <a href="${rootPath}pages/basics.html" class="bn-item" data-page="basics.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    Chính sách
  </a>
  <a href="${rootPath}pages/prompting.html" class="bn-item" data-page="prompting.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Prompt
  </a>
  <a href="${rootPath}pages/prompt-library.html" class="bn-item" data-page="prompt-library.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>
    SOP Mẫu
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
      { title: 'Onboarding: Quy định & Chính sách bảo mật sử dụng AI nội bộ', tag: 'Chính sách', url: `${rootPath}pages/basics.html` },
      { title: '4 Quy tắc vàng giao tiếp với AI cho nhân viên công ty', tag: 'Kỹ năng', url: `${rootPath}pages/basics.html#nguyen-tac` },
      { title: 'Framework C-R-E-A-T-E viết prompt chuẩn doanh nghiệp', tag: 'Prompting', url: `${rootPath}pages/prompting.html#create-framework` },
      { title: 'Kỹ thuật kiểm duyệt thông tin & Chống ảo giác (Hallucination)', tag: 'Kiểm duyệt', url: `${rootPath}pages/prompting.html#techniques` },
      { title: 'SOP Mẫu: Soạn Email & Báo cáo công việc gửi Sếp/Đối tác', tag: 'Văn phòng', url: `${rootPath}pages/prompt-library.html?cat=office` },
      { title: 'SOP Mẫu: Kế hoạch Marketing, Viết bài Content & Kịch bản TikTok', tag: 'Marketing', url: `${rootPath}pages/prompt-library.html?cat=marketing` },
      { title: 'SOP Mẫu: Telesale, Xử lý từ chối & Chăm sóc khách hàng', tag: 'Sales/CSKH', url: `${rootPath}pages/prompt-library.html?cat=sales` },
      { title: 'SOP Mẫu: Xử lý Bảng tính Excel, Hàm phức tạp & Đối soát', tag: 'Kế toán/Excel', url: `${rootPath}pages/prompt-library.html?cat=finance` },
      { title: 'Danh mục Công cụ AI được công ty cấp phép & khuyến nghị', tag: 'Công cụ', url: `${rootPath}pages/tools.html` },
      { title: 'Quy trình Tự động hoá công việc với AI Agents', tag: 'Tự động hoá', url: `${rootPath}pages/advanced.html` }
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
        suggestionsBox.innerHTML = `<div style="padding:14px;color:var(--ink-soft);font-size:13px;text-align:center;">Không tìm thấy quy trình hoặc prompt phù hợp.</div>`;
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

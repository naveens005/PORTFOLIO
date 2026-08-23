/**
 * Theme Switcher Module (Dark Obsidian <-> Clean Light Monochrome)
 */

export function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('naveen_portfolio_theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Default to dark unless stored as light
  const initialTheme = storedTheme ? storedTheme : (systemPrefersLight ? 'light' : 'dark');
  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('naveen_portfolio_theme', newTheme);
    });
  });
}

export function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcons('light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    updateThemeIcons('dark');
  }
}

function updateThemeIcons(theme) {
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');

  if (theme === 'light') {
    sunIcons.forEach(el => el.style.display = 'none');
    moonIcons.forEach(el => el.style.display = 'block');
  } else {
    sunIcons.forEach(el => el.style.display = 'block');
    moonIcons.forEach(el => el.style.display = 'none');
  }
}

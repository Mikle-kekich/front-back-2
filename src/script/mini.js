

const KEY = 'theme', btn = document.querySelector('.theme-toggle');
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
// Автовыбор: системная тема или сохранённый выбор пользователя
if (localStorage.getItem(KEY) === 'dark' || (!localStorage.getItem(KEY) &&
    prefersDark)) {
    document.body.classList.add('theme-dark');
    btn?.setAttribute('aria-pressed', 'true');
}
// Переключение по кнопке с сохранением в localStorage
btn?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    btn.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem(KEY, isDark ? 'dark' : 'light');
});

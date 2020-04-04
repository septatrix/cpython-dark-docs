let currentTheme = localStorage.getItem('currentTheme') || 'auto'

const pygmentsDark = document.getElementById('pygments_dark_css')
const pydocthemeDark = document.getElementById('pydoctheme_dark_css')

const themeOrder = {
  light: 'dark',
  dark: 'auto',
  auto: 'light',
}

updateTheme()

function toggleTheme() {
  currentTheme = themeOrder[currentTheme]
  localStorage.setItem('currentTheme', currentTheme)
  updateTheme()
}

function updateTheme() {
  switch (currentTheme) {
    case 'light':
      pydocthemeDark.media = 'not all'
      pygmentsDark.media = 'not all'
      break
    case 'dark':
      pydocthemeDark.media = 'all'
      pygmentsDark.media = 'all'
      break
    default:
      // auto
      pydocthemeDark.media = '(prefers-color-scheme: dark)'
      pygmentsDark.media = '(prefers-color-scheme: dark)'
  }
}

let currentTheme = 'dark'

const cookies = new Map(document.cookie.split('; ').map(cookie => cookie.split('=')))
if (cookies.has('currentTheme')) {
    currentTheme = cookies.get('currentTheme')
}

const pygments_dark = document.getElementById('pygments_dark_css')
const pydoctheme_dark = document.getElementById('pydoctheme_dark_css')

pydoctheme_dark.disabled = currentTheme == 'light'
pygments_dark.disabled = currentTheme == 'light'

function toggleTheme() {
    currentTheme = currentTheme == 'light' ? 'dark' : 'light'
    document.cookie = 'currentTheme=' + currentTheme + ';path=/;max-age=' + (60*60*24*365)
    pygments_dark.disabled = currentTheme == 'light'
    pydoctheme_dark.disabled = currentTheme == 'light'
}

function toggleTheme {
    document.querySelectorAll('link[media="(prefers-color-scheme: dark)"]').forEach(function (node) {node.disabled = !node.disabled});
}

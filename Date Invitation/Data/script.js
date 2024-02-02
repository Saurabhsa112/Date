function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url("${bg}")`;  // Use backticks for template literals
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');  // Use 'content' instead of 'contents'
        if (content.classList.contains(title)) {
            content.classList.add('active');  // Use 'content' instead of 'contents'
        }
    });
}
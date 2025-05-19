document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab');
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Learn More button functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const extraText = button.previousElementSibling;
            if (extraText.classList.contains('extra-text')) {
                if (extraText.style.display === 'none' || extraText.style.display === '') {
                    extraText.style.display = 'block';
                    button.textContent = 'Learn Less';
                } else {
                    extraText.style.display = 'none';
                    button.textContent = 'Learn More';
                }
            }
        });
    });
});

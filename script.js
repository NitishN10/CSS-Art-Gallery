// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artworks = document.querySelectorAll('.artwork');
    const viewCodeButtons = document.querySelectorAll('.view-code');
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    // Filter artworks
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            artworks.forEach(artwork => {
                if (filterValue === 'all' || artwork.getAttribute('data-category').includes(filterValue)) {
                    artwork.style.display = 'block';
                    setTimeout(() => {
                        artwork.style.opacity = '1';
                        artwork.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    artwork.style.opacity = '0';
                    artwork.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        artwork.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // View code functionality
    viewCodeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeDisplay = this.nextElementSibling;
            const isVisible = codeDisplay.style.display === 'block';
            
            // Close all code displays
            document.querySelectorAll('.code-display').forEach(display => {
                display.style.display = 'none';
            });
            
            // Update all button texts
            document.querySelectorAll('.view-code').forEach(btn => {
                btn.textContent = 'View Code';
            });
            
            // Toggle current code display
            if (!isVisible) {
                codeDisplay.style.display = 'block';
                this.textContent = 'Hide Code';
            }
        });
    });
    
    // Copy code functionality
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeContent = this.parentElement.nextElementSibling.textContent;
            navigator.clipboard.writeText(codeContent).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
});
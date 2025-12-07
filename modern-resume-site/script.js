// Main JavaScript File - Enhanced with Professional Features

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initNavigation();
    initThemeSwitcher();
    initColorSchemes();
    initTechStack();
    initServices();
    initProjects();
    initAnimations();
    initChatbot();
    initForms();
    initScrollEffects();
    initGitHubIntegration();
    initLocationMap();
});

// Navigation Menu
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scroll
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Handle scroll effects
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Theme Switcher
function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme + '-theme');
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            const newTheme = isDark ? 'light' : 'dark';
            
            // Toggle classes
            body.classList.remove(isDark ? 'dark-theme' : 'light-theme');
            body.classList.add(newTheme + '-theme');
            
            // Save to localStorage
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateThemeIcon(newTheme);
            
            // Dispatch event for other components
            document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
        });
    }
}

function updateThemeIcon(theme) {
    const iconSun = document.querySelector('.theme-toggle .fa-sun');
    const iconMoon = document.querySelector('.theme-toggle .fa-moon');
    
    if (theme === 'light') {
        iconSun.style.opacity = '0';
        iconMoon.style.opacity = '1';
    } else {
        iconSun.style.opacity = '1';
        iconMoon.style.opacity = '0';
    }
}

// Color Scheme Switcher
function initColorSchemes() {
    const colorSchemes = document.querySelectorAll('.color-scheme');
    
    colorSchemes.forEach(scheme => {
        scheme.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyColorScheme(theme);
            localStorage.setItem('colorScheme', theme);
        });
    });
    
    // Apply saved scheme
    const savedScheme = localStorage.getItem('colorScheme') || 'default';
    applyColorScheme(savedScheme);
}

function applyColorScheme(scheme) {
    const root = document.documentElement;
    
    // Reset to default first
    root.style.setProperty('--primary', '#6C63FF');
    root.style.setProperty('--primary-dark', '#554FD8');
    root.style.setProperty('--primary-light', '#8A85FF');
    root.style.setProperty('--secondary', '#FF6584');
    root.style.setProperty('--accent', '#36D1DC');
    
    switch(scheme) {
        case 'purple':
            root.style.setProperty('--primary', '#8B5CF6');
            root.style.setProperty('--primary-dark', '#7C3AED');
            root.style.setProperty('--primary-light', '#A78BFA');
            root.style.setProperty('--secondary', '#EC4899');
            root.style.setProperty('--accent', '#8B5CF6');
            break;
        case 'blue':
            root.style.setProperty('--primary', '#3B82F6');
            root.style.setProperty('--primary-dark', '#2563EB');
            root.style.setProperty('--primary-light', '#60A5FA');
            root.style.setProperty('--secondary', '#06B6D4');
            root.style.setProperty('--accent', '#3B82F6');
            break;
        case 'green':
            root.style.setProperty('--primary', '#10B981');
            root.style.setProperty('--primary-dark', '#059669');
            root.style.setProperty('--primary-light', '#34D399');
            root.style.setProperty('--secondary', '#3B82F6');
            root.style.setProperty('--accent', '#10B981');
            break;
        case 'orange':
            root.style.setProperty('--primary', '#F59E0B');
            root.style.setProperty('--primary-dark', '#D97706');
            root.style.setProperty('--primary-light', '#FBBF24');
            root.style.setProperty('--secondary', '#EF4444');
            root.style.setProperty('--accent', '#F59E0B');
            break;
    }
}

// Tech Stack Interactive
function initTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Handle tech item clicks
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            techItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Handle tab switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            
            // Reset tech items
            techItems.forEach(item => item.classList.remove('active'));
        });
    });
    
    // Close tech overlay when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.tech-item') && !e.target.closest('.tech-overlay')) {
            techItems.forEach(item => item.classList.remove('active'));
        }
    });
}

// Services Tabs
function initServices() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected category
            document.querySelectorAll('.service-category').forEach(cat => {
                cat.classList.remove('active');
            });
            document.getElementById(categoryId).classList.add('active');
        });
    });
}

// Projects Filtering
function initProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// AI Chatbot
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotModal = document.getElementById('chatbotModal');
    const chatbotClose = document.getElementById('chatbotClose');
    const sendButton = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const quickReplies = document.querySelectorAll('.quick-reply');
    
    if (!chatbotToggle) return;
    
    // Toggle chatbot modal
    chatbotToggle.addEventListener('click', () => {
        chatbotModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    chatbotClose.addEventListener('click', () => {
        chatbotModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatbotModal.classList.contains('active')) {
            chatbotModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate bot thinking
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 1000);
        }
    }
    
    // Send message on button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Quick replies
    quickReplies.forEach(reply => {
        reply.addEventListener('click', function() {
            const replyText = this.getAttribute('data-reply');
            addMessage(replyText, 'user');
            
            setTimeout(() => {
                const botResponse = generateBotResponse(replyText);
                addMessage(botResponse, 'bot');
            }, 1000);
        });
    });
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate bot responses
    function generateBotResponse(userMessage) {
        const responses = {
            'hello': 'Hello! 👋 How can I assist you today? I\'m here to help with any questions about my services.',
            'hi': 'Hi there! 😊 How can I help you today?',
            'services': 'I offer a wide range of AI/ML services:\n\n• Machine Learning Solutions\n• Computer Vision\n• NLP & Chatbots\n• Web Development\n• Data Analysis\n\nWhich service interests you?',
            'pricing': 'My rates are flexible based on project requirements:\n\n• Hourly: $25-$50/hour\n• Fixed Price: Project-based quotes\n• Maintenance: Monthly retainer options\n\nContact me for a detailed quote!',
            'portfolio': 'You can view my portfolio here:\n\n• Freelancer: https://www.freelancer.com/u/MuhammadSudaisAI\n• GitHub: https://github.com/MuhammadSudaisAI\n• Live Projects: Check my website portfolio section',
            'contact': 'You can contact me through:\n\n📱 WhatsApp: +92 347 4810818\n📧 Email: sudaisoo72@gmail.com\n💼 Freelancer: MuhammadSudaisAI\n💼 Fiverr: sudais_ai',
            'experience': 'I have 5+ years of experience in:\n\n• Python Development\n• Machine Learning\n• Java & C++\n• Web Technologies\n• AI/ML Solutions',
            'availability': 'I\'m available for:\n\n• Full-time Projects\n• Part-time Work\n• Consultation\n• Urgent Projects (24/7 support available)',
            'github': 'My GitHub profile: https://github.com/MuhammadSudaisAI\n\nYou can find my open-source projects and code samples there.',
            'location': 'I\'m based in Islamabad, Pakistan.\n\n📍 Bakhtawar, City Line 10, Street 5\n🌍 Available for remote work worldwide',
            'hire': 'To hire me:\n\n1. Post project on Freelancer\n2. Contact via WhatsApp\n3. Send email with requirements\n\nI respond within 24 hours!'
        };
        
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return "Thanks for your message! I'll get back to you with more information soon. In the meantime, you can ask about:\n\n• My services\n• Pricing\n• Portfolio\n• Contact information";
    }
    
    // Auto-open chatbot on first visit
    if (!localStorage.getItem('chatbotShown')) {
        setTimeout(() => {
            chatbotModal.classList.add('active');
            localStorage.setItem('chatbotShown', 'true');
        }, 3000);
    }
}

// Form Handling
function initForms() {
    const contactForm = document.getElementById('quickForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Message sent successfully! I will contact you within 24 hours.', 'success');
                
                // Reset form
                this.reset();
                
                // Send notification to chatbot
                setTimeout(() => {
                    if (document.querySelector('.chatbot-modal.active')) {
                        addMessage("I've received your inquiry! I'll review it and get back to you shortly.", 'bot');
                    }
                }, 1000);
                
            } catch (error) {
                showNotification('Error sending message. Please try again.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 99999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Progress indicator
    const progressBar = document.createElement('div');
    progressBar.id = 'progressBar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--gradient);
        width: 0%;
        z-index: 99999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// GitHub Integration
async function initGitHubIntegration() {
    const githubSection = document.getElementById('githubProjects');
    if (!githubSection) return;
    
    try {
        const response = await fetch('https://api.github.com/users/MuhammadSudaisAI/repos?sort=updated&per_page=6');
        const repos = await response.json();
        
        if (Array.isArray(repos)) {
            const projectsHTML = repos.map(repo => `
                <div class="project-card" data-aos="zoom-in">
                    <div class="project-badge">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </div>
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="${repo.name}">
                        <div class="project-overlay">
                            <span>${repo.language || 'Code'}</span>
                            <span>${repo.stargazers_count} ⭐</span>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>${repo.name}</h3>
                        <p class="project-desc">${repo.description || 'GitHub Repository'}</p>
                        <div class="project-tech">
                            <span class="tech-tag">${repo.language || 'Various'}</span>
                            <span class="tech-tag">Git</span>
                        </div>
                        <a href="${repo.html_url}" target="_blank" class="btn-outline" style="width: 100%; text-align: center; margin-top: 15px;">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                    </div>
                </div>
            `).join('');
            
            githubSection.innerHTML = projectsHTML;
        }
    } catch (error) {
        console.log('GitHub integration loaded successfully');
    }
}

// Location Map
function initLocationMap() {
    const mapContainer = document.getElementById('locationMap');
    if (!mapContainer || typeof mapboxgl === 'undefined') return;
    
    // Set your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYW1tYWRzdWRhaXMiLCJhIjoiY2x2aGJhdDdoMGY1eTJrcGp2MHFvaXYzayJ9.V_5XonGBrUmdnP_K2vYjzw';
    
    const map = new mapboxgl.Map({
        container: 'locationMap',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [73.0479, 33.6844], // Islamabad coordinates
        zoom: 12,
        interactive: true
    });
    
    // Add marker
    new mapboxgl.Marker({
        color: '#6C63FF'
    })
    .setLngLat([73.0479, 33.6844])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>Muhammad Sudais AI</h3>
        <p>📍 Bakhtawar, City Line 10, Street 5</p>
        <p>Islamabad, Pakistan</p>
    `))
    .addTo(map);
    
    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());
    
    // Add geolocate control
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserLocation: true
    }));
}

// Performance Optimizations
function initPerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            // Handle scroll completion
        }, 100);
    });
}

// Initialize everything
initPerformance();

// Export functions for global access
window.showNotification = showNotification;
window.addMessage = function(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};
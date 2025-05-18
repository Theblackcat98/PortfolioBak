// Personal projects data
const apps = [
    {
        name: 'Color Palette Generator',
        description: 'Generate, lock, favorite, and save beautiful color palettes.',
        icon: 'palette',
        color: '#db504a',
        url: './ColorPicker/build/index.html'
    },
    {
        name: 'Portfolio',
        description: 'My personal portfolio website',
        url: 'https://yourportfolio.com',
        icon: 'user-tie',
        color: 'var(--bittersweet)'
    },
    {
        name: 'Task Manager',
        description: 'A productivity app for managing tasks',
        url: 'https://taskmanager.yourdomain.com',
        icon: 'tasks',
        color: 'var(--jasper)'
    },
    {
        name: 'Weather App',
        description: 'Real-time weather forecasts',
        url: 'https://weather.yourdomain.com',
        icon: 'cloud-sun',
        color: 'var(--cool-gray)'
    },
    {
        name: 'Recipe Finder',
        description: 'Discover new recipes and ingredients',
        url: 'https://recipes.yourdomain.com',
        icon: 'utensils',
        color: 'var(--sunset)'
    },
    {
        name: 'Budget Tracker',
        description: 'Manage your personal finances',
        url: 'https://budget.yourdomain.com',
        icon: 'wallet',
        color: 'var(--paynes-gray)'
    },
    {
        name: 'Fitness App',
        description: 'Track your workouts and progress',
        url: 'https://fitness.yourdomain.com',
        icon: 'dumbbell',
        color: 'var(--bittersweet)'
    },
    {
        name: 'Book Club',
        description: 'Discover and discuss books',
        url: 'https://bookclub.yourdomain.com',
        icon: 'book-open',
        color: 'var(--jasper)'
    },
    {
        name: 'Travel Journal',
        description: 'Document your travel adventures',
        url: 'https://travel.yourdomain.com',
        icon: 'passport',
        color: 'var(--cool-gray)'
    },
    {
        name: 'Code Snippets',
        description: 'Collection of useful code examples',
        url: 'https://snippets.yourdomain.com',
        icon: 'code',
        color: 'var(--sunset)'
    },
    {
        name: 'Design System',
        description: 'UI components and guidelines',
        url: 'https://design.yourdomain.com',
        icon: 'palette',
        color: 'var(--paynes-gray)'
    }
];

// Function to create app cards
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `
        <div class="app-icon" style="background-color: ${app.color}">
            <i class="fas fa-${app.icon}"></i>
        </div>
        <div class="app-info">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        // Open local html files in the same tab to avoid popup blockers
        if (app.url.endsWith('.html') || app.url.startsWith('./') || app.url.startsWith('../')) {
            window.location.href = app.url;
        } else {
            window.open(app.url, '_blank');
        }
    });
    
    return card;
}

// Function to initialize the dashboard
function initDashboard() {
    const appGrid = document.querySelector('.app-grid');
    
    // Clear any existing content
    appGrid.innerHTML = '';
    
    // Add app cards to the grid
    apps.forEach(app => {
        appGrid.appendChild(createAppCard(app));
    });
    
    // Add search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.app-card');
        
        cards.forEach((card, index) => {
            const app = apps[index];
            const matches = app.name.toLowerCase().includes(searchTerm) || 
                          app.description.toLowerCase().includes(searchTerm);
            card.style.display = matches ? 'block' : 'none';
        });
    });
}

// Initialize the dashboard when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);

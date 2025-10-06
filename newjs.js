        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modalClose = document.getElementById('modalClose');

        const modalContent = {
            hero: {
                title: 'Welcome to MovieClub',
                content: `
                    <p>MovieClub is your ultimate destination for discovering and organizing movies and TV shows. Built with modern web technologies and powered by IMDB's comprehensive database.</p>
                    <p><strong>What makes us special:</strong></p>
                    <ul>
                        <li>Real-time access to millions of movies and TV shows</li>
                        <li>Personalized recommendations based on your preferences</li>
                        <li>Community-driven reviews and ratings</li>
                        <li>Beautiful, responsive interface that works everywhere</li>
                        <li>Regular updates with new features</li>
                    </ul>
                    <p>Join our growing community of movie enthusiasts and never miss a great film again!</p>
                `
            },
            imdb: {
                title: 'IMDB Integration',
                content: `
                    <p>Direct integration with IMDB's extensive database gives you access to:</p>
                    <ul>
                        <li><strong>Comprehensive Data:</strong> Detailed information about millions of titles including cast, crew, plot summaries, and release dates</li>
                        <li><strong>Real-time Updates:</strong> Stay current with the latest releases and updates from the entertainment industry</li>
                        <li><strong>Accurate Ratings:</strong> Access official IMDB ratings and user scores</li>
                        <li><strong>Rich Metadata:</strong> Genres, runtime, language, country, and much more</li>
                        <li><strong>Trailers & Media:</strong> Watch trailers and view promotional materials</li>
                    </ul>
                    <p>All the data you need, directly from the world's most popular movie database.</p>
                `
            },
            favorites: {
                title: 'Personal Favorites',
                content: `
                    <p>Create and manage your personalized collection of movies and TV shows:</p>
                    <ul>
                        <li><strong>Quick Access:</strong> Add titles to your favorites with a single click</li>
                        <li><strong>Custom Lists:</strong> Organize your collection into custom categories</li>
                        <li><strong>Watchlist:</strong> Keep track of what you want to watch next</li>
                        <li><strong>Watched History:</strong> Record what you've already seen</li>
                        <li><strong>Share Collections:</strong> Share your favorite lists with friends</li>
                        <li><strong>Privacy Controls:</strong> Choose what's public and what stays private</li>
                    </ul>
                    <p>Your personal movie library, always at your fingertips.</p>
                `
            },
            search: {
                title: 'Smart Search',
                content: `
                    <p>Find exactly what you're looking for with our advanced search system:</p>
                    <ul>
                        <li><strong>Intelligent Autocomplete:</strong> Get suggestions as you type</li>
                        <li><strong>Advanced Filters:</strong> Search by genre, year, rating, language, and more</li>
                        <li><strong>Quick Results:</strong> Lightning-fast search powered by optimized algorithms</li>
                        <li><strong>Fuzzy Matching:</strong> Find results even with partial or misspelled queries</li>
                        <li><strong>Recent Searches:</strong> Quick access to your search history</li>
                        <li><strong>Popular Searches:</strong> Discover trending titles</li>
                    </ul>
                    <p>Finding your next favorite movie has never been easier.</p>
                `
            },
            reviews: {
                title: 'Community Reviews',
                content: `
                    <p>Join a vibrant community of movie lovers sharing their thoughts and opinions:</p>
                    <ul>
                        <li><strong>Write Reviews:</strong> Share your detailed thoughts on any title</li>
                        <li><strong>Read Perspectives:</strong> Discover what others think before watching</li>
                        <li><strong>Helpful Voting:</strong> Mark reviews as helpful to guide others</li>
                        <li><strong>Spoiler Control:</strong> Hide or reveal spoilers at your preference</li>
                        <li><strong>Follow Reviewers:</strong> Get updates from your favorite critics</li>
                        <li><strong>Discussion Forums:</strong> Engage in deeper conversations about films</li>
                    </ul>
                    <p>Connect with fellow enthusiasts and enrich your viewing experience.</p>
                `
            },
            rating: {
                title: 'Rating System',
                content: `
                    <p>Express your opinion and help others discover great content:</p>
                    <ul>
                        <li><strong>Simple Rating:</strong> Rate titles on a scale of 1-10</li>
                        <li><strong>Detailed Scoring:</strong> Rate different aspects like plot, acting, and cinematography</li>
                        <li><strong>Rating History:</strong> Track your ratings over time</li>
                        <li><strong>Personalized Stats:</strong> See your rating trends and preferences</li>
                        <li><strong>Compare Opinions:</strong> See how your ratings compare to the community</li>
                        <li><strong>Rating Export:</strong> Download your complete rating history</li>
                    </ul>
                    <p>Your ratings help build a better recommendation system for everyone.</p>
                `
            },
            responsive: {
                title: 'Responsive Design',
                content: `
                    <p>Enjoy a seamless experience on any device, anywhere:</p>
                    <ul>
                        <li><strong>Mobile First:</strong> Optimized for smartphones and tablets</li>
                        <li><strong>Desktop Power:</strong> Take advantage of larger screens with enhanced layouts</li>
                        <li><strong>Touch Optimized:</strong> Smooth interactions designed for touch interfaces</li>
                        <li><strong>Fast Loading:</strong> Optimized performance on all connection speeds</li>
                        <li><strong>Offline Support:</strong> Access your favorites even without internet</li>
                        <li><strong>Cross-Browser:</strong> Works perfectly on Chrome, Firefox, Safari, and Edge</li>
                    </ul>
                    <p>Your movie database travels with you, adapting to however you want to use it.</p>
                `
            }
        };

        function openModal(type) {
            const content = modalContent[type];
            if (content) {
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                modal.focus();
            }
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });


        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            const expanded = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', expanded);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {

                if (!link.classList.contains('dropdown-toggle')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        document.querySelectorAll('.dropdown-item .dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = toggle.closest('.nav-item');
                    parent.classList.toggle('active');
                    const expanded = parent.classList.contains('active');
                    toggle.setAttribute('aria-expanded', expanded);
                }
            });
        });


        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        const bodyEl = document.body;

        const savedTheme = localStorage.getItem('movieclub_theme');
        const initialTheme = savedTheme || bodyEl.getAttribute('data-theme') || 'dark';
        bodyEl.setAttribute('data-theme', initialTheme);
        updateThemeButton(initialTheme);

        themeToggle.addEventListener('click', () => {
            const theme = bodyEl.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            bodyEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('movieclub_theme', newTheme);
            updateThemeButton(newTheme);
        });

        function updateThemeButton(theme) {
            if (theme === 'dark') {
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
                themeToggle.setAttribute('aria-pressed', 'false');
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark';
                themeToggle.setAttribute('aria-pressed', 'true');
            }
        }


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 90;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                }
            });
        });


        document.addEventListener('focus', function(event) {
            if (modal.classList.contains('active') && !modal.contains(event.target)) {
                event.stopPropagation();
                modal.focus();
            }
        }, true);
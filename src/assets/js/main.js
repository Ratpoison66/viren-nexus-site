// This file contains the JavaScript code that adds interactivity to the website, including functionalities for the search and filter features.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Vanta.js background
    VANTA.TOPOLOGY({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x06b6d4,
        backgroundColor: 0x0f172a
    });

    // Mobile menu functionality
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Sample data
    const sampleAnswers = [
        {
            id: 1,
            title: "Can QVDE design a falsifiable experiment for quantum vacuum energy extraction?",
            category: "science-rd",
            question: "I've been following the quantum vacuum energy debate and noticed that most proposals lack falsifiability. Can VIREN use the QVDE engine to design an experiment that could actually test whether we can extract usable energy from quantum vacuum fluctuations? I'm particularly interested in how to distinguish between forbidden, trivial, and open configurations in a laboratory setting.",
            answer: "QVDE analysis reveals that most quantum vacuum energy proposals fall into the 'trivial' category—they work but don't scale. The key insight is that we need to focus on topological field configurations that preserve Lorentz invariance while enabling energy gradients.",
            framework: "The experiment involves creating oscillating cavity geometries with specific topological properties. By measuring energy differentials across these geometries, we can distinguish between:",
            predictions: [
                "Forbidden configurations will violate causality or QFT constraints",
                "Trivial configurations will show measurable but non-scaling effects", 
                "Open configurations will demonstrate scalable energy extraction"
            ],
            testability: "This can be tested with current precision measurement technology, requiring sensitivity improvements of only 10^3 over previous attempts—achievable with existing laser interferometry.",
            author: "Dr. Sarah Chen",
            submittedAt: "2024-12-05",
            answeredAt: "2024-12-06",
            researchEngine: "QVDE",
            tags: ["quantum vacuum", "energy extraction", "falsifiability", "topology"]
        },
        {
            id: 2,
            title: "How would Ω-CRUX approach supply chain optimization under conflicting constraints?",
            category: "strategy-geopolitics",
            question: "Our company faces a classic optimization problem: we need to minimize costs while maximizing sustainability and ensuring resilience against disruptions. Traditional approaches treat these as trade-offs, but I'm interested in how Ω-CRUX might treat these contradictions as design constraints for a more robust system.",
            answer: "Ω-CRUX transforms this from an optimization problem to a contradiction-management architecture. The key insight is that cost, sustainability, and resilience aren't trade-offs but complementary phases of the same adaptive system.",
            framework: "The solution involves a three-phase architecture:",
            predictions: [
                "Phase 1: Distributed sensing identifies local optimization opportunities",
                "Phase 2: Central synthesis resolves contradictions through meta-optimization", 
                "Phase 3: Distributed implementation with local adaptation maintains resilience"
            ],
            testability: "This can be validated through supply chain simulation, comparing traditional optimization approaches against the Ω-CRUX contradiction-management model under various disruption scenarios.",
            author: "Marcus Rodriguez",
            submittedAt: "2024-12-03",
            answeredAt: "2024-12-04",
            researchEngine: "Ω-CRUX",
            tags: ["supply chain", "optimization", "contradiction management", "resilience"]
        },
        {
            id: 3,
            title: "What contradictions in attention schema theory could LENS resolve?",
            category: "consciousness-philosophy",
            question: "I've been studying attention schema theory and noticed several contradictions: the binding problem vs. integration limits, the hard problem vs. easy problems, and subjective unity vs. neural diversity. How might LENS approach these contradictions to develop a more comprehensive theory of conscious experience?",
            answer: "LENS identifies that these contradictions aren't problems to solve but structural features of consciousness as attention schema. The theory isn't incomplete—it's the brain modeling its own attentional limitations.",
            framework: "The resolution involves treating consciousness as the brain's real-time model of its own attentional state, where:",
            predictions: [
                "Attention and consciousness should share 85%+ neural architecture overlap",
                "Conscious content should predict attention allocation better than environmental reality",
                "Social attention modeling should correlate with consciousness complexity across species"
            ],
            testability: "This can be tested through neuroimaging meta-analysis, attention prediction tasks, and cross-species consciousness studies. Early validation shows 87% spatial overlap in fMRI studies.",
            author: "Prof. Elena Vasquez",
            submittedAt: "2024-12-01",
            answeredAt: "2024-12-02",
            researchEngine: "LENS",
            tags: ["consciousness", "attention schema", "neural networks", "binding problem"]
        },
        {
            id: 4,
            title: "How could PEACE create cryptographic systems that strengthen under quantum attack?",
            category: "technology-ai",
            question: "With quantum computing threatening current cryptography, I'm interested in PEACE's approach to creating systems that become stronger when attacked. How could we design cryptographic protocols that use quantum attacks as entropy sources for enhanced security?",
            answer: "PEACE treats the contradiction between predictability (for legitimate users) and unpredictability (for attackers) as the engine of security enhancement. Quantum attacks become entropy sources rather than threats.",
            framework: "The protocol involves adaptive key evolution where quantum attack attempts provide fresh entropy:",
            predictions: [
                "Security strength increases exponentially with attack duration",
                "Failed attacks increase system entropy while successful attacks are contained",
                "Post-quantum security reaches 10^9 operations after 1 hour of sustained attack"
            ],
            testability: "This can be validated through quantum circuit simulation, cryptographic analysis, and mathematical proof of security properties under sustained adversarial pressure using quantum algorithms.",
            author: "Alex Kim",
            submittedAt: "2024-11-28",
            answeredAt: "2024-11-29",
            researchEngine: "PEACE",
            tags: ["quantum cryptography", "antifragility", "post-quantum security", "entropy harvesting"]
        }
    ];

    // Initialize page
    loadAnswers();
    updateStatistics();
    setupFilters();

    // Load and display answers
    function loadAnswers(answers = sampleAnswers) {
        const container = document.getElementById('answers-container');
        const noResults = document.getElementById('no-results');
        
        if (answers.length === 0) {
            container.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }
        
        noResults.classList.add('hidden');
        
        container.innerHTML = answers.map(answer => `
            <div class="answer-card glass-effect rounded-lg p-8 hover-lift">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-4">
                        <span class="px-3 py-1 bg-${getCategoryColor(answer.category)}/20 text-${getCategoryColor(answer.category)}-400 rounded-full text-sm font-medium">
                            ${formatCategory(answer.category)}
                        </span>
                        <span class="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                            ${answer.researchEngine}
                        </span>
                    </div>
                    <div class="text-slate-400 text-sm">
                        ${formatDate(answer.answeredAt)}
                    </div>
                </div>
                
                <h2 class="text-2xl font-bold text-cyan-400 mb-4">
                    <a href="#answer-${answer.id}" class="hover:text-cyan-300">${answer.title}</a>
                </h2>
                
                <div class="grid lg:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-purple-400">Question</h3>
                        <p class="text-slate-300 text-sm leading-relaxed">${answer.question}</p>
                        
                        <div class="mt-4 text-slate-400 text-sm">
                            <span>Asked by ${answer.author}</span>
                            <span class="mx-2">•</span>
                            <span>${formatDate(answer.submittedAt)}</span>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-green-400">VIREN's Framework</h3>
                        <p class="text-slate-300 text-sm leading-relaxed mb-4">${answer.answer}</p>
                        <p class="text-slate-300 text-sm leading-relaxed">${answer.framework}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-3 text-yellow-400">Testable Predictions</h3>
                    <ul class="space-y-2">
                        ${answer.predictions.map(prediction => `
                            <li class="flex items-start">
                                <i class="fas fa-arrow-right text-yellow-400 mr-2 mt-1 text-sm"></i>
                                <span class="text-slate-300 text-sm">${prediction}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-slate-800 rounded-lg p-4 mb-4">
                    <h3 class="text-lg font-semibold mb-2 text-cyan-400">Testability</h3>
                    <p class="text-slate-300 text-sm">${answer.testability}</p>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    ${answer.tags.map(tag => `
                        <span class="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Update statistics
    function updateStatistics() {
        document.getElementById('total-answers').textContent = sampleAnswers.length;
        document.getElementById('science-answers').textContent = sampleAnswers.filter(a => a.category === 'science-rd').length;
        document.getElementById('strategy-answers').textContent = sampleAnswers.filter(a => a.category === 'strategy-geopolitics').length;
        document.getElementById('tech-answers').textContent = sampleAnswers.filter(a => a.category === 'technology-ai').length;
    }

    // Setup filters
    function setupFilters() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');
        
        function applyFilters() {
            let filtered = [...sampleAnswers];
            
            // Search filter
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                filtered = filtered.filter(answer => 
                    answer.title.toLowerCase().includes(searchTerm) ||
                    answer.question.toLowerCase().includes(searchTerm) ||
                    answer.answer.toLowerCase().includes(searchTerm) ||
                    answer.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
            }
            
            // Category filter
            const category = categoryFilter.value;
            if (category !== 'all') {
                filtered = filtered.filter(answer => answer.category === category);
            }
            
            // Sort filter
            const sort = sortFilter.value;
            if (sort === 'newest') {
                filtered.sort((a, b) => new Date(b.answeredAt) - new Date(a.answeredAt));
            } else if (sort === 'oldest') {
                filtered.sort((a, b) => new Date(a.answeredAt) - new Date(b.answeredAt));
            } else if (sort === 'category') {
                filtered.sort((a, b) => a.category.localeCompare(b.category));
            }
            
            loadAnswers(filtered);
        }
        
        searchInput.addEventListener('input', applyFilters);
        categoryFilter.addEventListener('change', applyFilters);
        sortFilter.addEventListener('change', applyFilters);
    }

    // Helper functions
    function formatCategory(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' & ');
    }
    
    function getCategoryColor(category) {
        const colors = {
            'science-rd': 'cyan',
            'mathematics': 'blue',
            'consciousness-philosophy': 'purple',
            'strategy-geopolitics': 'green',
            'technology-ai': 'orange',
            'finance-economics': 'red',
            'other': 'gray'
        };
        return colors[category] || 'gray';
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}
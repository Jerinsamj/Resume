document.addEventListener('DOMContentLoaded', function () {
    // Get current date
    document.getElementById('date').textContent = new Date().toLocaleString();

    // Greeting message
    function getGreeting() {
        let hour = new Date().getHours();
        if (hour < 12) return "Good Morning, I'm Jerin!";
        if (hour < 18) return "Good Afternoon, I'm Jerin!";
        return "Good Evening, I'm Jerin!";
    }
    document.getElementById("greeting").textContent = getGreeting();

    // Dark mode toggle
    window.toggleDarkMode = function () { // Made it global
        document.body.classList.toggle("dark-mode");
    };

    // Card details toggle
    window.toggleCardDetails = function (cardElement) {  // Made it global
        cardElement.classList.toggle("expanded");
        const icon = cardElement.querySelector(".expand-btn i");
        if (cardElement.classList.contains("expanded")) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    };

    // Create and animate maple leaves
    function createMapleLeaves() {
        for (let i = 0; i < 10; i++) { // Adjust number of leaves
            const mapleLeaf = document.createElement('div');
            mapleLeaf.classList.add('maple-leaf');
            mapleLeaf.style.left = `${Math.random() * 100}vw`; // Random horizontal start
            mapleLeaf.style.top = `${Math.random() * 100}vh`; // Random vertical start
            mapleLeaf.style.animationDelay = `${Math.random() * 5}s`; // Random delay
            document.body.appendChild(mapleLeaf);
        }
    }
    createMapleLeaves();

    // Fetch JSON test results
    fetch('./public/test-report/mochawesome.json')
        .then(response => {
            if (!response.ok) throw new Error("Test results file not found");
            return response.json();
        })
        .then(data => {
            document.getElementById('total-tests').textContent = data.stats.tests;
            document.getElementById('passed-tests').textContent = data.stats.passes;
            document.getElementById('failed-tests').textContent = data.stats.failures;
            document.getElementById('pending-tests').textContent = data.stats.pending;
            document.getElementById('loading-message').style.display = "none"; // Hide loading message
        })
        .catch(error => {
            console.error('Error loading test results:', error);
            document.getElementById('loading-message').textContent = "Test results unavailable.";
        });

    // Chatbot functionality
    let knowledgeBase = [];
    const chatbotStorageKey = 'chatbotKnowledgeBase';

    // Load knowledge base from localStorage
    if (localStorage.getItem(chatbotStorageKey)) {
        try {
            knowledgeBase = JSON.parse(localStorage.getItem(chatbotStorageKey));
        } catch (error) {
            console.error('Error parsing stored knowledge base:', error);
            knowledgeBase = [];
        }
    } else {
        // Fetch initial knowledge base from JSON file
        fetch('src/questions.json')
            .then(response => response.json())
            .then(data => {
                knowledgeBase = data.questions;
                localStorage.setItem(chatbotStorageKey, JSON.stringify(knowledgeBase)); //save to local storage
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    }

    const chatbotToggle = document.getElementById('me-bot-btn');
    const chatbotPopup = document.getElementById('me-bot-popup');
    const chatbotClose = document.getElementById('me-bot-close');
    const chatbox = document.getElementById('me-chatbox');
    const userInputField = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    // Open chatbot on button click
    chatbotToggle.addEventListener('click', () => {
        chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
    });

    // Close chatbot on close button click
    chatbotClose.addEventListener('click', () => {
        chatbotPopup.style.display = 'none';
    });

    // Adjust popup position on scroll
    window.addEventListener('scroll', () => {
        const rect = chatbotToggle.getBoundingClientRect();
        chatbotPopup.style.bottom = `${window.innerHeight - rect.bottom + 10}px`;
        chatbotPopup.style.right = `${window.innerWidth - rect.right}px`;
    });

    // Send User Input
    sendButton.addEventListener('click', sendQuery);
    userInputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendQuery();
        }
    });

    function sendQuery() {
        const userInput = userInputField.value.trim().toLowerCase();
        if (userInput === '') return;

        chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

        const response = getBestMatch(userInput);

        chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

        chatbox.scrollTop = chatbox.scrollHeight;

        userInputField.value = '';
    }

    function getBestMatch(query) {
        let bestMatch = '';
        let highestMatchScore = 0;

        knowledgeBase.forEach(item => {
            const matchScore = calculateMatchScore(query, item.keywords);
            if (matchScore > highestMatchScore) {
                highestMatchScore = matchScore;
                bestMatch = item.answer;
            }
        });

        if (highestMatchScore < 1) {
            bestMatch = "I'm sorry, I don't understand your question. Here are some keywords you can try: ";
            const availableKeywords = knowledgeBase.flatMap(item => item.keywords).slice(0, 5).join(', ');
            bestMatch += availableKeywords;
        }

        return bestMatch; // Ensure only one answer is returned
    }

    function calculateMatchScore(query, keywords) {
        let score = 0;

        keywords.forEach(keyword => {
            if (query.includes(keyword.toLowerCase())) {
                score += 2;
            }
        });

        keywords.forEach(keyword => {
            if (query.indexOf(keyword.toLowerCase()) !== -1) {
                score += 1;
            }
        });

        return score;
    }
});
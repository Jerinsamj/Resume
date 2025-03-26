/* script.js */
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



        let knowledgeBase = [];

        fetch('src/questions.json')
            .then(response => response.json())
            .then(data => {
                knowledgeBase = data.questions;
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });

        // Function to send user query
        function sendQuery() {
            const userInput = document.getElementById("user-input").value.trim().toLowerCase();
            if (userInput === '') return;

            // Show the user's message in the chatbox
            document.getElementById("chatbox").innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

            // Get the best matching response from the knowledge base
            const response = getBestMatch(userInput);

            // Show the chatbot's response in the chatbox
            document.getElementById("chatbox").innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

            // Scroll to the bottom of the chatbox to show the latest messages
            document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;

            // Clear the input field
            document.getElementById("user-input").value = '';
        }

        // Function to find the best matching response
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

            if (bestMatch === '') {
                return "I'm sorry, I don't understand your question.";
            }

            return bestMatch;
        }

        // Function to calculate the match score based on keywords
        function calculateMatchScore(query, keywords) {
            let score = 0;

            // Exact matches: increase score significantly for exact matches
            keywords.forEach(keyword => {
                if (query.includes(keyword.toLowerCase())) {
                    score += 2; // Exact match score
                }
            });

            // Partial matches: increase score slightly for partial keyword matches
            keywords.forEach(keyword => {
                if (query.indexOf(keyword.toLowerCase()) !== -1) {
                    score += 1; // Partial match score
                }
            });

            // Return the total score
            return score;
        }
});
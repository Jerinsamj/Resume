document.addEventListener('DOMContentLoaded', function () {
    // Get current date
    document.getElementById('date').textContent = new Date().toLocaleString();

    // Greeting message
    function getGreeting() {
        const name = localStorage.getItem('userName'); // Retrieve the user's name from localStorage
        let hour = new Date().getHours();
        if (hour < 12) return name ? `Good Morning, ${name}, I'm Jerin!` : "Good Morning, I'm Jerin!";
        if (hour < 18) return name ? `Good Afternoon, ${name}, I'm Jerin!` : "Good Afternoon, I'm Jerin!";
        return name ? `Good Evening, ${name}, I'm Jerin!` : "Good Evening, I'm Jerin!";
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
        let closestQuestion = '';

        knowledgeBase.forEach(item => {
            const matchScore = calculateMatchScore(query, item.keywords);
            if (matchScore > highestMatchScore) {
                highestMatchScore = matchScore;
                bestMatch = item.answer;
                closestQuestion = item.question;
            }
        });

        if (highestMatchScore < 1) {
            bestMatch = "I'm sorry, I don't understand your question. Here are some questions you can try: ";
            const availableQuestions = knowledgeBase
                .map(item => item.question)
                .sort(() => Math.random() - 0.5) // Randomize the order
                .slice(0, 5) // Limit to 5 questions
                .join(', ');
            bestMatch += availableQuestions;
        } else if (highestMatchScore > 1) {
            bestMatch = `Did you mean: "${closestQuestion}"? ${bestMatch}`;
        }

        return bestMatch; // Ensure only one answer is returned
    }

    function calculateMatchScore(query, keywords) {
        let score = 0;
        const queryWords = query.split(/\s+/); // Split query into words

        keywords.forEach(keyword => {
            const lowerKeyword = keyword.toLowerCase();
            queryWords.forEach(word => {
                if (word === lowerKeyword) {
                    score += 2; // Exact match
                } else if (word.includes(lowerKeyword)) {
                    score += 1; // Partial match
                }
            });
        });

        return score;
    }

    // Function to toggle the test summary container (minimize and expand)
    function toggleTestSummary() {
        const testSummaryContainer = document.querySelector('.test-summary-container');
        const testSummary = document.querySelector('.test-summary');
        const minimizeBtn = document.querySelector('.close-btn');

        if (testSummaryContainer.classList.contains('minimized')) {
            // If minimized, expand the test summary container
            testSummaryContainer.classList.remove('minimized');
            minimizeBtn.textContent = '-'; // Reset minimize button to "-"
            testSummaryContainer.style.display = 'flex'; // Restore display of the container
        } else {
            // If expanded, minimize the test summary container
            testSummaryContainer.classList.add('minimized');
            minimizeBtn.textContent = '+'; // Change the button to a plus
        }
    }

    // Minimize and maximize test summary
    document.querySelector('.test-summary-container .close-btn').addEventListener('click', () => {
        toggleTestSummary();
    });


    window.toggleTestSummary = toggleTestSummary;

    // Ensure proper initialization of test summary visibility
    function initializeTestSummary() {
        const summaryContainer = document.querySelector('.test-summary-container');
        if (window.innerWidth < 768) {
            summaryContainer.style.display = 'none';
        } else {
            summaryContainer.style.display = 'flex';
        }
    }

    // Call initializeTestSummary on window resize
    window.addEventListener('resize', initializeTestSummary);
    initializeTestSummary(); // Initial call

    // Function to open the dialog
    window.openDialog = function () {
        document.getElementById('dialog').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    };

    // Function to close the dialog
    window.closeDialog = function () {
        document.getElementById('dialog').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    };

    // Function to send the email
    window.sendEmail = function () {
        var name = document.getElementById('name').value;
        var company = document.getElementById('company').value || "N/A";
        var date = document.getElementById('date').value || "N/A";
        var time = document.getElementById('time').value || "N/A";

        if (name) {
            var subject = encodeURIComponent("Interview Confirmation");
            var body = encodeURIComponent(`Hi Jerin,

My name is ${name}, and I am writing to confirm my interview with ${company}. I am available on ${date} at ${time} as scheduled.

Please let me know if there is any change on the date. I look forward to speaking with you.

Thank you.

Best regards,
${name}`);
            var mailtoLink = `mailto:jerinsamjames1998@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            // Store the user's name in localStorage
            localStorage.setItem('userName', name);

            closeDialog();
            document.getElementById("greeting").textContent = getGreeting(); // Update the greeting
        } else {
            alert("Please enter your name.");
        }
    };
});
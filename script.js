document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');
    const optionsList = document.getElementById('options-list');
    const addOptionBtn = document.getElementById('add-option-btn');
    const updateWheelBtn = document.getElementById('update-wheel-btn');
    const winnerModal = document.getElementById('winnerModal');
    const winnerImage = document.getElementById('winnerImage');
    const winnerName = document.getElementById('winnerName');
    const spinAgainBtn = document.getElementById('spinAgainBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const winnerTitle = document.getElementById('winnerTitle');
    const winnerDescription = document.getElementById('winnerDescription');
    
    // --- Login Elements ---
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('loginModal');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const loginCancelBtn = document.getElementById('loginCancelBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');
    const optionsSection = document.querySelector('.options-section');
    const logoutBtn = document.getElementById('logout-btn');

    // --- State ---
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', '#f39c12', '#d35400', '#c0392b', '#2980b9'];

    const optionsData = [
        { id: Date.now(), text: '1', imageData: 'svg/1.png', title: 'Option 1', description: 'This is the first option.' },
        { id: Date.now() + 1, text: '2', imageData: 'svg/2.png', title: 'Option 2', description: 'This is the second option.' },
        { id: Date.now() + 2, text: '3', imageData: 'svg/3.png', title: 'Option 3', description: 'This is the third option.' },
        { id: Date.now() + 3, text: '4', imageData: 'svg/4.png', title: 'Option 4', description: 'This is the fourth option.' },
        { id: Date.now() + 4, text: '5', imageData: 'svg/5.png', title: 'Option 5', description: 'This is the fifth option.' },
        { id: Date.now() + 5, text: '6', imageData: 'svg/6.png', title: 'Option 6', description: 'This is the sixth option.' },
        { id: Date.now() + 6, text: '7', imageData: 'svg/7.png', title: 'Option 7', description: 'This is the seventh option.' },
        { id: Date.now() + 7, text: '8', imageData: 'svg/8.png', title: 'Option 8', description: 'This is the eighth option.' },
        { id: Date.now() + 8, text: '9', imageData: 'svg/9.png', title: 'Option 9', description: 'This is the ninth option.' },
        { id: Date.now() + 9, text: '10', imageData: 'svg/placeholder.png', title: 'Option 10', description: 'This is the tenth option.' },
        { id: Date.now() + 10, text: '11', imageData: 'svg/placeholder.png', title: 'Option 11', description: 'This is the eleventh option.' },
        { id: Date.now() + 11, text: '12', imageData: 'svg/placeholder.png', title: 'Option 12', description: 'This is the twelfth option.' },
        { id: Date.now() + 12, text: '13', imageData: 'svg/placeholder.png', title: 'Option 13', description: 'This is the thirteenth option.' },
        { id: Date.now() + 13, text: '14', imageData: 'svg/placeholder.png', title: 'Option 14', description: 'This is the fourteenth option.' },
        { id: Date.now() + 14, text: '15', imageData: 'svg/placeholder.png', title: 'Option 15', description: 'This is the fifteenth option.' },
        { id: Date.now() + 15, text: '16', imageData: 'svg/placeholder.png', title: 'Option 16', description: 'This is the sixteenth option.' },
    ];

    let currentRotation = 0;
    let isSpinning = false;

    // --- Functions ---

    const renderOptionsList = () => {
        optionsList.innerHTML = '';
        optionsData.forEach(option => {
            const item = document.createElement('div');
            item.className = 'option-item';
            item.dataset.id = option.id;

            const textInput = document.createElement('input');
            textInput.type = 'text';
            textInput.value = option.text;
            textInput.placeholder = 'Option text';

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';

            const fileLabel = document.createElement('label');
            fileLabel.className = 'file-upload-label';
            fileLabel.textContent = 'Choose Image';
            fileLabel.htmlFor = `file-${option.id}`;
            fileInput.id = `file-${option.id}`;

            const preview = document.createElement('img');
            if (option.imageData) {
                preview.src = option.imageData;
            } else {
                preview.style.display = 'none';
            }

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = option.title;
            titleInput.placeholder = 'Title (optional)';
            titleInput.style.width = '100%';
            titleInput.style.marginTop = '8px';

            const descriptionInput = document.createElement('textarea');
            descriptionInput.value = option.description;
            descriptionInput.placeholder = 'Description (optional)';
            descriptionInput.style.width = '100%';
            descriptionInput.style.height = '60px';
            descriptionInput.style.marginTop = '8px';
            descriptionInput.style.padding = '8px';
            descriptionInput.style.borderRadius = '3px';
            descriptionInput.style.border = '1px solid #ccc';
            descriptionInput.style.fontFamily = 'Arial, sans-serif';
            descriptionInput.style.fontSize = '0.9em';
            descriptionInput.style.resize = 'vertical';

            textInput.addEventListener('input', (e) => {
                const opt = optionsData.find(o => o.id === option.id);
                if (opt) opt.text = e.target.value;
            });

            titleInput.addEventListener('input', (e) => {
                const opt = optionsData.find(o => o.id === option.id);
                if (opt) opt.title = e.target.value;
            });

            descriptionInput.addEventListener('input', (e) => {
                const opt = optionsData.find(o => o.id === option.id);
                if (opt) opt.description = e.target.value;
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const opt = optionsData.find(o => o.id === option.id);
                        if (opt) {
                            opt.imageData = event.target.result;
                            preview.src = event.target.result;
                            preview.style.display = 'block';
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });

            removeBtn.addEventListener('click', () => {
                optionsData = optionsData.filter(o => o.id !== option.id);
                renderOptionsList();
            });

            item.appendChild(textInput);
            item.appendChild(titleInput);
            item.appendChild(descriptionInput);
            item.appendChild(fileLabel);
            item.appendChild(fileInput);
            item.appendChild(preview);
            item.appendChild(removeBtn);
            optionsList.appendChild(item);
        });
    };

    /**
     * Creates the visual wheel using SVG.
     */
    const createWheel = () => {
        wheel.innerHTML = ''; // Clear previous content
        const radius = 250;
        const centerX = 250;
        const centerY = 250;
        const anglePerSection = 360 / optionsData.length;

        if (optionsData.length < 2) {
            wheel.innerHTML = '<text x="250" y="250" text-anchor="middle" font-size="24" fill="#333">Add at least two options!</text>';
            return;
        }

        optionsData.forEach((option, index) => {
            const startAngle = index * anglePerSection - 90; // Start from the top
            const endAngle = startAngle + anglePerSection;

            const startAngleRad = (startAngle * Math.PI) / 180;
            const endAngleRad = (endAngle * Math.PI) / 180;

            const x1 = centerX + radius * Math.cos(startAngleRad);
            const y1 = centerY + radius * Math.sin(startAngleRad);
            const x2 = centerX + radius * Math.cos(endAngleRad);
            const y2 = centerY + radius * Math.sin(endAngleRad);

            const largeArcFlag = anglePerSection > 180 ? 1 : 0;

            // Create the slice path
            const pathData = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('fill', colors[index % colors.length]);
            path.setAttribute('stroke', '#fff');
            path.setAttribute('stroke-width', '2');
            wheel.appendChild(path);

            // Inside optionsData.forEach(...)
            if (option.imageData) {
                const imageAngle = (startAngle + endAngle) / 2;
                const imageAngleRad = (imageAngle * Math.PI) / 180;
                const imageRadius = radius * 0.75;
                const imageX = centerX + imageRadius * Math.cos(imageAngleRad);
                const imageY = centerY + imageRadius * Math.sin(imageAngleRad);

                // --- ADD THIS PART ---
                // Ensure <defs> exists
                let defs = wheel.querySelector('defs');
                if (!defs) {
                    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                    wheel.prepend(defs);
                }

                // Unique clipPath per image
                const clipId = `clip-img-${index}`;
                const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                clip.setAttribute('id', clipId);

                const clipCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                clipCircle.setAttribute('cx', imageX);
                clipCircle.setAttribute('cy', imageY);
                clipCircle.setAttribute('r', 30);
                clip.appendChild(clipCircle);
                defs.appendChild(clip);

                // Background circle (white with black border)
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', imageX);
                circle.setAttribute('cy', imageY);
                circle.setAttribute('r', 30);
                circle.setAttribute('fill', 'white');
                circle.setAttribute('stroke', 'black');
                circle.setAttribute('stroke-width', '2');
                wheel.appendChild(circle);

                // Image on top, clipped to circle
                const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                image.setAttribute('href', option.imageData);
                image.setAttribute('x', imageX - 30);
                image.setAttribute('y', imageY - 30);
                image.setAttribute('width', '60');
                image.setAttribute('height', '60');
                image.setAttribute('clip-path', `url(#${clipId})`);
                image.setAttribute('transform', `rotate(${imageAngle - 90 + 180} ${imageX} ${imageY})`);
                wheel.appendChild(image);
            }

            // Add text
            const textAngle = (startAngle + endAngle) / 2;
            const textAngleRad = (textAngle * Math.PI) / 180;
            const textRadius = radius * 0.35; // Position text 35% from center
            const textX = centerX + textRadius * Math.cos(textAngleRad);
            const textY = centerY + textRadius * Math.sin(textAngleRad);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '18');
            text.setAttribute('font-weight', 'bold');
            text.setAttribute('text-shadow', '1px 1px 2px rgba(0,0,0,0.7)');
            text.textContent = option.text;
            wheel.appendChild(text);
        });
    };

    const spin = () => {
        if (isSpinning || optionsData.length < 2) return;

        isSpinning = true;
        spinButton.disabled = true;
        resultDiv.textContent = '';

        const anglePerSection = 360 / optionsData.length;

        const fullRotations = Math.floor(Math.random() * 4) + 5;
        const finalAngle = Math.floor(Math.random() * 360);
        const totalRotation = currentRotation + (fullRotations * 360) + finalAngle;

        wheel.style.transform = `rotate(${totalRotation}deg)`;
        currentRotation = totalRotation;

        setTimeout(() => {
            const normalizedAngle = totalRotation % 360;
            const winningAngle = (360 - normalizedAngle + 0) % 360;
            const winningIndex = Math.floor(winningAngle / anglePerSection);

            const winner = optionsData[winningIndex];
            resultDiv.innerHTML = `The winner is: <strong>${winner.text}</strong>`;

            // Show winner in modal
            winnerName.textContent = winner.text;
            winnerTitle.textContent = winner.title || 'No title provided';
            winnerDescription.textContent = winner.description || 'No description provided';
            if (winner.imageData) {
                winnerImage.src = winner.imageData;
                winnerImage.style.display = 'block';
            } else {
                winnerImage.style.display = 'none';
            }
            winnerModal.classList.add('show');

            isSpinning = false;
            spinButton.disabled = false;
        }, 5000);
    };

    // --- Event Listeners ---
    spinButton.addEventListener('click', spin);
    addOptionBtn.addEventListener('click', () => {
        const newOption = { id: Date.now(), text: 'New Option', imageData: null, title: '', description: '' };
        optionsData.push(newOption);
        renderOptionsList();
    });
    updateWheelBtn.addEventListener('click', createWheel);

    closeModalBtn.addEventListener('click', () => {
        winnerModal.classList.remove('show');
    });

    spinAgainBtn.addEventListener('click', () => {
        winnerModal.classList.remove('show');
        spin();
    });

    // Close modal when clicking outside of it
    winnerModal.addEventListener('click', (e) => {
        if (e.target === winnerModal) {
            winnerModal.classList.remove('show');
        }
    });

    // --- Login Event Listeners ---
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('show');
        usernameInput.value = '';
        passwordInput.value = '';
        loginError.classList.remove('show');
    });

    loginCancelBtn.addEventListener('click', () => {
        loginModal.classList.remove('show');
        loginError.classList.remove('show');
    });

    loginSubmitBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'admin' && password === 'admin') {
            loginModal.classList.remove('show');
            optionsSection.classList.add('visible');
            loginBtn.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'inline-block';
            loginError.classList.remove('show');
        } else {
            loginError.classList.add('show');
        }
    });

    // Close login modal when clicking outside
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });

    // Allow Enter key to submit login
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginSubmitBtn.click();
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginSubmitBtn.click();
        }
    });

    // --- Logout Handler ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Hide admin-only section and show login button again
            optionsSection.classList.remove('visible');
            loginBtn.style.display = '';
            logoutBtn.style.display = 'none';
        });
    }

    // --- Initial Setup ---
    renderOptionsList();
    createWheel();
});

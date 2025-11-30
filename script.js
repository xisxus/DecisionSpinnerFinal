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

    const optionsData22 = [
        { id: Date.now(), text: '1', imageData: 'svg/other/kegal/ss (1).svg', title: 'superman sex pose', description: 'This is the first option.' },
        { id: Date.now() + 1, text: '2', imageData: 'svg/other/kegal/ss (2).svg', title: 'basket sex pose', description: 'This is the second option.' },
        { id: Date.now() + 2, text: '3', imageData: 'svg/other/kegal/ss (3).svg', title: 'workout sex pose', description: 'This is the third option.' },
        { id: Date.now() + 3, text: '4', imageData: 'svg/other/kegal/ss (4).svg', title: 'ecstasy sex pose', description: 'This is the fourth option.' },
        { id: Date.now() + 4, text: '5', imageData: 'svg/other/kegal/ss (5).svg', title: 'narcissus sex pose', description: 'This is the fifth option.' },
        { id: Date.now() + 5, text: '6', imageData: 'svg/other/kegal/ss (6).svg', title: 'prison guard sex pose', description: 'This is the sixth option.' },
        { id: Date.now() + 6, text: '7', imageData: 'svg/other/kegal/ss (7).svg', title: 'caramel sex pose', description: 'This is the seventh option.' },
        { id: Date.now() + 7, text: '8', imageData: 'svg/other/kegal/ss (8).svg', title: 'frog sex pose', description: 'This is the eighth option.' },
        { id: Date.now() + 8, text: '9', imageData: 'svg/other/kegal/ss (9).svg', title: 'yan_yang sex pose', description: 'This is the ninth option.' },
        { id: Date.now() + 9, text: '10', imageData: 'svg/other/kegal/ss (10).svg', title: 'aquarius sex pose', description: 'This is the tenth option.' },
        { id: Date.now() + 10, text: '11', imageData: 'svg/other/kegal/ss (11).svg', title: 'barbell sex pose', description: 'This is the eleventh option.' },
        { id: Date.now() + 11, text: '12', imageData: 'svg/other/kegal/ss (12).svg', title: 'barbell sex pose', description: 'This is the twelfth option.' },
        { id: Date.now() + 12, text: '13', imageData: 'svg/other/kegal/ss (13).svg', title: 'doggy sex pose', description: 'This is the thirteenth option.' },
        { id: Date.now() + 13, text: '14', imageData: 'svg/other/kegal/ss (14).svg', title: 'Option 14', description: 'This is the fourteenth option.' },
        { id: Date.now() + 14, text: '15', imageData: 'svg/other/kegal/ss (15).svg', title: 'bud sex pose', description: 'This is the fifteenth option.' },
        { id: Date.now() + 15, text: '16', imageData: 'svg/other/kegal/ss (16).svg', title: 'cello sex pose', description: 'This is the sixteenth option.' },
    ];

const optionsData33 = [
    { id: Date.now(), text: '1', imageData: 'svg/other/kegal/ss (1).svg', title: 'superman sex pose', description: 'This pose involves dynamic positioning, creating a powerful stance reminiscent of Superman. It combines strength and flexibility, offering an intense experience.' },
    { id: Date.now() + 1, text: '2', imageData: 'svg/other/kegal/ss (2).svg', title: 'basket sex pose', description: 'This pose is inspired by the flexibility and balance needed in basketball. It involves creative leg positioning and offers a unique angle for intimate moments.' },
    { id: Date.now() + 2, text: '3', imageData: 'svg/other/kegal/ss (3).svg', title: 'workout sex pose', description: 'A pose inspired by the stamina and strength required for a good workout. It engages the muscles while allowing for intimacy, perfect for those who enjoy physical challenges.' },
    { id: Date.now() + 3, text: '4', imageData: 'svg/other/kegal/ss (4).svg', title: 'ecstasy sex pose', description: 'This passionate pose is designed to bring both partners into a heightened state of ecstasy. It’s all about connection, intensity, and rhythm.' },
    { id: Date.now() + 4, text: '5', imageData: 'svg/other/kegal/ss (5).svg', title: 'narcissus sex pose', description: 'A mirror-like pose that draws inspiration from the myth of Narcissus. It focuses on self-admiration and mutual attraction, offering an intimate, reflective experience.' },
    { id: Date.now() + 5, text: '6', imageData: 'svg/other/kegal/ss (6).svg', title: 'prison guard sex pose', description: 'This pose channels the energy of power dynamics, offering a blend of authority and submission. It’s a dominant pose for those who like to take charge in intimate situations.' },
    { id: Date.now() + 6, text: '7', imageData: 'svg/other/kegal/ss (7).svg', title: 'caramel sex pose', description: 'A smooth and sensual pose that’s all about slow, deliberate movements. The caramel sex pose emphasizes deep connection and sweet, intimate moments.' },
    { id: Date.now() + 7, text: '8', imageData: 'svg/other/kegal/ss (8).svg', title: 'frog sex pose', description: 'A fun, playful pose with a lot of flexibility. It takes inspiration from the posture of a frog and offers a unique way to explore intimacy in a carefree way.' },
    { id: Date.now() + 8, text: '9', imageData: 'svg/other/kegal/ss (9).svg', title: 'yan_yang sex pose', description: 'A balanced and harmonious pose inspired by the ancient philosophy of yin and yang. This pose emphasizes balance, unity, and perfect symmetry between partners.' },
    { id: Date.now() + 9, text: '10', imageData: 'svg/other/kegal/ss (10).svg', title: 'aquarius sex pose', description: 'An innovative and unconventional pose that takes inspiration from the eccentricity of the Aquarius sign. This one is all about uniqueness and exploring new ways to connect.' },
    { id: Date.now() + 10, text: '11', imageData: 'svg/other/kegal/ss (11).svg', title: 'barbell sex pose', description: 'A strength-based pose that mimics the form of lifting a barbell. It’s designed for partners who enjoy physical challenges and need a strong, supportive stance.' },
    { id: Date.now() + 11, text: '12', imageData: 'svg/other/kegal/ss (12).svg', title: 'barbell sex pose', description: 'A similar variation to the previous one, with an emphasis on strength, endurance, and muscle engagement. This pose works well for couples who are into fitness and love power dynamics.' },
    { id: Date.now() + 12, text: '13', imageData: 'svg/other/kegal/ss (13).svg', title: 'doggy sex pose', description: 'A classic and versatile pose that allows for deep penetration and a range of variations. It’s great for partners who want to explore different angles and rhythms.' },
    { id: Date.now() + 13, text: '14', imageData: 'svg/other/kegal/ss (14).svg', title: 'Option 14', description: 'A versatile pose that allows for a lot of creativity and customization. Perfect for couples looking for variety and new experiences in their intimate life.' },
    { id: Date.now() + 14, text: '15', imageData: 'svg/other/kegal/ss (15).svg', title: 'bud sex pose', description: 'This pose emphasizes growth and connection, drawing inspiration from the idea of blossoming like a bud. It’s intimate and requires both partners to be fully present in the moment.' },
    { id: Date.now() + 15, text: '16', imageData: 'svg/other/kegal/ss (16).svg', title: 'cello sex pose', description: 'A graceful and sensual pose inspired by the elegance of playing the cello. This one involves flowing movements and a lot of closeness, creating a harmonic and intimate atmosphere.' },
];




    const optionsData = [
    { 
        id: Date.now(), 
        text: '1', 
        imageData: 'svg/other/kegal/ss (1).svg', 
        title: 'superman sex pose', 
        description: 'Lie face down on the floor, stretch your arms out in front of you, and lift both your legs and arms off the ground, keeping your core engaged. This strengthens your back, glutes, and shoulders.' 
    },
    { 
        id: Date.now() + 1, 
        text: '2', 
        imageData: 'svg/other/kegal/ss (2).svg', 
        title: 'basket sex pose', 
        description: 'Stand with your feet wide apart, bend your knees, and lower into a squat position. Keep your back straight, chest lifted, and hold the position for a few seconds, engaging your thighs and glutes.' 
    },
    { 
        id: Date.now() + 2, 
        text: '3', 
        imageData: 'svg/other/kegal/ss (3).svg', 
        title: 'workout sex pose', 
        description: 'Start by standing tall, then lower into a squat position, keeping your feet shoulder-width apart. As you squat down, engage your core and glutes, then return to standing. This helps strengthen the lower body.' 
    },
    { 
        id: Date.now() + 3, 
        text: '4', 
        imageData: 'svg/other/kegal/ss (4).svg', 
        title: 'ecstasy sex pose', 
        description: 'Begin by kneeling on the floor with your knees wide apart. Lower your hips toward the floor, maintaining a straight back. This helps stretch the hips and engage the core.' 
    },
    { 
        id: Date.now() + 4, 
        text: '5', 
        imageData: 'svg/other/kegal/ss (5).svg', 
        title: 'narcissus sex pose', 
        description: 'Sit on the floor with your legs extended forward. Bend one leg and bring it across your body, keeping your spine straight. This helps with flexibility and stretches the lower back and hips.' 
    },
    { 
        id: Date.now() + 5, 
        text: '6', 
        imageData: 'svg/other/kegal/ss (6).svg', 
        title: 'prison guard sex pose', 
        description: 'Stand tall with feet shoulder-width apart. Bend slightly at the knees and engage your core. Keep your arms close to your sides and focus on balance and posture.' 
    },
    { 
        id: Date.now() + 6, 
        text: '7', 
        imageData: 'svg/other/kegal/ss (7).svg', 
        title: 'caramel sex pose', 
        description: 'Sit with your legs bent and feet flat on the floor. Hold your arms out in front for balance, and slowly lean back to stretch your lower back while keeping your core engaged.' 
    },
    { 
        id: Date.now() + 7, 
        text: '8', 
        imageData: 'svg/other/kegal/ss (8).svg', 
        title: 'frog sex pose', 
        description: 'Squat low to the floor with your feet wider than shoulder-width. Place your hands on the floor for support and gently push your knees outward to stretch your hips.' 
    },
    { 
        id: Date.now() + 8, 
        text: '9', 
        imageData: 'svg/other/kegal/ss (9).svg', 
        title: 'yan_yang sex pose', 
        description: 'Stand with your feet shoulder-width apart. Gently rotate your hips from side to side while maintaining a straight back and engaging your core. This helps to improve hip flexibility and balance.' 
    },
    { 
        id: Date.now() + 9, 
        text: '10', 
        imageData: 'svg/other/kegal/ss (10).svg', 
        title: 'aquarius sex pose', 
        description: 'Sit with your legs bent and feet flat on the floor. Gently twist your torso to one side, keeping your back straight, and hold for a few seconds before switching sides. This stretches the spine and enhances flexibility.' 
    },
    { 
        id: Date.now() + 10, 
        text: '11', 
        imageData: 'svg/other/kegal/ss (11).svg', 
        title: 'barbell sex pose', 
        description: 'Stand with your feet shoulder-width apart. Lower your body into a squat position while keeping your back straight and core tight. This is great for strengthening the legs and core.' 
    },
    { 
        id: Date.now() + 11, 
        text: '12', 
        imageData: 'svg/other/kegal/ss (12).svg', 
        title: 'barbell sex pose', 
        description: 'Repeat the barbell pose, but add a slight incline to your squat by lifting one leg behind you as you squat. This variation works your glutes and hamstrings more intensely.' 
    },
    { 
        id: Date.now() + 12, 
        text: '13', 
        imageData: 'svg/other/kegal/ss (13).svg', 
        title: 'doggy sex pose', 
        description: 'Get into a tabletop position with your knees under your hips and hands under your shoulders. Then, extend one leg out behind you, keeping your core engaged. This helps stretch the hips and glutes.' 
    },
    { 
        id: Date.now() + 13, 
        text: '14', 
        imageData: 'svg/other/kegal/ss (14).svg', 
        title: 'Option 14', 
        description: 'Assume a standing position with feet shoulder-width apart. Extend one leg forward and squat down, holding the position briefly to engage the quads and glutes. Repeat on the other side for balanced muscle engagement.' 
    },
    { 
        id: Date.now() + 14, 
        text: '15', 
        imageData: 'svg/other/kegal/ss (15).svg', 
        title: 'bud sex pose', 
        description: 'Sit on the floor with your legs bent and feet flat. Place your hands on the floor behind you for balance, and slowly lean back while keeping your core tight. This stretches the lower back and hips.' 
    },
    { 
        id: Date.now() + 15, 
        text: '16', 
        imageData: 'svg/other/kegal/ss (16).svg', 
        title: 'cello sex pose', 
        description: 'Stand with your feet shoulder-width apart. Extend your arms overhead, keeping your chest lifted and core engaged. Slowly lean to one side, stretching the side of your body, and hold for a few seconds before switching sides.' 
    },
//];
 //  const optionsData = [
    { 
        id: Date.now() + 16, 
        text: '17', 
        imageData: 'svg/other/kegal/ss (17).svg', 
        title: 'moonlight sex pose', 
        description: 'Lie on your back and extend your legs up toward the ceiling while keeping your arms by your sides. Engage your core as you balance on your shoulders. This helps strengthen the core and leg muscles.'
    },
    { 
        id: Date.now() + 17, 
        text: '18', 
        imageData: 'svg/other/kegal/ss (18).svg', 
        title: 'butterfly sex pose', 
        description: 'Sit with your feet together and knees bent outward, keeping your back straight. Hold your feet with your hands and gently press your knees toward the floor. This stretches the hips and thighs.'
    },
    { 
        id: Date.now() + 18, 
        text: '19', 
        imageData: 'svg/other/kegal/ss (19).svg', 
        title: 'lotus sex pose', 
        description: 'Sit with your legs crossed and your feet placed on your thighs. Keep your back straight and focus on breathing deeply. This pose helps with flexibility in the hips and improves posture.'
    },
    { 
        id: Date.now() + 19, 
        text: '20', 
        imageData: 'svg/other/kegal/ss (20).svg', 
        title: 'scissors sex pose', 
        description: 'Lie on your back with your legs extended out. Lift one leg to a 90-degree angle, then cross the other leg over it, forming a scissor motion. This engages the core, legs, and hip flexors.'
    },
    { 
        id: Date.now() + 20, 
        text: '21', 
        imageData: 'svg/other/kegal/ss (21).svg', 
        title: 'twisted cobra sex pose', 
        description: 'Start in a tabletop position. Slowly arch your back and twist your torso to one side, lifting one arm towards the ceiling. This helps improve spinal flexibility and core strength.'
    },
    { 
        id: Date.now() + 21, 
        text: '22', 
        imageData: 'svg/other/kegal/ss (22).svg', 
        title: 'peacock sex pose', 
        description: 'Stand with your feet together, then squat low to the ground. Extend your arms forward and hold the position to challenge your balance and strengthen your legs and core.'
    },
    { 
        id: Date.now() + 22, 
        text: '23', 
        imageData: 'svg/other/kegal/ss (23).svg', 
        title: 'swan sex pose', 
        description: 'Begin by kneeling on the floor. Lower your chest toward the ground while keeping your arms extended forward and your back straight. This stretches your chest and shoulders.'
    },
    { 
        id: Date.now() + 23, 
        text: '24', 
        imageData: 'svg/other/kegal/ss (24).svg', 
        title: 'cherry blossom sex pose', 
        description: 'Sit on the floor with your legs extended straight. Cross one leg over the other and gently twist your torso towards the bent knee. This helps stretch the spine and opens up the hips.'
    },
    { 
        id: Date.now() + 24, 
        text: '25', 
        imageData: 'svg/other/kegal/ss (25).svg', 
        title: 'peach sex pose', 
        description: 'Stand with your feet wider than shoulder-width apart. Squat down while keeping your chest lifted and back straight. This strengthens the legs, glutes, and core while promoting balance.'
    },
    { 
        id: Date.now() + 25, 
        text: '26', 
        imageData: 'svg/other/kegal/ss (26).svg', 
        title: 'starfish sex pose', 
        description: 'Lie flat on your back with your arms and legs spread wide, forming a starfish shape. Engage your core and maintain a neutral spine. This stretches the entire body and helps with muscle relaxation.'
    },
    { 
        id: Date.now() + 26, 
        text: '27', 
        imageData: 'svg/other/kegal/ss (27).svg', 
        title: 'fountain sex pose', 
        description: 'Kneel on the floor and extend one leg behind you while leaning slightly forward. This stretch targets the hips, hamstrings, and quadriceps.'
    }
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
                image.setAttribute('x', imageX - 25);
                image.setAttribute('y', imageY - 25);
                image.setAttribute('width', '50');
                image.setAttribute('height', '50');
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

const story = {
    start: {
        text: "You find yourself in a dense jungle, the air thick with humidity and the cacophony of exotic creatures. The dense canopy above filters the sunlight into a mosaic of shadows. To your left, you see the remnants of ancient ruins, overgrown with vines and moss. To your right, a narrow path winds deeper into the jungle, shrouded in mist and mystery. What will you choose?",
        choices: [
            { text: "Explore the ancient ruins", action: "ruins" },
            { text: "Follow the mysterious path", action: "path" }
        ]
    },
    ruins: {
        text: "As you push through the tangled undergrowth, the ancient ruins come into view. Weathered stone columns and crumbling walls tell tales of a bygone era. You discover a hidden chamber concealed behind a tapestry of vines. Inside, a soft glow emanates from a beautifully crafted artifact resting on a pedestal. To the side, a narrow staircase descends into darkness. Will you take the artifact or venture down the staircase?",
        choices: [
            { text: "Take the artifact", action: "artifact" },
            { text: "Descend the staircase", action: "staircase" }
        ]
    },
    path: {
        text: "The narrow path twists and turns, leading you deeper into the heart of the jungle. The sounds of wildlife grow louder, and the foliage becomes denser. Soon, you come upon a wide river, its waters sparkling in the dappled light. A rickety wooden bridge stretches across it, swaying gently with the current. To your right, a hidden cave is partially obscured by a cascading waterfall. Will you risk crossing the bridge or explore the secrets of the cave?",
        choices: [
            { text: "Cross the bridge", action: "bridge" },
            { text: "Investigate the cave", action: "cave" }
        ]
    },
    artifact: {
        text: "The moment you touch the artifact, its glow intensifies, and you are enveloped in a swirl of colors and lights. When the world settles, you find yourself in a serene, magical realm filled with floating islands and crystalline waters. A wise old sage, draped in robes and glowing with ancient knowledge, appears before you. With a gentle smile, the sage offers to grant you one wish. You have discovered a magical artifact and are now in a land of wonders. What will you wish for?",
        choices: [
            { text: "Wish for wisdom", action: "wisdom" },
            { text: "Wish for adventure", action: "adventure" },
            { text: "Restart", action: "start" }
        ]
    },
    staircase: {
        text: "As you descend the winding staircase, the air grows cooler and the scent of earth and old parchment fills your nostrils. The staircase leads you into a vast underground chamber illuminated by the flickering light of torches. Shelves lined with ancient scrolls and chests filled with glittering treasures surround you. You have unearthed the hidden lair of a lost civilization, rich with artifacts and knowledge long forgotten. You stand amidst the remnants of a grand history.",
        choices: [
            { text: "Examine the scrolls", action: "scrolls" },
            { text: "Open a treasure chest", action: "treasure" },
            { text: "Explore a hidden passage", action: "hiddenPassage" },
            { text: "Restart", action: "start" }
        ]
    },
    bridge: {
        text: "Halfway across the bridge, it begins to creak ominously under your weight. Before you can react, the wooden planks give way, and you plunge into the river below. The icy water is a shock, and the current pulls you along with surprising force. After a desperate struggle, you manage to grab onto a fallen branch and pull yourself to shore, soaking wet but alive. You have narrowly escaped a perilous situation and are left to consider your next move.",
        choices: [
            { text: "Rest and recover", action: "rest" },
            { text: "Restart", action: "start" }
        ]
    },
    cave: {
        text: "Stepping into the cave, you are greeted by the cool, damp air and the sound of dripping water. Your eyes adjust to the darkness, revealing ancient drawings etched into the walls. A treasure chest sits half-buried in the sandy floor, its ornate design hinting at the wealth within. The chest creaks open to reveal gold coins, jeweled artifacts, and old maps. You have uncovered a hidden trove of secrets and treasures, revealing the jungle's long-lost mysteries.",
        choices: [
            { text: "Examine the maps", action: "maps" },
            { text: "Investigate further into the cave", action: "enchantedForest" },
            { text: "Restart", action: "start" }
        ]
    },
    wisdom: {
        text: "With your wish granted, you are bestowed with immense wisdom. You find yourself back in the jungle, but now you can understand the secrets of the ancient ruins and the jungle paths. You feel enlightened and at peace, knowing the mysteries of the jungle. Your journey comes to a fulfilling end as you embrace the knowledge and tranquility bestowed upon you.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    adventure: {
        text: "Your wish for adventure leads you to explore new, uncharted regions of the magical realm. You embark on thrilling quests and discover new wonders beyond imagination. Your journey becomes a legendary tale of exploration and excitement. You embrace the endless possibilities of adventure, forever exploring the boundless magical world.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    scrolls: {
        text: "The ancient scrolls reveal forgotten knowledge and powerful spells. You gain insights into the lost magic of the civilization and unlock secrets that have been hidden for centuries. The chamber now feels alive with the energy of the past, and you become a guardian of this ancient wisdom.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    treasure: {
        text: "Opening the treasure chest reveals a trove of glittering gold and precious gems. You feel a sense of accomplishment and awe at the riches of the lost civilization. As you collect the treasure, you realize that the true value lies in the history and stories of the artifacts you’ve uncovered.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    maps: {
        text: "The old maps depict hidden paths and lost cities within the jungle. With this new knowledge, you can navigate the jungle with ease and discover even more secrets. Your adventure has just begun, and you are now equipped with the tools to explore further.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    rest: {
        text: "You find a safe spot to rest and recover from your ordeal. The jungle calms down, and you reflect on your adventure. The experience has made you more resilient and prepared for future challenges. After resting, you feel ready to continue or start anew.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    enchantedForest: {
        text: "As you venture further into the cave, you discover a hidden passage that leads to an enchanted forest. The trees are tall and luminescent, and magical creatures flit among the glowing flora. You find a shimmering pool at the center of the forest. Nearby, a mystical creature offers you a choice: seek out the source of the magic or rest by the pool.",
        choices: [
            { text: "Seek the source of magic", action: "magicSource" },
            { text: "Rest by the pool", action: "restByPool" }
        ]
    },
    magicSource: {
        text: "Following the magical energy, you discover an ancient altar surrounded by powerful enchantments. The energy from the altar fills you with an incredible sense of power and clarity. You have harnessed the magic of the forest and become a guardian of its secrets.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    restByPool: {
        text: "As you rest by the shimmering pool, you are serenaded by the sounds of the forest. The tranquility helps you regain your strength and connect with the magic of the forest. You feel rejuvenated and in harmony with the mystical surroundings.",
        choices: [
            { text: "Restart", action: "start" }
        ]
    },
    hiddenPassage: {
        text: "Exploring the hidden passage, you discover a secret chamber filled with ancient artifacts and inscriptions. Among the artifacts, you find a key that seems to glow with a mysterious light. You can either use the key to unlock a hidden door or examine the other artifacts in the chamber.",
        choices: [
            { text: "Use the key", action: "keyUnlock" },
            { text: "Examine the artifacts", action: "artifacts" }
        ]
    },
}



const clickSound = new Audio('audio/click.mp3'); // Path to your audio file

function playClickSound() {
    clickSound.play();
}

function displayStory(part) {
    const content = document.getElementById('story-content');
    const choices = document.getElementById('choices');

    content.innerHTML = story[part].text;
    choices.innerHTML = '';

    story[part].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            playClickSound(); // Play sound on button click
            displayStory(choice.action);
        };
        choices.appendChild(button);
    });
}

// Start the story
displayStory('start');




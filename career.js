const clubData = {
  top: {
    african: ['Al Ahly', 'Zamalek', 'Mamelodi Sundowns'],
    european: ['Real Madrid', 'Bayern Munich', 'Manchester United'],
    americas: ['Boca Juniors', 'Flamengo', 'LA Galaxy'],
  },
  mid: {
    african: ['Kaizer Chiefs', 'Orlando Pirates', 'Esperance Tunis'],
    european: ['Valencia', 'Sevilla', 'Roma'],
    americas: ['River Plate', 'Club América', 'Santos'],
  },
  lower: {
    african: ['Golden Arrows', 'Bidvest Wits', 'SuperSport United'],
    european: ['Burnley', 'Sheffield United', 'Stoke City'],
    americas: ['D.C. United', 'New England Revolution', 'Vancouver Whitecaps'],
  }
};

const birthCountryToLeague = {
  'South Africa': 'african',
  'Nigeria': 'african',
  'Egypt': 'african',
  'Kenya': 'african',
  'Morocco': 'african',
  'England': 'european',
  'Spain': 'european',
  'Brazil': 'americas',
  'Argentina': 'americas',
};

let playerCareer = {};

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const careerDashboard = document.getElementById('careerDashboard');

const playerInfoForm = document.getElementById('playerInfoForm');
const clubTierList = document.getElementById('clubTierList');
const clubOptionsList = document.getElementById('clubOptionsList');

playerInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('playerName').value.trim();
  const birthCountry = document.getElementById('birthCountry').value;
  const position = document.getElementById('playerPosition').value;

  if (!name || !birthCountry || !position) {
    alert('Please fill in all fields');
    return;
  }

  playerCareer = {
    name,
    birthCountry,
    position,
    coins: 100,
    xp: 0,
    trophies: [],
  };

  // Hide Step 1, show Step 2
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

clubTierList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const tier = e.target.dataset.tier;
    const league = birthCountryToLeague[playerCareer.birthCountry] || 'african';

    // Pick clubs for this tier and league
    let clubs = clubData[tier][league] || [];

    // Filter clubs needing the player’s position (could be more advanced)
    // For now, just show all clubs from that tier and league

    // Save for later
    playerCareer.clubTier = tier;

    // Populate club options
    clubOptionsList.innerHTML = '';
    clubs.forEach(club => {
      const li = document.createElement('li');
      li.textContent = club;
      li.dataset.club = club;
      clubOptionsList.appendChild(li);
    });

    // Move to step 3
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  }
});

clubOptionsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedClub = e.target.dataset.club;
    playerCareer.club = selectedClub;

    // Hide step 3, show career dashboard
    step3.classList.add('hidden');
    careerDashboard.classList.remove('hidden');

    updateCareerDashboard();
  }
});

function updateCareerDashboard() {
  const c = playerCareer;
  const infoText = `
    Player: ${c.name} | Birth Country: ${c.birthCountry} | Position: ${c.position} | Club Tier: ${capitalize(c.clubTier)} | Club: ${c.club}<br>
    Coins: R${c.coins} | XP: ${c.xp} | Trophies: ${c.trophies.length}
  `;
  document.getElementById('careerInfo').innerHTML = infoText;
  document.getElementById('matchResult').textContent = '';
}

function playMatch() {
  if (!playerCareer.club) {
    alert('Please select a club first!');
    return;
  }

  const performance = Math.floor(Math.random() * 101);
  const coinsEarned = 10 + Math.floor(performance / 10);
  const xpEarned = performance;

  playerCareer.coins += coinsEarned;
  playerCareer.xp += xpEarned;

  if (performance > 90) {
    playerCareer.trophies.push('Man of the Match');
  }

  document.getElementById('matchResult').textContent =
    `You played with a performance score of ${performance}! Earned R${coinsEarned} and gained ${xpEarned} XP.` +
    (performance > 90 ? ' You won Man of the Match!' : '');

  updateCareerDashboard();
}

document.getElementById('playMatchBtn').addEventListener('click', playMatch);

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}



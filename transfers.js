let transferPlayers = [];
let filteredPlayers = [];
let playerCareer = JSON.parse(localStorage.getItem('playerCareer')) || {
  coins: 100,
  roster: [],
};

const coinsDisplay = document.getElementById('coinsDisplay');
const playersList = document.getElementById('availablePlayersList');
const negotiationSection = document.getElementById('negotiationSection');
const negPlayerName = document.getElementById('negPlayerName');
const bidAmountInput = document.getElementById('bidAmount');
const submitBidBtn = document.getElementById('submitBidBtn');
const cancelBidBtn = document.getElementById('cancelBidBtn');
const bidMessage = document.getElementById('bidMessage');
const backToCareerBtn = document.getElementById('backToCareerBtn');
const searchInput = document.getElementById('searchInput');

let currentNegotiationPlayer = null;

function updateCoins() {
  coinsDisplay.textContent = `Coins: R${playerCareer.coins}`;
}

function saveCareer() {
  localStorage.setItem('playerCareer', JSON.stringify(playerCareer));
}

function renderPlayers() {
  playersList.innerHTML = '';

  filteredPlayers.forEach((player, idx) => {
    const alreadyOwned = playerCareer.roster.some(p => p.name === player.name);
    const canBuy = player.price === 0 || playerCareer.coins >= player.price;
    const disabled = alreadyOwned || !canBuy;

    const li = document.createElement('li');

    if (!alreadyOwned && player.price > 0) {
      li.innerHTML = `
        <span>${player.name} (Rating: ${player.rating}) - Price: R${player.price}</span>
        <div>
          <button ${disabled ? 'disabled' : ''} data-index="${idx}" data-action="buy">Buy</button>
          <button data-index="${idx}" data-action="negotiate">Negotiate</button>
        </div>
      `;
    } else if (!alreadyOwned && player.price === 0) {
      li.innerHTML = `
        <span>${player.name} (Rating: ${player.rating}) - Free</span>
        <div>
          <button data-index="${idx}" data-action="buy">Buy</button>
        </div>
      `;
    } else {
      li.innerHTML = `<span>${player.name} (Rating: ${player.rating}) - Owned</span>`;
    }

    playersList.appendChild(li);
  });
}

function buyPlayer(index) {
  const player = filteredPlayers[index];
  if (!player || playerCareer.roster.some(p => p.name === player.name)) return;

  if (player.price > 0 && playerCareer.coins < player.price) {
    alert('Not enough coins to buy this player.');
    return;
  }

  showNegotiationMessage();

  setTimeout(() => {
    hideNegotiationMessage();
    if (player.price > 0) {
      playerCareer.coins -= player.price;
    }
    playerCareer.roster.push(player);

    updateCoins();
    saveCareer();
    renderPlayers();
    alert(`You bought ${player.name}!`);
  }, 1000);
}

function openNegotiation(player) {
  currentNegotiationPlayer = player;
  negPlayerName.textContent = player.name;
  bidAmountInput.value = '';
  bidMessage.textContent = '';
  negotiationSection.style.display = 'block';
  bidAmountInput.focus();
}

function showNegotiationMessage() {
  bidMessage.textContent = 'Negotiating transfer...';
  negotiationSection.style.display = 'none';
}

function hideNegotiationMessage() {
  bidMessage.textContent = '';
  negotiationSection.style.display = 'none';
}

playersList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const idx = e.target.dataset.index;
    const action = e.target.dataset.action;
    if (action === 'buy') {
      buyPlayer(idx);
    } else if (action === 'negotiate') {
      openNegotiation(filteredPlayers[idx]);
    }
  }
});

submitBidBtn.addEventListener('click', () => {
  if (!currentNegotiationPlayer) return;

  const bid = Number(bidAmountInput.value);
  if (isNaN(bid) || bid <= 0) {
    bidMessage.textContent = 'Enter a valid offer.';
    return;
  }

  const requiredBid = Math.ceil(currentNegotiationPlayer.price * 1.5);

  bidMessage.textContent = 'Negotiating...';

  setTimeout(() => {
    if (bid >= requiredBid && playerCareer.coins >= bid) {
      if (Math.random() < 0.8) {
        playerCareer.coins -= bid;
        playerCareer.roster.push(currentNegotiationPlayer);
        updateCoins();
        saveCareer();
        renderPlayers();
        negotiationSection.style.display = 'none';
        alert(`Negotiation successful! ${currentNegotiationPlayer.name} joins for R${bid}.`);
      } else {
        alert('Negotiation failed. Try again.');
      }
    } else {
      alert(`Offer too low or not enough coins. Minimum needed: R${requiredBid}`);
    }

    bidMessage.textContent = '';
    currentNegotiationPlayer = null;
  }, 2000);
});

cancelBidBtn.addEventListener('click', () => {
  negotiationSection.style.display = 'none';
  currentNegotiationPlayer = null;
  bidMessage.textContent = '';
});

backToCareerBtn.addEventListener('click', () => {
  window.location.href = 'career.html';
});

// Search filter
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    filteredPlayers = [...transferPlayers];
  } else {
    filteredPlayers = transferPlayers.filter(player =>
      player.name.toLowerCase().includes(query)
    );
  }
  renderPlayers();
});

// Load players.json and start app
fetch('players.json')
  .then(res => res.json())
  .then(data => {
    transferPlayers = data;
    filteredPlayers = [...transferPlayers];
    updateCoins();
    renderPlayers();
  })
  .catch(err => {
    console.error('Failed to load player data:', err);
    alert('Could not load players.json. Make sure the file is in the correct folder.');
  });






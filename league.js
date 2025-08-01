// league.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('teams-container');

  if (!window.teamRosters) {
    container.textContent = 'Failed to load team data.';
    return;
  }

  for (const teamName in window.teamRosters) {
    const players = window.teamRosters[teamName];

    // Create team container
    const teamDiv = document.createElement('div');
    teamDiv.className = 'team';

    // Team name
    const title = document.createElement('div');
    title.className = 'team-name';
    title.textContent = teamName;
    teamDiv.appendChild(title);

    // Players list
    const playerList = document.createElement('ul');
    playerList.className = 'players';

    players.forEach(player => {
      const li = document.createElement('li');
      li.className = 'player';

      if (typeof player === 'string') {
        li.textContent = player;
      } else if (typeof player === 'object' && player.name) {
        li.textContent = `${player.name} (${player.position || 'Unknown'})`;
      } else {
        li.textContent = 'Unnamed Player';
      }

      playerList.appendChild(li);
    });

    teamDiv.appendChild(playerList);
    container.appendChild(teamDiv);
  }
});

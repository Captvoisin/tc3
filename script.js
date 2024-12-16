document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const location = document.getElementById("location").value;
    const skill = document.getElementById("skill").value;
    const availability = document.getElementById("availability").value;
    
    // Simulating search result display (Replace with real data fetch logic)
    const results = document.getElementById("results");
    results.innerHTML = `
        <p>Searching for ${skill} players near ${location} available on ${availability}...</p>
        <ul>
            <li>Player 1 (Skill: ${skill}, Location: ${location})</li>
            <li>Player 2 (Skill: ${skill}, Location: ${location})</li>
        </ul>
    `;
});

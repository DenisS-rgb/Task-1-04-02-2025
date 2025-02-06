const usersGrid = document.getElementById("usersGrid");
const spinLoader = document.getElementById("spinLoader");

async function fetchUsers() {
    spinLoader.classList.remove("hidden");

    const response = await fetch("https://gorest.co.in/public/v2/users");
    const users = await response.json();

    spinLoader.classList.add("hidden");
    usersGrid.style.opacity = "1";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = `user-card ${user.status}`;
        userCard.textContent = user.name;
        usersGrid.appendChild(userCard);
    });
}

fetchUsers();

const users = new Promise(resolve => {
    setTimeout(() => {
        resolve([
    {
      "id": 7678011,
      "name": "Bhuvanesh Talwar",
      "email": "bhuvanesh_talwar@rosenbaum.example",
      "gender": "male",
      "status": "active"
    },
    {
      "id": 7678009,
      "name": "Anjushree Desai DDS",
      "email": "anjushree_desai_dds@howell.test",
      "gender": "male",
      "status": "inactive"
    },
    {
      "id": 7678008,
      "name": "Anuraag Ahluwalia",
      "email": "anuraag_ahluwalia@gislason.test",
      "gender": "female",
      "status": "inactive"
    },
    {
      "id": 7678007,
      "name": "Rep. Dayaanidhi Rana",
      "email": "rana_rep_dayaanidhi@cassin.test",
      "gender": "female",
      "status": "active"
    },
    {
      "id": 7678006,
      "name": "Baijayanti Iyer",
      "email": "iyer_baijayanti@heidenreich.example",
      "gender": "female",
      "status": "inactive"
    },
    {
      "id": 7678005,
      "name": "Priya Dhawan",
      "email": "priya_dhawan@doyle.test",
      "gender": "female",
      "status": "active"
    },
    {
      "id": 7678004,
      "name": "Pranay Rana",
      "email": "pranay_rana@feest.example",
      "gender": "male",
      "status": "active"
    },
    {
      "id": 7678003,
      "name": "Ashok Shah",
      "email": "ashok_shah@ohara.test",
      "gender": "female",
      "status": "inactive"
    },
    {
      "id": 7678002,
      "name": "Vrinda Saini",
      "email": "vrinda_saini@fritsch.example",
      "gender": "female",
      "status": "active"
    },
    {
      "id": 7678001,
      "name": "Dr. Aaryan Chaturvedi",
      "email": "aaryan_dr_chaturvedi@kirlin.test",
      "gender": "female",
      "status": "active"
    }
  ]);
}, 2000);
});

  const usersGrid = document.getElementById("usersGrid");

  users.then(userList => {
    userList.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = `user-card ${user.status}`;
    userCard.textContent = user.name;
    usersGrid.appendChild(userCard);
    });
});


setTimeout(() => {
    spinLoader.classList.add("hidden");
}, 1000);
function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(users => {

            let output = "";

            // Display first 6 users
            users.slice(0, 6).forEach(user => {

                output += `
                    <div class="card">

                        <div class="icon">👤</div>

                        <h3>${user.name}</h3>

                        <p>
                            <strong>Username:</strong>
                            ${user.username}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            ${user.email}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            ${user.phone}
                        </p>

                        <p>
                            <strong>City:</strong>
                            ${user.address.city}
                        </p>

                    </div>
                `;
            });

            document.getElementById("userContainer").innerHTML = output;

        })

        .catch(error => {

            document.getElementById("userContainer").innerHTML =
                "<p>Unable to load data.</p>";

        });
}
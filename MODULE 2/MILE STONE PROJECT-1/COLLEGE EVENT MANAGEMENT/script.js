/* =========================
   EVENT REGISTRATION
========================= */

function registerEvent(eventName) {

    // Select event dropdown
    const eventDropdown = document.getElementById("event");

    // Set selected event
    eventDropdown.value = eventName;

    // Move to registration section
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   REGISTRATION FORM
========================= */

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const selectedEvent = document.getElementById("event").value;

        const successMessage =
            document.getElementById("successMessage");

        successMessage.innerHTML =
            "🎉 Thank you " + name +
            "! You have successfully registered for " +
            selectedEvent + ".";

        // Clear form
        this.reset();

    });


/* =========================
   CONTACT FORM
========================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "✅ Thank you for contacting the Festivo Organizing Team!"
        );

        this.reset();

    });
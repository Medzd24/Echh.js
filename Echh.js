const popupElement = document.getElementById("popup");
        const countdownElement = document.getElementById("countdown");
        const closeButton = document.getElementById("close-button");
        let countdownInterval; // تعريف المتغير في نطاق أوسع

        // شرط لمنع الإعلان على الصفحة الرئيسية
        if (window.location.href !== "https://www.tun-24.com/?m=1") {
            setTimeout(function () {
                popupElement.style.display = "block";

                let countdown = 7;
                countdownElement.textContent = countdown;

                countdownInterval = setInterval(function () {
                    countdown--;
                    countdownElement.textContent = countdown;
                    if (countdown <= 0) {
                        clearInterval(countdownInterval);
                        countdownElement.style.display = "none";
                        closeButton.style.display = "block";
                    }
                }, 1000);
            }, 11000);
        }

        closeButton.addEventListener("click", function () {
            popupElement.style.display = "none";
            clearInterval(countdownInterval);
        });

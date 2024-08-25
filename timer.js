let countdownInterval;

        function startCountdown() {
            clearInterval(countdownInterval); // Clear any existing intervals
            
            let endTime = new Date(document.getElementById("endTime").value);
            let timerElement = document.getElementById("timer");

            countdownInterval = setInterval(function() {
                let now = new Date();
                let timeLeft = endTime - now;

                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    timerElement.textContent = "Time's up!";
                    return;
                }

                let hrs = Math.floor(timeLeft / (1000 * 60 * 60));
                let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

                // Format the time with leading zeros
                hrs = hrs < 10 ? '0' + hrs : hrs;
                mins = mins < 10 ? '0' + mins : mins;
                secs = secs < 10 ? '0' + secs : secs;

                // Update the timer display
                timerElement.textContent = `${hrs}:${mins}:${secs}`;
            }, 1000);
        }
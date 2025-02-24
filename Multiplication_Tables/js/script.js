document.querySelectorAll("input")[1].addEventListener("click", 
    () => {
        let number = parseInt(document.querySelector("#num").value)
        let section = document.querySelectorAll("section")[0]

        if (!isNaN(number)){
            if (number >= 0 && number <= 10){
                section.innerHTML = "" // Clears the previous table so they don't get stacked
                section.append(document.createElement("table"))

                document.querySelectorAll("table")[0].append(document.createElement("tbody"))

                for (let i = 1; i < 11; i++){
                    document.querySelectorAll("tbody")[0].append(document.createElement("tr"))
                    
                    for (let col = 0; col < 7; col++){
                        let currentTd = document.createElement("td")
                        document.querySelectorAll("tr")[i - 1].append(currentTd)

                        // Creation of the input that receives numbers on each row of the table
                        let inputNumber = document.createElement("input"); 
                        inputNumber.type = "number"; 
                        inputNumber.classList.add("numResult")
                        inputNumber.id = "input" + (i)

                        // This paragraph stores the "Correct!" or "Incorrect!" answer
                        let check = document.createElement("p")
                        check.id = "result" + (i)

                        let buttonNumber = document.createElement("input"); 
                        buttonNumber.type = "button"; 
                        buttonNumber.value = "Check"
                        buttonNumber.id = "submit" + (i)
                        buttonNumber.classList.add("buttonResult")

                        // This event listener checks if the answer is right
                        buttonNumber.addEventListener("click", ()=>{
                            // This grabs the value stored on the textbox from the same row as the clicked button
                            let inputUser = parseInt(document.getElementById("input" + (i)).value)

                            document.getElementById("result" + (i)).textContent = 
                            number * (i) == inputUser ? "Correct!" : "Incorrect!"
                            }   
                        )

                        // This ternary operator checks the column in the for loop, creating the structure of each row and using previously created elements like "inputNumber" or "check"
                        currentTd.append(col == 0 ? number : 
                                        col == 1 ? " * " :
                                        col == 2 ? i :
                                        col == 3 ? " = " : 
                                        col == 4 ? inputNumber :
                                        col == 5 ? buttonNumber :
                                        check
                                    )
                    }
                }
            } else {
                alert("Enter a number between 1 and 10")
            }
        }
    }
)

document.querySelectorAll("input")[1].addEventListener("click", 
    () => {
        let numero = parseInt(document.querySelector("#num").value)
        let seccion = document.querySelectorAll("section")[0]

        if (!isNaN(numero)){
            if (numero >= 0 && numero <= 10){
                seccion.innerHTML = "" // Clears the previous table so they don't get stacked
                seccion.append(document.createElement("table"))

                document.querySelectorAll("table")[0].append(document.createElement("tbody"))

                for (let i = 1; i < 11; i++){
                    document.querySelectorAll("tbody")[0].append(document.createElement("tr"))
                    
                    for (let col = 0; col < 7; col++){
                        let tdActual = document.createElement("td")
                        document.querySelectorAll("tr")[i -1].append(tdActual)

                        // Creation of the input that receives numbers on each row of the table
                        let inputNumero = document.createElement("input"); 
                        inputNumero.type = "number"; 
                        inputNumero.classList.add("numResultado")
                        inputNumero.id = "input" + (i)

                        // This paragraph stores the "Correct!" or "Incorrect!" answer
                        let check = document.createElement("p")
                        check.id = "resultado" + (i)

                        let botonNumero = document.createElement("input"); 
                        botonNumero.type = "button"; 
                        botonNumero.value="Comprobar"
                        botonNumero.id = "submit" + (i)
                        botonNumero.classList.add("botonResultado")

                        // This event listener checks if the answer is right
                        botonNumero.addEventListener("click", ()=>{
                            // This grabs the value stored on the textbox from the same row as the clicked button
                            let inputUser = parseInt(document.getElementById("input" + (i)).value)

                            document.getElementById("resultado" + (i)).textContent = 
                            numero * (i) == inputUser ? "Correct!" : "Incorrect!"
                            }   
                        )

                        // This ternary operator checks the column in the for loop, creating the structure of each row and using previously created elements like "inputNumero" or "check"
                        tdActual.append(col == 0 ? numero : 
                                        col == 1 ? " * " :
                                        col == 2 ? i :
                                        col == 3 ? " = " : 
                                        col == 4 ? inputNumero :
                                        col == 5 ? botonNumero :
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

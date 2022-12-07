function calcular() {

    let inputTypeValue = document.getElementById("TipoInput").value
    let resulTypeValue = document.getElementById("TipoResultado").value

    let re = 0
    let residuos = []
    let numero = document.getElementById("numero").value
    let division = numero


    if (inputTypeValue === "decimal" && resulTypeValue === "binario") {
        //decimal a binario
        while (division > 0) {
            re = division % 2
            division = Math.trunc(division / 2)
            residuos.push(re)
        }
        let resultado = residuos.reverse().join('')
        document.getElementById("resultado").innerHTML = resultado
    } else if (inputTypeValue === "decimal" && resulTypeValue === "octal") {
        while (division > 0) {
            re = division % 8
            division = Math.trunc(division / 8)
            residuos.push(re)
        }
        let resultado = residuos.reverse().join('')
        document.getElementById("resultado").innerHTML = resultado
    } else if (inputTypeValue === "decimal" && resulTypeValue === "hexadecimal") {// decimal a hexadecimal
        while (division > 0) {
            re = division % 16
            division = Math.trunc(division / 16)
            residuos.push(re)
            if (re == 10) {
                let i = residuos.indexOf(10)
                residuos[i] = "A"
            } else if (re == 11) {
                let i = residuos.indexOf(11)
                residuos[i] = "B"
            } else if (re == 12) {
                let i = residuos.indexOf(12)
                residuos[i] = "C"
            } else if (re == 13) {
                let i = residuos.indexOf(13)
                residuos[i] = "D"
            } else if (re == 14) {
                let i = residuos.indexOf(14)
                residuos[i] = "E"
            } else if (re == 15) {
                let i = residuos.indexOf(15)
                residuos[i] = "F"
            }
        }
        let resultado = residuos.reverse().join('')
        document.getElementById("resultado").innerHTML = resultado
    } else if (inputTypeValue === "decimal" && resulTypeValue === "decimal") { //decimal a decimal 
        document.getElementById("resultado").innerHTML = numero
    } else if (inputTypeValue === "binario" && resulTypeValue === "decimal") {
        a = 0 ;b = 0 ; arr = []
        for (let i = numero.length - 1; i >= 0; i--) {
            p = parseInt(numero[i]) * Math.pow(2, a)
            a++;
            b = b + p
            arr.push(b)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
    } else if (inputTypeValue === "octal" && resulTypeValue === "decimal") {
        //octal a decimal
        a = 0
        b = 0
        arr = []
        for (let i = numero.length - 1; i >= 0; i--) {
            p = parseInt(numero[i]) * Math.pow(8, a)
            a++;
            b = b + p
            arr.push(b)

        }

        let ultimo = arr[arr.length - 1]
        document.getElementById("resultado").innerHTML = ultimo

    } else if (inputTypeValue === "octal" && resulTypeValue === "octal") {

        document.getElementById("resultado").innerHTML = numero


    } else if (inputTypeValue === "hexadecimal" && resulTypeValue === "decimal") {
        //hexadecimal a decimal

        arr = numero.toUpperCase().split("")

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "A") {
                let i = arr.indexOf("A")
                arr[i] = 10

            } else if (arr[i] == "B") {
                let i = arr.indexOf("B")
                arr[i] = 11

            } else if (arr[i] == "C") {
                let i = arr.indexOf("C")
                arr[i] = 12

            } else if (arr[i] == "D") {
                let i = arr.indexOf("D")
                arr[i] = 13

            } else if (arr[i] == "E") {
                let i = arr.indexOf("E")
                arr[i] = 14

            } else if (arr[i] == "F") {
                let i = arr.indexOf("F")
                arr[i] = 15

            }

        }

        console.log(arr)


        a = 0
        b = 0
        arr2 = []

        for (let i = arr.length - 1; i >= 0; i--) {
            p = parseInt(arr[i]) * Math.pow(16, a)
            a++;
            b = b + p
            arr2.push(b)

        }

        console.log(arr2);


        let ultimo = arr2[arr2.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
        console.log(ultimo);



    } else if (inputTypeValue === "hexadecimal" && resulTypeValue === "hexadecimal") {
        document.getElementById("resultado").innerHTML = numero.toUpperCase()
    } else if (inputTypeValue === "octal" && resulTypeValue === "binario") {
        //octal a binario
        arr = numero.split("")
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '000'

            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '001'

            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '010'

            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '011'

            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '100'

            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '101'

            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '110'

            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '111'

            }
        }

        let final = arr.join('').split('')
        console.log(final);
        
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
        }
        console.log(final);
        console.log(final.join(''));
        document.getElementById("resultado").innerHTML = final.join('')

    } else if (inputTypeValue === "hexadecimal" && resulTypeValue === "binario") {
        //hexadecimal a binario

        arr = numero.toUpperCase().split("")
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '0000'
            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '0001'
            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '0010'
            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '0011'
            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '0100'
            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '0101'
            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '0110'
            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '0111'
            } else if (arr[i] == "8") {
                let i = arr.indexOf("8")
                arr[i] = '1000'
            } else if (arr[i] == "9") {
                let i = arr.indexOf("9")
                arr[i] = '1001'
            } else if (arr[i] == "A") {
                let i = arr.indexOf("A")
                arr[i] = '1010'
            } else if (arr[i] == "B") {
                let i = arr.indexOf("B")
                arr[i] = '1011'
            } else if (arr[i] == "C") {
                let i = arr.indexOf("C")
                arr[i] = '1100'
            } else if (arr[i] == "D") {
                let i = arr.indexOf("D")
                arr[i] = '1101'
            } else if (arr[i] == "E") {
                let i = arr.indexOf("E")
                arr[i] = '1110'
            } else if (arr[i] == "F") {
                let i = arr.indexOf("F")
                arr[i] = '1111'
            }

        }


        let final = arr.join('').split('')
        console.log(final);

        for (let i = 0; i < final.length; i++) {

            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3)


        }

        console.log(final);
        console.log(final.join(''));

        document.getElementById("resultado").innerHTML = final.join('')


    } else if (inputTypeValue === "octal" && resulTypeValue === "octal") {

        document.getElementById("resultado").innerHTML = numero

    } else if (inputTypeValue === "binario" && resulTypeValue === "binario") {

        document.getElementById("resultado").innerHTML = numero

    } else if (inputTypeValue === "binario" && resulTypeValue === "hexadecimal") {
        // binario a hexadecimal
        let contador = 0; let partes = 4 ;let arr = []
        let numero = document.getElementById("numero").value;
        contador = numero.split("");
        let residuo = parseInt(contador.length % 4)
        if(residuo==3){
            contador.unshift("0")
        }
        if (residuo == 2) {
            contador.unshift("0","0")
        } if (residuo == 1) {
            contador.unshift("0", "0","0")
        }
        console.log(contador);
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                arr.unshift("0")
            } else if (part == "0001") {
                arr.unshift("1")
            } else if (part == "0010") {
                arr.unshift("2")
            } else if (part == "0011") {
                arr.unshift("3")
            } else if (part == "0100") {
                arr.unshift("4")
            } else if (part == "0101") {
                arr.unshift("5")
            } else if (part == "0110") {
                arr.unshift("6")
            } else if (part == "0111") {
                arr.unshift("7")
            } else if (part == "1000") {
                arr.unshift("8")
            }else if (part == "1001") {
                arr.unshift("9")
            }else if (part == "1010") {
                arr.unshift("A")
            }else if (part == "1011") {
                arr.unshift("B")
            }
            else if (part == "1100") {
                arr.unshift("C")
            }else if (part == "1101") {
                arr.unshift("D")
            }else if (part == "1110") {
                arr.unshift("E")
            }
            else if (part == "1111") {
                arr.unshift("F")
            }
        }
        arr.reverse();
        let concat = arr.join("")
        document.getElementById("resultado").innerHTML = concat


    } else if (inputTypeValue === "binario" && resulTypeValue === "octal") { //binario a octal
        //binario a octal
        let contador = 0; let partes = 3; let arr = []
        let numero = document.getElementById("numero").value;
        contador = numero.split("");
        let residuo = parseInt(contador.length % 3)
        if (residuo == 2) {
            contador.unshift("0")
        } if (residuo == 1) {
            contador.unshift("0", "0")
        }
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            if (part == "000") {
                arr.unshift("0")
            } else if (part == "001") {
                arr.unshift("1")
            } else if (part == "010") {
                arr.unshift("2")
            } else if (part == "011") {
                arr.unshift("3")
            } else if (part == "100") {
                arr.unshift("4")
            } else if (part == "101") {
                arr.unshift("5")
            } else if (part == "110") {
                arr.unshift("6")
            } else if (part == "111") {
                arr.unshift("7")
            } 
        }
        arr.reverse();
        let concat = arr.join("")
        concat = Number(concat)
        document.getElementById("resultado").innerHTML = concat

    } else if(inputTypeValue === "octal" && resulTypeValue === "hexadecimal"){  //octal a hexadecimal
        //octal a hexadecimal
        arr = numero.split("")
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '000'
            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '001'
            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '010'
            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '011'
            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '100'
            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '101'
            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '110'
            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '111'
            }
        }
        let final = arr.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
        }
        console.log(final);
        let nuevo = final.join('')
        console.log(nuevo);
        //binario a hexadecimal--------------------------------------------------------------------------
        let contador = 0
        let partes = 4
        let arr2 = []
        let numero2 = nuevo
        contador = numero2.split("");
        let residuo = parseInt(contador.length % 4)
        if(residuo==3){
            contador.unshift("0")
        }
        if (residuo == 2) {
            contador.unshift("0","0")
        } if (residuo == 1) {
            contador.unshift("0", "0","0")
        }
        console.log(contador);
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                arr2.unshift("0")
            } else if (part == "0001") {
                arr2.unshift("1")
            } else if (part == "0010") {
                arr2.unshift("2")
            } else if (part == "0011") {
                arr2.unshift("3")
            } else if (part == "0100") {
                arr2.unshift("4")
            } else if (part == "0101") {
                arr2.unshift("5")
            } else if (part == "0110") {
                arr2.unshift("6")
            } else if (part == "0111") {
                arr2.unshift("7")
            } else if (part == "1000") {
                arr2.unshift("8")
            }else if (part == "1001") {
                arr2.unshift("9")
            }else if (part == "1010") {
                arr2.unshift("A")
            }else if (part == "1011") {
                arr2.unshift("B")
            }
            else if (part == "1100") {
                arr2.unshift("C")
            }else if (part == "1101") {
                arr2.unshift("D")
            }else if (part == "1110") {
                arr2.unshift("E")
            }
            else if (part == "1111") {
                arr2.unshift("F")
            }
        }
        arr2.reverse();
        let concat = arr2.join("")
        document.getElementById("resultado").innerHTML = concat


    } else if(inputTypeValue === "hexadecimal" && resulTypeValue === "octal"){ //hexadecimal a octal
       
        arr = numero.toUpperCase().split("") //hexadecimal a binario
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '0000'
            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '0001'
            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '0010'
            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '0011'
            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '0100'
            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '0101'
            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '0110'
            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '0111'
            } else if (arr[i] == "8") {
                let i = arr.indexOf("8")
                arr[i] = '1000'
            } else if (arr[i] == "9") {
                let i = arr.indexOf("9")
                arr[i] = '1001'
            } else if (arr[i] == "A") {
                let i = arr.indexOf("A")
                arr[i] = '1010'
            } else if (arr[i] == "B") {
                let i = arr.indexOf("B")
                arr[i] = '1011'
            } else if (arr[i] == "C") {
                let i = arr.indexOf("C")
                arr[i] = '1100'
            } else if (arr[i] == "D") {
                let i = arr.indexOf("D")
                arr[i] = '1101'
            } else if (arr[i] == "E") {
                let i = arr.indexOf("E")
                arr[i] = '1110'
            } else if (arr[i] == "F") {
                let i = arr.indexOf("F")
                arr[i] = '1111'
            }
        }
        let final = arr.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3)
        }
        console.log(final);
        let nuevo = final.join('')
        console.log(nuevo);
        //binario a octal--------------------------------------------------------------------------------------------
        let contador = 0
        let partes = 3
        let arr2 = []
        let numero2 = nuevo
        contador = numero2.split("");
        let residuo = parseInt(contador.length % 3)
        if (residuo == 2) {
            contador.unshift("0")
        } if (residuo == 1) {
            contador.unshift("0", "0")
        }
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            if (part == "000") {
                arr2.unshift("0")
            } else if (part == "001") {
                arr2.unshift("1")
            } else if (part == "010") {
                arr2.unshift("2")
            } else if (part == "011") {
                arr2.unshift("3")
            } else if (part == "100") {
                arr2.unshift("4")
            } else if (part == "101") {
                arr2.unshift("5")
            } else if (part == "110") {
                arr2.unshift("6")
            } else if (part == "111") {
                arr2.unshift("7")
            } 
        }
        arr2.reverse();
        let concat = arr2.join("")
        document.getElementById("resultado").innerHTML = concat


    }


}

function validar() {

    let inputTypeValue = document.getElementById("TipoInput").value
    let numero = document.getElementById("numero").value

    input = numero.toUpperCase().split("")

    if (inputTypeValue === "decimal") {

        for (let i = 0; i < input.length; i++) {

            if(input[i] == ',' || input[i] == '-' || input[i] == '.') {

                document.getElementById("resultado").innerHTML = "EL VALOR DEBE SER ENTERO POSITIVO"
    
            } else if (input[i] !== '0' && input[i] !== '1' && input[i] !== '2' && input[i] !== '3' && input[i] !== '4' && input[i] !== '5' && input[i] !== '6' && input[i] !== '7' && input[i] !== '8' && input[i] !== '9') {

                document.getElementById("resultado").innerHTML = "EL VALOR NO ES DECIMAL"

            } 
        }

    } else if (inputTypeValue === "binario") {


        for (let i = 0; i < input.length; i++) {

            if(input[i] == ',' || input[i] == '-' || input[i] == '.') {

                document.getElementById("resultado").innerHTML = "EL VALOR DEBE SER ENTERO POSITIVO"
    
            } else if (input[i] !== '0' && input[i] !== '1') document.getElementById("resultado").innerHTML = "EL VALOR NO ES BINARIO"
    
        }

    } else if (inputTypeValue === "octal") {

        for (let i = 0; i < input.length; i++) {

            if(input[i] == ',' || input[i] == '-' || input[i] == '.') {

                document.getElementById("resultado").innerHTML = "EL VALOR DEBE SER ENTERO POSITIVO"
    
            } else if (input[i] !== '0' && input[i] !== '1' && input[i] !== '2' && input[i] !== '3' && input[i] !== '4' && input[i] !== '5' && input[i] !== '6' && input[i] !== '7') document.getElementById("resultado").innerHTML = "EL VALOR NO ES OCTAL"

        }

    } else if (inputTypeValue === "hexadecimal") {

        for (let i = 0; i < input.length; i++) {

            if(input[i] == ',' || input[i] == '-' || input[i] == '.') {

                document.getElementById("resultado").innerHTML = "EL VALOR DEBE SER ENTERO POSITIVO"
    
            } else if (input[i] !== '0' && input[i] !== '1' && input[i] !== '2' && input[i] !== '3' && input[i] !== '4' && input[i] !== '5' && input[i] !== '6' && input[i] !== '7' && input[i] !== '8' && input[i] !== '9' && input[i] !== 'A' && input[i] !== 'B' && input[i] !== 'C'
                && input[i] !== 'D' && input[i] !== 'E' && input[i] !== 'F') document.getElementById("resultado").innerHTML = "EL VALOR NO ES HEXADECIMAL"


        }
    } 

}

function reset(){
    document.getElementById('resultado').innerText = ''
}


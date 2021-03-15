alert("ALERT do JavaScript!");

        var nome;

        nome = prompt("Qual é o seu nome?");
        alert("Seu nome é " + nome);
        var decisao = confirm("Esse é mesmo o seu nome?");
        
        if (decisao) {
            alert("Nome confirmado!!!!");
                let n1 = parseFloat(prompt("Digite sua primeira nota"));
                let n2 = parseFloat(prompt("Digite sua segunda nota"));
                let n3 = parseFloat(prompt("Digite sua terceira nota"));
        var media = (n1 + n2 + n3) / 3;
        alert("A media foi de " + media);
        } else {
            alert("Esse não é seu nome");
        }


    
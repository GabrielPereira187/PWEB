alert("ALERT do JavaScript!");

        var nome;

        let n1 = parseFloat(prompt("Digite o primeiro número"));
        let n2 = parseFloat(prompt("Digite o segundo número"));
        var decisao = confirm("Gostaria de fazer as operações??");
        
        if (decisao) {

             var soma = n1 + n2;
        alert("Soma dos dois números " + soma);

        var sub = n1 - n2;
        alert("Subtração dos dois números " + sub);

        var multi = n1 * n2;
        alert("Produto dos dois números " + multi);

        var div = n1 / n2;
        alert("Divisão dos dois números " + div);

        var resto = n1 % n2;
        alert("Resto da divisão dos dois números " + resto);

        } else {

            alert("Aplicação encerrada");

        }



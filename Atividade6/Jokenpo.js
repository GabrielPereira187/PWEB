

let j = parseInt(prompt("Digite o número de vezes que deseja jogar"));
alert("Serão jogadas " + j + " vez(es)");

var vJogador = 0, vComputador = 0, vEmpate = 0;
var i = 0;

do{
            alert("Faça sua escolha!!");

            var opJogador = prompt("1-Papel 2-Tesoura 3-Pedra");
            var escolhajogador,escolhacomputador;
            if(opJogador == "1"){
                escolhajogador = "Papel"
                alert("A escolha foi " + escolhajogador);
            }
            if(opJogador == "2"){
                escolhajogador = "Tesoura"
                alert("A escolha foi " + escolhajogador);
            }if(opJogador == "3"){
                escolhajogador = "Pedra"
                alert("A escolha foi " + escolhajogador);
            }

            var opcomputador = Math.floor((Math.random() * 2) + 0);
            if(opcomputador == "0"){
                escolhacomputador = "Papel"
                alert("A escolha da maquina foi " + escolhacomputador);
            }
            if(opcomputador == "1"){
                escolhacomputador = "Tesoura"
                alert("A escolha da maquina foi " + escolhacomputador);
            }
            if(opcomputador == "2"){
                escolhacomputador = "Pedra"
                alert("A escolha da maquina foi " + escolhacomputador);
            }
    
            if(escolhacomputador == escolhajogador){
                alert("Empate");
                vEmpate++;
            }
    
            if(escolhajogador == "Tesoura"){
                if(escolhacomputador == "Pedra"){
                    alert("Computador venceu!!!");
                    vComputador++;
                }
                if(escolhacomputador == "Papel"){
                    alert("Jogador venceu!!!");
                    vJogador++;
                }
            }
    
            if(escolhajogador == "Papel"){
                if(escolhacomputador == "Pedra"){
                    alert("Jogador venceu!!!");
                    vJogador++;
                }
                if(escolhacomputador == "Tesoura"){
                    alert("Computador venceu!!!");
                     vComputador++;
                }
            }
    
            if(escolhajogador == "Pedra"){
                if(escolhacomputador == "Papel"){
                    alert("Computador venceu!!!");
                    vJogador++;
                }
                if(escolhacomputador == "Tesoura"){
                    alert("Jogador venceu!!!");
                     vComputador++;
                }
            }
    
    
    
    i++;
}while(i < j);


alert("Placar final\nVitórias do jogador " + vJogador + "X" + vComputador + " Vitórias do computador\n Números de empate: " + vEmpate);
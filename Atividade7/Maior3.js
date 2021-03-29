
                let n1 = parseFloat(prompt("Digite seu primeiro numero"));
                let n2 = parseFloat(prompt("Digite seu segundo numero"));
                let n3 = parseFloat(prompt("Digite seu terceiro numero"));



                function maiorde3(n1,n2,n3){
                    if(n1 > n2 && n1 > n3){
                        return n1;
                    }
                    if(n2 > n1 && n2 > n3){
                        return n2;
                    }
                    if(n3 > n1 && n3 > n2){
                        return n3;
                    }
                    return n1;
                }

                let resp = maiorde3(n1,n2,n3);
                alert("O maior numero é = " + resp);



function retangulo(){
        var base;
        var altura;
    
        this.calcArea = function(base,altura){
            alert("Valor da base " + base * 2 + altura * 2);
        }
        
        this.setBase = function (vBase) {
				this.base = vBase;
			}

        this.setAltura = function (vAltura) {
				this.altura = Altura;
			}
    
        

}
var objRet = new retangulo();
let n1 = parseFloat(prompt("Digite a altura"));
let n2 = parseFloat(prompt("Digite a base"));
objRet.calcArea(n1,n2);



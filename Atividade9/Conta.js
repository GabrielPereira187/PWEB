function Conta(){
    var nome;
    var num;
    var saldo;
    var banco;
    
            this.setNome = function (vNome) {
				this.nome = vNome;
			}

			this.setNum = function (vNum) {
				this.num = vNum;
			}

			this.getNome = function () {
				return this.nome;
			} 

			this.getNum = function () {
				return this.num;
			}
            
            this.setSaldo = function (vSal) {
				this.saldo = vSal;
			}

			this.setBanco = function (vBanco) {
				this.banco = vBanco;
			}

			this.getBanco = function () {
				return this.banco;
			} 

			this.getSaldo = function () {
				return this.saldo;
			}
}
            
            function Corrente() { // “subclasse”
                var saldoe;
                
                this.getSaldoe = function () {
                    return saldoe;
                };
                this.setSaldoe = function (value) {
                    saldoe = value;
                };
            }     

            function Poupanca(){
                var juros;
                var dt;
                
                this.getJuros = function () {
                    return juros;
                };
                this.setJuros = function (value) {
                    juros = value;
                };
                this.getDt = function () {
                    return dt;
                };
                this.setDt = function (value) {
                    dt = value;
                };
                
            }

            









        Corrente.prototype = new Conta();
        Poupanca.prototype = new Conta();

        //>>>> Criando novo objeto <<<<<<
        nCorrente = new Corrente();
        nCorrente.setNome("Carlos");
        nCorrente.setNum("75475478");
        nCorrente.setSaldo("750.0");
        nCorrente.setBanco("Itau");
        nCorrente.setSaldoe("200");
        alert("Nome do cliente: " + nCorrente.getNome() + "\nNumero da conta: " + nCorrente.getNum() + "\nSaldo: " + nCorrente.getSaldo() + "\nBanco: " + nCorrente.getBanco() + "\nSaldo especial: " + nCorrente.getSaldoe());

        nPoupanca = new Poupanca();
        nPoupanca.setNome("Joao");
        nPoupanca.setNum("7578");
        nPoupanca.setSaldo("650.0");
        nPoupanca.setBanco("Banco do Brasil");
        nPoupanca.setJuros("10.00%");
        nPoupanca.setDt("21/07/2021");
        alert("Nome do cliente: " + nPoupanca.getNome() + "\nNumero da conta: " + nPoupanca.getNum() + "\nSaldo: " + nPoupanca.getSaldo() + "\nBanco: " + nPoupanca.getBanco() + "\nJuros: " + nPoupanca.getJuros() + "\nData: " + nPoupanca.getDt());
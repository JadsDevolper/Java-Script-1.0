//OPERAÇÕES BANCARIAS
const usuarios = {
  nome:'Tiburtina',
  transactions:[],
  balance: 0
}

//CRIA TRANSAÇÕES
 function createTransaction(transaction){
   usuarios.transactions.push(transaction);
  if (transaction.type === 'credit') {
    usuarios.balance = usuarios.balance + transaction.value;
  }else {
    usuarios.balance = usuarios.balance - transaction.value;
  }
 }

 //RELATÓRIO TRANSAÇÃO DE MAIOR VALOR
 function getHigherTransactionByType(type) {
   let higherTransaction;
   let higherValue = 0;

   for (let transaction of usuarios.transactions ) {
     if(transaction.type == type && transaction.value > higherValue){
       higherValue = transaction.value;
       higherTransaction = transaction;
     }
   }
   return higherTransaction;
 }

 //VALOR MEDIO DE TRANSAÇÕES
 function getAverageTransactionValue(){
   let sum = 0;
   
   for (let transaction of usuarios.transactions){
     sum += transaction.value;
   }
   return sum / usuarios.transactions.length;
 }

 //CONTA QUANTIDADE TOTAL DE CADA TRANSAÇÃO
 function getTransactionCount(){
   let count = {
     credit:0,
     debit:0
   }
   for (let transaction of usuarios.transactions){
    if (transaction.type ==='credit'){
      count.credit++;
    }else{
      count.debit++;
    }
   }
   return count;
 }

 createTransaction({ type:'credit', value:50});
 createTransaction({ type:'credit', value:120});
 createTransaction({ type:'debit', value:80});
 createTransaction({ type:'debit', value:30});

 console.log(usuarios.balance);

 console.log(getHigherTransactionByType('credit'));
 console.log(getHigherTransactionByType('debit'));

 console.log(getAverageTransactionValue());
 console.log(getTransactionCount());

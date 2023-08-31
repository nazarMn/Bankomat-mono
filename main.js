// let balance = 542;
// let PERCENT = 0.5;
// let balanceWithPercent = (balance * PERCENT / 100) + balance;
// console.log(balanceWithPercent);

// let data = localStorage.getItem('bal')
// let bal = []

// if (data !== "" && data !== null) {
//  bal = JSON.parse(data)   
// }

// console.log(bal)





function userCard(id) {
    let balance = 0;
    let transactionLimit = 100;
    let historyLogs = [];
    
    $('.add4').click(function() { 
        card1.putCredits(20, card1);
    
        localStorage.setItem('balanc', balance)
          $( '.balance4' ).text(  localStorage.getItem('balanc') + '₴'  );
          $( '.bala3' ).text(  localStorage.getItem('balanc') + '₴'  );
         console.log( localStorage.getItem('balanc'))
         console.log(card1.getCardOptions())
         
      });
      $('#enter5').click(function() { 
        var val = document.getElementById('withdrawal5').value;
            card1.takeCredits(val, card1);
        
            localStorage.setItem('balanc', balance)
              $( '.bala3' ).text(  localStorage.getItem('balanc') + '₴'  );
    
    
             console.log( localStorage.getItem('balanc'))
             console.log(card1.getCardOptions())
           
          
             
          });
          $('#balance2').click(function() { 
            $( '.conteiner2' ).css("display", "none"  );
            $( '.conteiner3' ).css("display", "flex"  );
            let l = JSON.stringify( historyLogs, card1.getCardOptions() )
            let m = JSON.parse(l)
            let q = JSON.stringify( m)
            let w = JSON.parse(q)
            $( '.history3' ).text( w );
    
        });
        


    function recordOperation(type, value, time) {
        historyLogs.push({
            operationType: type,
            credits: value,
            operationTime: time
        })
      
    }


    return {
        getCardOptions() {
            return {
                id,
                balance,
                transactionLimit,
                historyLogs
            }
        },
        putCredits(amount) {
            if (amount <= transactionLimit) {
                balance += amount;
                recordOperation('Received money', amount, new Date().toLocaleString())
            } else {
                console.log('exceeded limit');
            }
        },
        takeCredits(amount) {
            if (amount <= transactionLimit) {
                if (amount <= balance) {
                    balance -= amount;
                    recordOperation('Withdrawal money', amount, new Date().toLocaleString())
                } else {
                    console.log('sorry not enough money');
                    $( '.notmoney5' ).css("display", "flex"  );
                }
            } else {
                console.log('exceeded limit');
            }
        },
        setTransactionLimit(amount) {
            transactionLimit = amount;
            recordOperation('Change transaction limit', amount, new Date().toLocaleString())
        },
        transferMoney(amount, card) {
            let tax = 0.005;

            let transferAmount = amount * tax + amount;
            if (transferAmount <= balance && transferAmount <= transactionLimit) {
                if (transferAmount <= balance) {
                    this.takeCredits(transferAmount);
                    card.putCredits(amount);
                } else {
                    console.log('sorry not enough money');
                }
            } else {
                console.log('exceeded limit');
            }
        }
        
    }
    

    
}

let card1 = new userCard(1);
// let card2 = new userCard(2);

console.log(card1.getCardOptions())
// console.log(card2.getCardOptions())




// console.log(card2.getCardOptions())




function formatInput(event) {
    var input = event.target.value;
    var numbersOnly = input.replace(/\D/g, ''); 
    var maxLength = 5;
    
    if (numbersOnly.length > 2) {
      
      numbersOnly = numbersOnly.slice(0, 2) + '/' + numbersOnly.slice(2);
    }
    
    var truncatedValue = numbersOnly.slice(0, maxLength); 
  
    event.target.value = truncatedValue;
  }
  


  let a = '11/11'
  

$('.MMPP').keyup(function() {
    var val = $('.MMPP').val();
    if (val == a) {
        alert('fg')
        
    }else{
        
    }

  });
  let b = '111'
  

  $('.CVVCVC').keyup(function() {
      var val = $('.CVVCVC').val();
      if (val == b) {
          alert('fg')
          
      }else{
          
      }
  
    });

    $('.numbercard').click(function() {
        $( '.button1' ).css("height", "50%"  );
        $( '.top1' ).css("height", "50%"  );
        $( '.button1' ).css("display", "flex"  );

    });
    $(document).ready(function() {
        $(".letter").on("click", function() {
            var character = $(this).text();
            var currentText = $("#numbercard").val();
            $("#numbercard").val(currentText + character);
        });
    });
    $(".return").on("click", function() {
        var currentText = $("#numbercard").val();
        if (currentText.length > 0) {
            $("#numbercard").val(currentText.slice(0, -1));
        }
    });
    $('#enter').click(function() { 
        $( '.conteiner1' ).css("display", "none"  );
        $( '.conteiner2' ).css("display", "flex"  );
    });
    
    $('#withdrawmoney2').click(function() { 
        $( '.conteiner2' ).css("display", "none"  );
        $( '.conteiner5' ).css("display", "flex"  );
    });
    $('#replenish2').click(function() { 
        $( '.conteiner2' ).css("display", "none"  );
        $( '.conteiner4' ).css("display", "flex"  );
    });
    $('.exit4').click(function() { 
        $( '.conteiner4' ).css("display", "none"  );
        $( '.conteiner2' ).css("display", "flex"  );
    });
    $('.exit2').click(function() { 
        $( '.conteiner2' ).css("display", "none"  );
        $( '.conteiner1' ).css("display", "flex"  );
    });
    $('.exit3').click(function() { 
        $( '.conteiner3' ).css("display", "none"  );
        $( '.conteiner2' ).css("display", "flex"  );
    });
    $('.exit5').click(function() { 
        $( '.conteiner5' ).css("display", "none"  );
        $( '.conteiner2' ).css("display", "flex"  );
    });
    
    $(document).ready(function() {
        $(".letter5").on("click", function() {
            var character5 = $(this).text();
            var currentText5 = $("#withdrawal5").val();
            $("#withdrawal5").val(currentText5 + character5);
        });
       

    });
    $(".return5").on("click", function() {
        var currentText5 = $("#withdrawal5").val();
        if (currentText5.length > 0) {
            $("#withdrawal5").val(currentText5.slice(0, -1));
        }
    });

  
 
    setInterval(function() {
        $( '.bala3' ).text(  localStorage.getItem('balanc') + '₴'  );
      }, 1000); 

      $('#exit51').click(function() { 
        $( '.notmoney5' ).css("display", "none"  );
        
    });
  
// write your DOM code here.


// DOM element references
const passengerQueueCounter = document.querySelector('.passenger_queue_count')
const taxiQueueCounter = document.querySelector('.taxi_queue_count')
const passengerJoinQueueBtn  = document.querySelector('.join_queue')
const passengerleaveQueueBtn = document.querySelector('.leave_queue')
const joinTaxiQueueBtn = document.querySelector('.join_taxi_queue')
const departBtn = document.querySelector('.depart')
// create Factory Function instance

let current_queue_count = 0
let current_taxi_count = 0
 const storedQueueCount = localStorage.getItem('passenger_count');
 if(storedQueueCount){
      current_queue_count = (storedQueueCount)
  }
  const storedTaxiCount = localStorage.getItem('taxi_count');
 if(storedTaxiCount){
      current_queue_count = (storedTaxiCount)
  }

const taxiQueue = TaxiQueue();

passengerQueueCounter.innerHTML = storedQueueCount || taxiQueue.queueLength();
taxiQueueCounter.innerHTML = storedTaxiCount || taxiQueue.taxiQueueLength();


// DOM events

passengerJoinQueueBtn.addEventListener('click',function(){
   
    taxiQueue.joinQueue();

    console.log(taxiQueue.queueLength())

    passengerQueueCounter.innerHTML = taxiQueue.queueLength();

    localStorage.setItem('passenger_count',taxiQueue.queueLength())
})
passengerleaveQueueBtn.addEventListener('click',function(){
  
    taxiQueue.leaveQueue();

    console.log(taxiQueue.queueLength())

    passengerQueueCounter.innerHTML = taxiQueue.queueLength();

    localStorage.setItem('passenger_count',taxiQueue.queueLength())
})
joinTaxiQueueBtn.addEventListener('click',function(){
  
    taxiQueue.joinTaxiQueue();

    console.log(taxiQueue.taxiQueueLength())

    taxiQueueCounter.innerHTML = taxiQueue.taxiQueueLength();

    localStorage.setItem('taxi_count',taxiQueue.taxiQueueLength())
})
departBtn.addEventListener('click',function(){

    
        taxiQueue.taxiDepart();
    
  


    taxiQueueCounter.innerHTML = taxiQueue.taxiQueueLength();
    passengerQueueCounter.innerHTML = taxiQueue.queueLength();

    
      localStorage.setItem('taxi_count',taxiQueue.taxiQueueLength())
     localStorage.setItem('passenger_count',taxiQueue.queueLength())

})








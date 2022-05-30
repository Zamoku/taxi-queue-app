function TaxiQueue(counter) {
  
	let count = 0;
	let taxiCount = 0;
	let departCount = 0;
	let joinQueueCount = 12;
	let newCount = 0;

	
    if(counter){
        count = counter;
    }
	function queueLength() {
		return count;
	}

	function joinQueue() {
		 count++ ;
	
	}

	function leaveQueue() {
		if(count > 0){
			 count--;
		}
		
	}

	function taxiQueueLength() {
		return taxiCount
	}

	function joinTaxiQueue() {
		taxiCount++;
	}

	function taxiDepart(){
		if(count >= 12 && (taxiCount > 1)){
			 newCount = joinTaxiQueue() - departCount;
			// return taxiCount--;
		}
		if(count >= 12 && (taxiCount > 1)){
			newCount = joinQueue() - joinQueueCount
			
		}
		return newCount
	}
	
	return {
		queueLength,
		joinQueue,
		leaveQueue,
		taxiQueueLength,
		joinTaxiQueue,
		taxiDepart
	}
}
function TaxiQueue(counter) {
  
	let count = 0;
	let taxiCount = 0;
	let departCount = 1
	let joinQueueCount = 12;
	let newCounter = 0

	
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
			Number(taxiCount -=1);
			Number(count -= 12);

			console.log(taxiCount)
		}
		
	}
	function getTaxiDepart(){
		return taxiDepart()
	}
	
	return {
		queueLength,
		joinQueue,
		leaveQueue,
		taxiQueueLength,
		joinTaxiQueue,
		taxiDepart,
		getTaxiDepart
	}
}
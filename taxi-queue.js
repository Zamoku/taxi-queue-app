function TaxiQueue() {
  
	let count = 0;
	let taxiCount = 0;
	let departCount = 1
	let joinQueueCount = 12;

	
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
			taxiCount--
		}
		if(count >= 12 && (taxiCount > 1)){
			count = count - joinQueueCount
		}
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
describe('The taxi queue app', function() {

	it ('should allow people to join the queue', function() {

		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();

		assert.equal(5, taxiQueue.queueLength());

	});

	it ('should allow people to leave the queue', function() {

		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.leaveQueue();
		taxiQueue.leaveQueue();
		taxiQueue.joinQueue();

		assert.equal(1, taxiQueue.queueLength());

	});

	it ('should not allow the people queue to be less than 0', function() {

		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();

		taxiQueue.leaveQueue();
		taxiQueue.leaveQueue();
		taxiQueue.leaveQueue();
		taxiQueue.leaveQueue();
		taxiQueue.leaveQueue();

		assert.equal(0, taxiQueue.queueLength());

	});

	it ('should allow taxis to join the queue', function() {
		
		const taxiQueue = TaxiQueue();

		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();

		assert.equal(3, taxiQueue.taxiQueueLength());

	});

	// it ('should not allow the taxi queue to be less than 0', function() {

	// 	const taxiQueue = TaxiQueue();

	// 	taxiQueue.joinQueue();
	// 	taxiQueue.joinQueue();
	// 	taxiQueue.joinQueue();

	// 	taxiQueue.leaveQueue();
	// 	taxiQueue.leaveQueue();
	// 	taxiQueue.leaveQueue();
	// 	taxiQueue.leaveQueue();
	// 	taxiQueue.leaveQueue();

	// 	assert.equal(0, taxiQueue.queueLength());

	// });


	it ('should allow taxis to leave the queue if there is enough passengers queueing', function() {

		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue(); // 1
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue(); // 12
		taxiQueue.joinQueue(); 
		taxiQueue.joinQueue();
		taxiQueue.joinQueue(); 

		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();

		// data before a taxi departs
		assert.equal(3, taxiQueue.taxiQueueLength());
		assert.equal(15, taxiQueue.queueLength());

		taxiQueue.taxiDepart();

		// data after a taxi departed
		assert.equal(2, taxiQueue.taxiQueueLength());
		assert.equal(3, taxiQueue.queueLength());
		// assert.equal(2, taxiQueue.queueLength());

	});

	it ('should not allow a taxi to leave the queue if there is not enough passengers queueing', function() {


		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue(); // 1
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();   
		taxiQueue.joinQueue(); // 11 

		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();
		taxiQueue.joinTaxiQueue();

		// data before a taxi departs
		assert.equal(3, taxiQueue.taxiQueueLength());
		assert.equal(11, taxiQueue.queueLength());

		// this function call should do nothing as there is not enough passengers in the queue
		taxiQueue.taxiDepart();

		// data after a taxi departed
		assert.equal(3, taxiQueue.taxiQueueLength());
		assert.equal(11, taxiQueue.queueLength());

	});

	it ('should check that a taxi can not leave if the taxi queue is empty', function() {

		const taxiQueue = TaxiQueue();

		taxiQueue.joinQueue(); // 1
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue();
		taxiQueue.joinQueue(); // 12
		taxiQueue.joinQueue(); 
		taxiQueue.joinQueue();
		taxiQueue.joinQueue(); 

		// data before a taxi departs
		assert.equal(0, taxiQueue.taxiQueueLength());
		assert.equal(15, taxiQueue.queueLength());

		// this function call should do nothing as there is no taxis in the taxi queue
		taxiQueue.taxiDepart();
		
		// data after a taxi departed
		assert.equal(0, taxiQueue.taxiQueueLength());
		assert.equal(15, taxiQueue.queueLength());

	});
});
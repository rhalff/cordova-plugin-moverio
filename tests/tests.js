exports.defineAutoTests = function() {
	describe('awesome tests', function() {
			it('do something sync', function() {
				expect(1).toBe(1);
			});

			it('do something async', function(done) {
					setTimeout(function() {
							expect(1).toBe(1);
							done();
					}, 100);
		 });
	});

	describe('more awesome tests', function() {
	});
};

exports.defineManualTests = function(contentEl, createActionButton) {
	createActionButton('Simple Test', function() {
			console.log(JSON.stringify(foo, null, '\t'));
			});

	createActionButton('Complex Test', function() {
			contentEl.innerHTML = '';
			});
};

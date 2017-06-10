exports.defineAutoTests = function() {
  describe('Moverio (moverio)', function () {
    it("should exist", function () {
      expect(moverio).toBeDefined();
    });

    it("should contain a getSensorList function", function () {
      expect(moverio.getSensorList).toBeDefined();
      expect(typeof moverio.getSensorList == 'function').toBe(true);
    });
    it("should return a list of sensors", function () {
      const sensorList = moverio.getSensorList();

      expect(sensorList).toEqual([

      ]);
    });
  });

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

/*
exports.defineManualTests = function(contentEl, createActionButton) {
	createActionButton('Simple Test', function() {
			console.log(JSON.stringify(foo, null, '\t'));
			});

	createActionButton('Complex Test', function() {
			contentEl.innerHTML = '';
			});
};
*/

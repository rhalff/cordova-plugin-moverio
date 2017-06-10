exports.defineAutoTests = function() {
  describe('Moverio (moverio)', function () {
    it('should exist', function () {
      expect(moverio).toBeDefined();
    });

    it('should contain a getSensorList function', function () {
      expect(moverio.getSensorList).toBeDefined();
      expect(typeof moverio.getSensorList == 'function').toBe(true);
    });
    it('should return a list of sensors', function (done) {
      moverio.getSensorList()
        .then(function (result) {
          expect(result).toEqual([

          ]);

          done();
        });
    });
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

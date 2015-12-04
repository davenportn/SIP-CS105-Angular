(function(){
	angular.module('105Demo', [])	
		/**
		 * Lucky Number controller
		 */
		.controller('luckyNumberCtrl', ['$scope', function($scope){
			var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			$scope.luckyButton = function(){
				$scope.luckyNumber = Math.floor(Math.random() * 100);
				$scope.luckyLetter = getLetter();
				$scope.luckyWord = getLetter() + getLetter() + getLetter();
			};
			function getLetter(){
				return alphabet.charAt(Math.floor(Math.random() * 26));
			}
		}])

		/**
		 * Message Board controller
		 */
		.controller('messageBoardCtrl', ['$scope', function($scope){}])

		/**
		 * Invitation List controller
		 */
		.controller('invitationListCtrl', ['$scope', function($scope){
			$scope.people = [
				{name : "Macy", state : "MI", zip : "62423", isChecked : false},
				{name : "Carrie", state : "WY", zip : "72836", isChecked : true},
				{name : "Jonas", state : "LA", zip : "99430", isChecked : false},
				{name : "Matt", state : "HI", zip : "00151", isChecked : false}
			];
		}])

		/**
		 * Virtual Pet controller
		 */
		.controller('virtualPetCtrl', ['$scope', '$interval', function($scope, $interval){
			$scope.petTimer = 0;
			$scope.petBool = true;
			$interval(simulate, 1250);
			function simulate(){
				if ($scope.petBool){
					var random = Math.floor(Math.random() * 3);
					$scope.petTimer++;
					switch(random){
						case 0:
							$scope.petStatus = "Happy";
							$scope.petAction = "Wiggling";
							break;
						case 1:
							$scope.petStatus = "Angry";
							$scope.petAction = "Biting people";
							break;
						case 2:
							$scope.petStatus = "Lethargic";
							$scope.petAction = "Moping";						
							break;
						default:
							$scope.petStatus = "Happy";
							$scope.petAction = "Wiggling";
				}}}
			$scope.$watch("petBool", function(val){
				if (!val){
					$scope.petStatus = "Paused";
					$scope.petAction = "Paused";
				}
			});
		}]);

})();
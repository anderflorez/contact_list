var contactapp = angular.module('contactapp', []);

contactapp.controller('appController', ['$scope', '$http', function($scope, $http) {

	var refresh = function() {
		$scope.form = false;
		$scope.addbtn = false;
		$scope.cancelbtn = false;
		$scope.editbtn = false;
		$scope.errshow = false;

		$http.get('api/contacts').then(function(response){
			$scope.contacts = response.data;
			$scope.placeholder = {
				name: '',
				number: '',
				email: '',
				address: ''
			};
		}).catch(function(error) {
			$scope.error = error.data.error;
			$scope.errshow = true;
		});
	};

	refresh();

	$scope.add = function() {
		$http.post('api/contacts', $scope.placeholder).then(function() {
			refresh();			
		}).catch(function(error) {
			$scope.error = error.data.error;
			$scope.errshow = true;
		});
	};

	$scope.edit = function(id) {
		console.log($scope.placeholder);
		$http.put('api/contacts/' + id, $scope.placeholder).then(function() {
			refresh();			
		}).catch(function(error) {
			$scope.error = error.data.error;
			$scope.errshow = true;
		});
	}

	$scope.delete = function(id) {
		$http.delete('api/contacts/' + id).then(function() {
			refresh();			
		}).catch(function(error) {
			$scope.error = error.data.error;
			$scope.errshow = true;
		});
	};

	$scope.cancel = function() {
		$scope.form = false;
		$scope.addbtn = false;
		$scope.cancelbtn = false;
		$scope.editbtn = false;

		$scope.placeholder = {
			name: '',
			number: '',
			email: '',
			address: ''
		};
	}

	$scope.addform = function() {
		$scope.form = true;
		$scope.addbtn = true;
		$scope.cancelbtn = true;
		$scope.editbtn = false;

		$scope.actiontitle = 'Add';
		$scope.placeholder = {
			name: '',
			number: '',
			email: '',
			address: ''
		};
	};

	$scope.editform = function(contact) {
		$scope.form = true;
		$scope.addbtn = false;
		$scope.cancelbtn = true;
		$scope.editbtn = true;

		$scope.actiontitle = 'Edit';
		$scope.placeholder = {
			name: contact.name,
			number: contact.number,
			email: contact.email,
			address: contact.address,
			_id: contact._id
		};
	};
}]);
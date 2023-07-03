function OnCognitoConfirmRegistration() {

	var poolData = {
		UserPoolId: 'ap-northeast-1_kKR33X2Ly', // Your user pool id here
		ClientId: '798ncmmova3vp8s34me3v07qnh', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var username = document.getElementById("email").value;
	var code = document.getElementById("ConfirmCode").value;

	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.confirmRegistration(code, true, function(err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log('call result: ' + result);
	});
}

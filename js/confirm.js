function OnCognitoConfirmRegistration() {

	var poolData = {
		UserPoolId: 'ap-northeast-1_DAp8YmJLB', // Your user pool id here
		ClientId: '7798ncmmova3vp8s34me3v07qnh', // Your client id here
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
		console.log('call result: ' + result);
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}else{
            window.location.href = 'registered.html'
        }
	});
}

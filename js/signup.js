function OnCognitoSignUp() {

	var poolData = {
		UserPoolId: 'ap-northeast-1_kKR33X2Ly', // Your user pool id here
		ClientId: '798ncmmova3vp8s34me3v07qnh', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	userPool.signUp(username, password, null, null, function(
		err,
		result
	) {
        var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
        
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}else{
            window.location.href = 'confirm.html'
        }
		
	});
}

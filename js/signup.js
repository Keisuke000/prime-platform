function OnCognitoSignUp() {

	var poolData = {
		UserPoolId: 'ap-northeast-1_kKR33X2Ly', // Your user pool id here
		ClientId: '798ncmmova3vp8s34me3v07qnh', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	userPool.signUp(email, password, null, null, function(
		err,
		result
	) {
        var cognitoUser = result.user;
		console.log('mailadress is ' + cognitoUser.getUsername());
        
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}else{
			sessionStorage.setItem('email',email);
            window.location.href = 'confirm.html'
        }
		
	});
}

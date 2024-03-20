function OnCognitoAuthenticateUser() {

	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var authenticationData = {
		Username: username,
		Password: password,
	};

	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
		authenticationData
	);
	var poolData = {
		UserPoolId: 'ap-northeast-1_DAp8YmJLB', // Your user pool id here
		ClientId: '6ojrrug3p4qdoqsllefll80bv9', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function(result) {
            var idToken = result.getIdToken().getJwtToken();          // IDトークン
			var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
            var refreshToken = result.getRefreshToken().getToken();   // 更新トークン
            
            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
			AWS.config.region = 'ap-northeast-1';

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: 'ap-northeast-1:61160eb1-f7cd-4b08-a0d2-1c1240d9e25e', // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_DAp8YmJLB': result
						.getIdToken()
						.getJwtToken(),
				},
			});

			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			AWS.config.credentials.refresh(error => {
				if (error) {
					console.error(error);
				} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
					console.log('ログインしました。');
                    alert('ログインしました。')
                    window.location.href = 'home.html'
				}
			});
		},

		onFailure: function(err) {
			alert(err.message || JSON.stringify(err));
		},
	});
}

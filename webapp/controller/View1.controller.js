sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./data"
], function (Controller, Dataset) {
		"use strict";
		return Controller.extend("com.sap.build.standard.untitledPrototype.controller.Accueil", {
		
		onInit: function() {

		},
		testbutton: function () {
			console.log("test de l'API 6");

			var accessToken;
			var tokenURL = "/blockchaintoken";
			var clientId = Dataset[0];
			var clientSecret = Dataset[1];

			$.ajax({
				url: tokenURL + "?grant_type=client_credentials",
				type: "GET",
				contentType: "application/json",
				dataType: "json",
				async: false,
				beforeSend: function (xhr) {
					xhr.setRequestHeader("Authorization", "Basic " + btoa(clientId + ":" + clientSecret));
				},
				success: function (response) {
					//debugger;
					console.log("OK");
					accessToken = response.access_token;
					console.log(accessToken);
				},
				error: function (request, status, error) {
					console.log("TOKEN KO :" + request.responseText);
				},
				timeout: 5000
			});
			
			var searchCondition = "1/id003"
			var serviceURL = '/blockchainservice';
			var productReviews = {};
			$.ajax({
				url: serviceURL + "/" + searchCondition,
				type: "GET",
				beforeSend: function (xhr) {
					xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
				},
				async: false,
				success: function (data) {
					try {
						//debugger;
						var results = data.values;
						console.log("resultats");
						console.log(data);
	

					} catch (err) {
						console.log("try ko :" + err.message);
					}
				},
				error: function (request, status, error) {
					console.log("data ko :" + request.responseText);
				}
			});

		}
		
		
	});
}, /* bExport= */ true);
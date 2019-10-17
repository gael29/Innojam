sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"./data"
], function(BaseController, MessageBox, Utilities, History, Dataset) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.untitledPrototype.controller.Accueil", {
		handleRouteMatched: function(oEvent) {
			var sAppId = "App5da865029c97a36106f86f48";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype" && prop.includes("Set")) {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

		},
		_onButtonPress: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("MesProduits_1", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},
		_onButtonPress1: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("MesComposants", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Accueil").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

		},
		testbutton: function () {
			console.log("test de l'API 6");

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





			var accessToken;
			var tokenURL = "/blockchaintoken";
			var clientId = Dataset[0];
			var clientSecret = Dataset[1];
			console.log(clientSecret)

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
			
			var id = 7;
			var json_form = {"bogzezergzergzergze" : "hello"};
			var productReviews = {};
			$.ajax({
				url: '/blockchainservice/1/' + id ,
				type: "POST",
				dataType : 'json',
				data: json_form,
				contenttype: 'application/json',
				beforeSend: function (xhr) {
					xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
				},
				async: false,
				success: function (data) {
					try {

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

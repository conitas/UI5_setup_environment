sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (
	ComponentContainer
) {
	"use strict";
	new ComponentContainer({
		name: "conitas.ecm.app",
		settings : {
			id : "compcontainer"
		},
		async: true
	}).placeAt("content");
	/* 	return ManagedObject.extend("conitas.ui.tests.env.index", {
		}); */
});
/*global QUnit*/

sap.ui.define([
	"ns/businesspartners/controller/List_of_Suppliers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List_of_Suppliers Controller");

	QUnit.test("I should test the List_of_Suppliers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

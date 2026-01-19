import XMLView from "sap/ui/core/mvc/XMLView";


// new Text({
//     text: "Hello World !!!"
// }).placeAt("content");

XMLView.create({
    viewName: "ui5.walkthrough.view.App"
}).then(function (view) {
    view.placeAt("content");
});
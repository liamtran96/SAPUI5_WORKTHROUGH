import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
   
   onShowHello(): void {
      // read msg from i18n model
      const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
      const age = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/age");
      const address = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/address");
      const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
      const msg = resourceBundle.getText("helloMsg", [recipient, age, address]) || "no text defined";
      // show message
      MessageToast.show(msg);
   }
};
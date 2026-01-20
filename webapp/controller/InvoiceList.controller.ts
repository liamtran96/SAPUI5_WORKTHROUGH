import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event";
import ObjectListItem from "sap/m/ObjectListItem";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
  onInit(): void {
    const viewModel = new JSONModel({
      currency: "EUR",
    });
    this.getView()?.setModel(viewModel, "view");
  }

  // onPress(): void {
  //   const router = UIComponent.getRouterFor(this);
  //   router.navTo("detail");
  // }

  onPress(event: Event): void {
    const item = event.getSource() as ObjectListItem;

    const router = UIComponent.getRouterFor(this);
    router.navTo("detail", {
      invoicePath: window.encodeURIComponent(
        item.getBindingContext("invoice").getPath().substring(1),
      ),
    });
  }

  onFilterInvoices(event: SearchField$SearchEvent): void {
    // build filter array
    const filter = [];
    const query = event.getParameter("query");
    console.log("event", event);
    if (query) {
      filter.push(new Filter("ProductName", FilterOperator.Contains, query));
    }
    // filter binding
    const list = this.byId("invoiceList");
    console.log("list", list);
    const binding = list?.getBinding("items") as ListBinding;
    console.log("binding", binding);

    binding?.filter(filter);
  }
}

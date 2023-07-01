import { LightningElement, api } from 'lwc';

export default class DatatableDetailButton extends LightningElement {
  @api rowId;
  @api attrA;
  @api attrB;

  fireDetailRow() {
    const event = CustomEvent('detailrow', {
        composed: true,
        bubbles: true,
        detail: {
            rowId: this.rowId,
        },
    });
    console.log(this.rowId);
    this.dispatchEvent(event);
  }
}
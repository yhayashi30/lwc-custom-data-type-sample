import { LightningElement, api, wire } from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';

export default class DatatableRelatedListButton extends LightningElement {
    @api rowId;
    records;
    error;
    @api attrA;
    @api attrB;
  
    @wire(getRelatedListCount, {
        parentRecordId: '$rowId',
        relatedListId: 'Cases'
    })listInfo({ error, data }) {
        if (data) { 
            this.records = data.count > 0 ? true : false;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }

    fireRelatedListRow() {
      const event = CustomEvent('relatedlistrow', {
          composed: true,
          bubbles: true,
          detail: {
              rowId: this.rowId,
          },
      });
      this.dispatchEvent(event);
    }

}
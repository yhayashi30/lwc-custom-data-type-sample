import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountDatatableController.getAccountList';
import DetailModal from "c/detailModal";
import RelatedListModal from "c/relatedListModal";

const columns = [
  { label: 'Account Name', fieldName: 'Name', type: 'text' },
  { label: 'Phone', fieldName: 'Phone', type: 'phone'},
  { label: 'Type', fieldName: 'Type', type: 'text' },
  {
    label: 'Detail', type: 'detailButton',
    fieldName: 'Id',
    fixedWidth: 100,
    typeAttributes: {
      attrA: { fieldName: 'attrA' },
      attrB: { fieldName: 'attrB' },
    },  
  },
  {
    label: 'Related List', type: 'relatedListButton',
    fieldName: 'Id',
    fixedWidth: 100,
    typeAttributes: {
      attrA: { fieldName: 'attrA' },
      attrB: { fieldName: 'attrB' },
    },  
  }
];

export default class AccountDatatable extends LightningElement {
  columns = columns;
  accounts;
  error;

  @wire(getAccountList)
  wiredAccounts({ error, data }) {
    if (data) {
        this.accounts = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.accounts = undefined;
    }
  }

  detailRow(event){
    const { rowId } = event.detail;
    DetailModal.open({
      recordId: rowId
    }).then((result) => {
        console.log(result);
    });
  }

  relatedListRow(event){
    const { rowId } = event.detail;
    RelatedListModal.open({
      recordId: rowId
    }).then((result) => {
        console.log(result);
    });
  }
}
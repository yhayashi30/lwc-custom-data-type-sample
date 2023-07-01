import LightningDatatable from 'lightning/datatable';
import detailButton from './detailButton.html';
import relatedListButton from './relatedListButton.html';

export default class DatatableButtonType extends LightningDatatable {
  static customTypes = {
    detailButton: {
        template: detailButton,
        // Provide template data here if needed
        typeAttributes: ['attrA', 'attrB'],
    },
    relatedListButton: {
      template: relatedListButton,
      // Provide template data here if needed
      typeAttributes: ['attrA', 'attrB'],
  }
   //more custom types here
};
}
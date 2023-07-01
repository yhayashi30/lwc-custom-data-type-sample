import { api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const columns = [
    { label: 'Case Number', fieldName: 'CaseNumber', type: 'text' },
    { label: 'Subject', fieldName: 'Subject', type: 'text'},
    { label: 'Type', fieldName: 'Type', type: 'text' }
];
export default class RelatedListModal extends LightningModal {
    @api recordId;
    columns = columns;
    records = [];
  
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Cases',
        fields: ['Case.Id','Case.CaseNumber','Case.Subject','Case.Type']
    })listInfo({ error, data }) {
        if (data) {
            let tmprecord = {};
            let tmprecords = [];
            data.records.forEach((record) => {
                tmprecord = {}; 
                Object.keys(record.fields).forEach((key) => {
                    tmprecord[key] = record.fields[key].value;
                });
                console.log(JSON.stringify(tmprecord));
                tmprecords.push(tmprecord);
            });
            this.records = Array.from(tmprecords);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
}
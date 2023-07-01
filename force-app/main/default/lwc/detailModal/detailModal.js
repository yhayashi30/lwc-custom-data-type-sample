import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class DetailModal extends LightningModal {
    @api recordId;

    fields = ['AccountId', 'Name', 'Title', 'Phone', 'AccountNumber', 'Industry', 'AnnualRevenue'];
    handleOkay() {
        this.close('okay');
    }
}
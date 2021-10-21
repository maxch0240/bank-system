import { Transaction } from "./transaction";


export class TransactionInfo {
    account_id1: number;
    account_id2: number;
    amount: number;

    constructor(account_id1: number, account_id2: number, amount: number) {
        this.account_id1 = account_id1;
        this.account_id2 = account_id2;
        this.amount = amount;
    }
}

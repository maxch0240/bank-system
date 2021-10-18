import {Account} from './account'

export interface Transactions {
    id: number,
    account1: Account,
    account2: Account,
    amount: number
}
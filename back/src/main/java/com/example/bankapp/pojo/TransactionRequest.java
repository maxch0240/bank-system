package com.example.bankapp.pojo;

public class TransactionRequest {
    private Long account_id1;
    private Long account_id2;
    private Double amount;

    public TransactionRequest(Long account_id1, Long account_id2, Double amount) {
        this.account_id1 = account_id1;
        this.account_id2 = account_id2;
        this.amount = amount;
    }

    public Long getAccount_id1() {
        return account_id1;
    }

    public void setAccount_id1(Long account_id1) {
        this.account_id1 = account_id1;
    }

    public Long getAccount_id2() {
        return account_id2;
    }

    public void setAccount_id2(Long account_id2) {
        this.account_id2 = account_id2;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}

package com.example.bankapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long account_id1;
    private Long account_id2;
    private Double amount;

    public Transaction() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Transaction(Long account_id1, Long account_id2, Double amount) {
        this.account_id1 = account_id1;
        this.account_id2 = account_id2;
        this.amount = amount;
    }


}

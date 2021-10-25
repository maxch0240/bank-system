package com.example.bankapp.controllers;

import com.example.bankapp.model.Account;
import com.example.bankapp.model.Transaction;
import com.example.bankapp.pojo.TransactionRequest;
import com.example.bankapp.repos.AccountRepo;
import com.example.bankapp.repos.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("api/transactions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TransactionController {


    @Autowired
    TransactionRepo transactionRepo;

    @Autowired
    AccountRepo accountRepo;

    @GetMapping
    ResponseEntity<?> getAllTransactions() {
        System.out.println("send");
        List allTransactions = new ArrayList<Transaction>(transactionRepo.findAll());
        return ResponseEntity.ok(allTransactions);
    }

    @PostMapping
    private ResponseEntity<?> addTransaction(@RequestBody TransactionRequest transactionRequest) {
        Transaction transaction = new Transaction(transactionRequest.getAccount_id1(),
                transactionRequest.getAccount_id2(), transactionRequest.getAmount());


        //
        accountRepo.findById(transactionRequest.
                getAccount_id1()).orElseThrow(() -> new RuntimeException("wrong id"));
        accountRepo.findById(transactionRequest.
                getAccount_id1()).orElseThrow(() -> new RuntimeException("wrong id"));

        Account account1 = accountRepo.getById(transactionRequest.getAccount_id1());
        Account account2 = accountRepo.getById(transactionRequest.getAccount_id2());
        if(account1.getAmount() >= transactionRequest.getAmount()) {
            double newAccBalance1 = account1.getAmount() - transactionRequest.getAmount();
            double newAccBalance2 = account2.getAmount() + transactionRequest.getAmount();

            account1.setAmount(newAccBalance1);
            account2.setAmount(newAccBalance2);

            accountRepo.save(account1);
            accountRepo.save(account2);

            transactionRepo.save(transaction);
            return ResponseEntity.ok("transaction created");
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        //


    }

    @DeleteMapping("{id}")
    public void deleteTransaction(@PathVariable("id") Transaction transaction) {
        transactionRepo.delete(transaction);
    }
}

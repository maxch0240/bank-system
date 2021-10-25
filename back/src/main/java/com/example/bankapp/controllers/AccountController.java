package com.example.bankapp.controllers;

import com.example.bankapp.model.Account;
import com.example.bankapp.pojo.AccountRequest;
import com.example.bankapp.repos.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/accounts")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountController {

    @Autowired
    AccountRepo accountRepo;

    @GetMapping
    public ResponseEntity<?> getAllAccounts() {
        List allAccounts = new ArrayList<Account>(accountRepo.findAll());
        return ResponseEntity.ok(allAccounts);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getOneAccount(@PathVariable("id") Account account) {
        return ResponseEntity.ok(account);
    }

    @PostMapping
    private ResponseEntity<?> addAccount(@RequestBody AccountRequest accountRequest) {
        Account account = new Account(accountRequest.getName(),
                accountRequest.getAmount());
        accountRepo.save(account);
        return ResponseEntity.ok("Account created");
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateAccount(@PathVariable("id") Account account, @RequestBody AccountRequest accountRequest) {
        account.setName(accountRequest.getName());
        account.setAmount(accountRequest.getAmount());

        accountRepo.save(account);
        return ResponseEntity.ok("Account updated");
    }

    @DeleteMapping("{id}")
    public void deleteAccount(@PathVariable("id") Account account) {
        accountRepo.delete(account);
    }
}

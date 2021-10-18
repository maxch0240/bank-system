package com.example.bankapp.controllers;

import com.example.bankapp.model.Account;
import com.example.bankapp.repos.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/accounts")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountController {

    @Autowired
    AccountRepo accountRepo;

    @GetMapping
    ResponseEntity<?> getAllAccounts() {
        System.out.println("send");
        List allAccounts = new ArrayList<Account>(accountRepo.findAll());
      return  ResponseEntity.ok(allAccounts);
    }
}

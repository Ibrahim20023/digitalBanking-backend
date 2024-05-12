package ma.enset.digitalbankingbackend.dto;

import lombok.Data;

import ma.enset.digitalbankingbackend.entities.enums.AccountStatus;

import java.util.Date;

@Data
public class SavingBankAccountDTO extends BankAccountDTO {
    private String id;
    private double balance;
    private Date createdAt;
    private AccountStatus status;
    private CustomerDTO customer;
    private double interestRate;
}

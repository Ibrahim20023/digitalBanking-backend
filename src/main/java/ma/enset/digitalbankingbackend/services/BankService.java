package ma.enset.digitalbankingbackend.services;

import ma.enset.digitalbankingbackend.entities.BankAccount;
import ma.enset.digitalbankingbackend.entities.CurrentAccount;
import ma.enset.digitalbankingbackend.entities.SavingAccount;
import ma.enset.digitalbankingbackend.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BankService {
    @Autowired
    private BankAccountRepository bankAccountRepository;
     public void consulter(){
         BankAccount bankAccount = bankAccountRepository.findById("30d834a6-7909-49bf-8cca-d68528ed5791").get();
         if (bankAccount != null){
             System.out.println("******************");
             System.out.println(bankAccount.getId());
             System.out.println(bankAccount.getBalance());
             System.out.println(bankAccount.getStatus());
             System.out.println(bankAccount.getCreatedAt());
             System.out.println(bankAccount.getCustomer().getName());
             System.out.println(bankAccount.getClass().getSimpleName());
             if (bankAccount instanceof CurrentAccount){
                 System.out.println("Over draft => "+ ((CurrentAccount) bankAccount).getOverDraft());
             }else if (bankAccount instanceof SavingAccount){
                 System.out.println("Rate => "+ ((SavingAccount) bankAccount).getInterestRate());
             }
             bankAccount.getOperations().forEach(op ->{
                 System.out.println(op.getType()+ "\t"+ op.getOperationDate()+ "\t"+ op.getAmount());
             });
         }
     }
}

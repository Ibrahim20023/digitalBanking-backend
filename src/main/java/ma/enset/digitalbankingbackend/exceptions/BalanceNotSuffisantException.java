package ma.enset.digitalbankingbackend.exceptions;

public class BalanceNotSuffisantException extends Exception {
    public BalanceNotSuffisantException(String message) {
        super(message);
    }
}

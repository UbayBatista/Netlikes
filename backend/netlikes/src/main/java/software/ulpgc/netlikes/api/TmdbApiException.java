package software.ulpgc.netlikes.api;

public class TmdbApiException extends RuntimeException {
    public TmdbApiException(String message) {
        super(message);
    }

    public TmdbApiException(String message, Throwable cause) {
        super(message, cause);
    }
}
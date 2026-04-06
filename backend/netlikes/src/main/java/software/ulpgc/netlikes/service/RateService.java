package software.ulpgc.netlikes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.ulpgc.netlikes.model.Rate;
import software.ulpgc.netlikes.model.RateId;
import software.ulpgc.netlikes.repository.RateRepository;
import java.util.List;

@Service
public class RateService {

    @Autowired
    private RateRepository rateRepository;

    public List<Rate> getAllRates() {
        return rateRepository.findAll();
    }

    public Rate getRateById(RateId id) {
        return rateRepository.findById(id).orElse(null);
    }

    public Rate saveRate(Rate rate) {
        return rateRepository.save(rate);
    }

    public Rate updateRate(RateId id, Rate updatedRate) {
        return rateRepository.findById(id)
                .map(rate -> {
                    rate.setScore(updatedRate.getScore());
                    return rateRepository.save(rate);
                })
                .orElse(null);
    }

    public void deleteRate(RateId id) {
        rateRepository.deleteById(id);
    }
}

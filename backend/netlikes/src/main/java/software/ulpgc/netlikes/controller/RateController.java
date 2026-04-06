package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Rate;
import software.ulpgc.netlikes.model.RateId;
import software.ulpgc.netlikes.service.RateService;
import java.util.List;

@RestController
@RequestMapping("/rates")
@CrossOrigin(origins = "http://localhost:4200")
public class RateController {

    @Autowired
    private RateService rateService;

    @GetMapping
    public List<Rate> getAllRates() {
        return rateService.getAllRates();
    }

    @PostMapping
    public Rate saveRate(@RequestBody Rate rate) {
        return rateService.saveRate(rate);
    }

    @DeleteMapping("/delete")
    public void deleteRate(@RequestBody RateId id) {
        rateService.deleteRate(id);
    }
}
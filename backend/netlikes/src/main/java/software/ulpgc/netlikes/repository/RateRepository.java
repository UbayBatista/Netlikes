package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import software.ulpgc.netlikes.model.Rate;
import software.ulpgc.netlikes.model.RateId;

@Repository
public interface RateRepository extends JpaRepository<Rate, RateId> {
}

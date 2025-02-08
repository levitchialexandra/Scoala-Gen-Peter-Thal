package ro.scoalaPeterThal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@SpringBootApplication
@EnableJpaRepositories(basePackages = "repository")
@EntityScan(basePackages = "basics")
public class ScoalaGenPeterThalApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScoalaGenPeterThalApplication.class, args);
	}

}

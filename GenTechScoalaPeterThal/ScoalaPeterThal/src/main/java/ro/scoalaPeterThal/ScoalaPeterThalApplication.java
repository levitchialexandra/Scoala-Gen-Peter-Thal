package ro.scoalaPeterThal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "ro.scoalaPeterThalClasses.repository")
@EntityScan(basePackages = "ro.scoalaPeterThalClasses")
public class ScoalaPeterThalApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScoalaPeterThalApplication.class, args);
	}

}

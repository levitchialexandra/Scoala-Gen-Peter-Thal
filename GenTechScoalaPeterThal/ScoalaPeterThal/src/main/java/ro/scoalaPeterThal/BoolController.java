package ro.scoalaPeterThal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class BoolController {

	@GetMapping("books")
	public String getBooks(@RequestParam String param) {
		return "testpage";
	}
	
}

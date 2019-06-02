package pl.wszib.edu.pl.project.endProject.Controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {


    @GetMapping("/start")
    public String mainPage(){
        return "test";
    }






}

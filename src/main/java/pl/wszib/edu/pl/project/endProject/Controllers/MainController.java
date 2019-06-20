package pl.wszib.edu.pl.project.endProject.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.wszib.edu.pl.project.endProject.DAO.UserDAO;
import pl.wszib.edu.pl.project.endProject.Model.User;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MainController {

    private boolean isLogged = false;

    @Autowired
    private UserDAO userDAO;


    @GetMapping("")
    public String mainPage(){

        return "test";
    }



    @GetMapping("login/{userId}{password}")
    public String logIn (@PathVariable("userId") String userId, @PathVariable("password") String password){
        return "test";
    }







}

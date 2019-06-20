package pl.wszib.edu.pl.project.endProject.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.wszib.edu.pl.project.endProject.Model.Results;
import pl.wszib.edu.pl.project.endProject.Service.GameService;

import java.util.List;


//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GameController {

    @Autowired
    GameService gameService;


    // RESULTS MAPPING
    @GetMapping("/results")
    private List<Results> getAllResults(){
        return gameService.getAllResults();
    }

    @PostMapping("/results")
    private Integer saveOneResult(@RequestBody Results results){
        gameService.saveOneResult(results);
        return results.getId();
    }



}

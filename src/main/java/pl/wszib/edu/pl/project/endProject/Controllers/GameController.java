package pl.wszib.edu.pl.project.endProject.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.wszib.edu.pl.project.endProject.Model.Games;
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

    @GetMapping("/results/{gameName}")
    private List<Results> getAllResultsByGameType(@PathVariable String gameName) {
        return gameService.getAllResultsByGameName(gameName);
    }


    @PostMapping("/results")
    private Integer saveOneResult(@RequestBody Results results){
        gameService.saveOneResult(results);
        return results.getId();
    }


    @PutMapping("/results/{gameN}")
    private Integer saveOneResult(@RequestBody Results results, @PathVariable String gameN) {
        Results r = new Results();
        r.setUsersAnswer(results.getUsersAnswer());
        r.setCorrectAnswer(results.getCorrectAnswer());
        gameService.updateResultwithGameName(r, gameN);
        return r.getId();
    }


    // GAMES MAPPING
    @GetMapping("/games")
    private List<Games> getAllGames(){
        return gameService.getAllGames();
    }

    @GetMapping("/games/{gameName}")
    private List<Games> getGamesByGameName(@PathVariable String gameName) {
        return gameService.getGamesByGameName(gameName);
    }




}

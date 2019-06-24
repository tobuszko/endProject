package pl.wszib.edu.pl.project.endProject.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.wszib.edu.pl.project.endProject.DAO.GamesDAO;
import pl.wszib.edu.pl.project.endProject.Model.Games;

/*

    Initial setup of 'Games' table, created during application's start.
    This table gets all data from enumeration GameType

 */


@Component
public class InitialLoad implements CommandLineRunner {

    @Autowired
    private GamesDAO gamesDAO;

    @Override
    public void run(String... args) throws Exception {

        for (GameType gameType: GameType.values()){
            gamesDAO.save(new Games(gameType.name()));
        }

    }

}

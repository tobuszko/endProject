package pl.wszib.edu.pl.project.endProject.DAO;

import org.springframework.data.repository.CrudRepository;
import pl.wszib.edu.pl.project.endProject.Model.Games;

import java.util.List;


public interface GamesDAO extends CrudRepository<Games, Integer> {

    List<Games> findByGameName(String gameName);

}

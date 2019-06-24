package pl.wszib.edu.pl.project.endProject.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.wszib.edu.pl.project.endProject.Model.Games;
import pl.wszib.edu.pl.project.endProject.Model.Results;

import java.util.List;

@Repository
public interface ResultsDAO extends CrudRepository<Results, Integer> {

    List<Results> findByGame(String gameName);
}

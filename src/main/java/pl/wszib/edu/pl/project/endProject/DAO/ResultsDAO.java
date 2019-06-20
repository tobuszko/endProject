package pl.wszib.edu.pl.project.endProject.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.wszib.edu.pl.project.endProject.Model.Results;

@Repository
public interface ResultsDAO extends CrudRepository<Results, Integer> {
}
